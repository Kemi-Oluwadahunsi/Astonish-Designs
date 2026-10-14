// Generates responsive AVIF/WebP variants from images-src/ into public/images/
// and writes src/data/images.json, keyed by the original public path ("/images/x.JPG").
import { mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const SRC_DIR = path.join(ROOT, "images-src");
const OUT_DIR = path.join(ROOT, "public", "images");
const MANIFEST = path.join(ROOT, "src", "data", "images.json");
const WIDTHS = [320, 640, 1280, 1920];
const RASTER = /\.(jpe?g|png|webp)$/i;
const force = process.argv.includes("--force");

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((e) => {
      const full = path.join(dir, e.name);
      return e.isDirectory() ? walk(full) : RASTER.test(e.name) ? [full] : [];
    })
  );
  return files.flat();
}

async function isFresh(srcFile, outFiles) {
  if (force) return false;
  const srcTime = (await stat(srcFile)).mtimeMs;
  try {
    const times = await Promise.all(outFiles.map((f) => stat(f).then((s) => s.mtimeMs)));
    return times.every((t) => t >= srcTime);
  } catch {
    return false;
  }
}

async function main() {
  const files = (await walk(SRC_DIR)).sort();
  let previous = {};
  try {
    previous = JSON.parse(await readFile(MANIFEST, "utf8"));
  } catch {
    // first run
  }

  // Output file names are lowercased (directories keep their case, as on disk);
  // disambiguate bases that differ only by extension.
  const baseOf = (file) => {
    const rel = path.relative(SRC_DIR, file);
    const name = path.basename(rel, path.extname(rel)).toLowerCase();
    return path.join(path.dirname(rel), name);
  };
  const counts = {};
  files.forEach((f) => (counts[baseOf(f)] = (counts[baseOf(f)] ?? 0) + 1));

  const manifest = {};
  let processed = 0;

  for (const file of files) {
    const rel = path.relative(SRC_DIR, file).split(path.sep).join("/");
    const key = `/images/${rel}`;
    let base = baseOf(file).split(path.sep).join("/");
    if (counts[baseOf(file)] > 1) base += `-${path.extname(file).slice(1).toLowerCase()}`;

    const image = sharp(file).rotate();
    const meta = await image.metadata();
    const swap = (meta.orientation ?? 1) >= 5;
    const w = swap ? meta.height : meta.width;
    const h = swap ? meta.width : meta.height;
    const widths = WIDTHS.filter((x) => x < w);
    if (widths.length < WIDTHS.length) widths.push(Math.min(w, WIDTHS[WIDTHS.length - 1]));

    const outFiles = widths.flatMap((x) =>
      ["avif", "webp"].map((ext) => path.join(OUT_DIR, `${base}-${x}.${ext}`))
    );

    if (previous[key]?.base === `/images/${base}` && (await isFresh(file, outFiles))) {
      manifest[key] = previous[key];
      continue;
    }

    await mkdir(path.dirname(outFiles[0]), { recursive: true });
    await Promise.all(
      widths.flatMap((x) => {
        const resized = sharp(file).rotate().resize({ width: x, withoutEnlargement: true });
        return [
          resized.clone().avif({ quality: 50, effort: 4 }).toFile(path.join(OUT_DIR, `${base}-${x}.avif`)),
          resized.clone().webp({ quality: 74 }).toFile(path.join(OUT_DIR, `${base}-${x}.webp`)),
        ];
      })
    );

    const entry = { base: `/images/${base}`, w, h, widths };
    if (!meta.hasAlpha) {
      const tiny = await sharp(file).rotate().resize({ width: 16 }).blur(1).webp({ quality: 40 }).toBuffer();
      entry.ph = `data:image/webp;base64,${tiny.toString("base64")}`;
    }
    manifest[key] = entry;
    processed++;
    console.log(`  ${key} -> ${base} [${widths.join(", ")}]`);
  }

  // Favicons from the brand logo
  const logo = path.join(SRC_DIR, "Logo.png");
  await sharp(logo).resize(64, 64, { fit: "cover" }).png().toFile(path.join(ROOT, "public", "favicon.png"));
  await sharp(logo).resize(180, 180, { fit: "cover" }).png().toFile(path.join(ROOT, "public", "apple-touch-icon.png"));

  await mkdir(path.dirname(MANIFEST), { recursive: true });
  await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
  console.log(`Done: ${processed} processed, ${files.length - processed} up to date.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
