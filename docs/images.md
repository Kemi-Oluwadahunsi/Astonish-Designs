# Images

Site images are pre-optimised into responsive AVIF/WebP variants by a `sharp` script and rendered with the `<Img>` component.

## How it fits together

| Path | Purpose | Deployed |
| --- | --- | --- |
| `images-src/` | Full-size originals (source of truth, kept for storage) | No |
| `scripts/optimize-images.mjs` | Generates variants, placeholders, manifest and favicons | No |
| `public/images/` | Generated `<name>-<width>.{avif,webp}` files | Yes |
| `src/data/images.json` | Manifest keyed by the original path (`/images/catalog3.JPG`) | Bundled |
| `src/components/Img/Img.jsx` | Renders `<picture>` with `srcset`/`sizes`, dimensions and blur placeholder | Bundled |

Each manifest entry looks like:

```json
"/images/catalog3.JPG": {
  "base": "/images/catalog3",
  "w": 3024,
  "h": 4032,
  "widths": [320, 640, 1280, 1920],
  "ph": "data:image/webp;base64,..."
}
```

- `widths`: 320, 640, 1280, 1920, never wider than the original; a smaller original adds its own width as the largest.
- `ph`: a 16px blurred WebP used as a placeholder (omitted for images with transparency).

## Adding an image

1. Put the full-size original in `images-src/` (subfolders allowed):

   ```
   images-src/newCollection/look1.jpg
   ```

2. Generate the variants:

   ```sh
   npm run images
   ```

3. Use it with `<Img>`, passing the **original path** as if it lived in `public/images/`:

   ```jsx
   import Img from "../Img/Img";

   <Img
     src="/images/newCollection/look1.jpg"
     alt="Emerald kaftan from the New collection"
     sizes="(min-width: 768px) 33vw, 100vw"
   />
   ```

4. Commit the original, the generated files in `public/images/`, and `src/data/images.json`.

## `<Img>` props

| Prop | Default | Notes |
| --- | --- | --- |
| `src` | — | Original path; must exist in the manifest |
| `alt` | — | Use `""` for decorative images |
| `sizes` | `"100vw"` | Rendered width of the image, so the browser picks the right file |
| `priority` | `false` | Eager loading + `fetchpriority="high"`; only for above-the-fold images |
| `...rest` | | Passed to `<img>` and override the defaults (e.g. `width`, `height`, `loading`, `className`) |

`<picture>` is `display: contents` (see `App.scss`), so style the `<img>` as before.

## Updating or removing an image

- **Replace:** overwrite the original (same name) and run `npm run images`. Unchanged images are skipped by modification time.
- **Rebuild everything:** `npm run images -- --force`.
- **Remove:** delete the original, run `npm run images` (drops the manifest entry), then delete its `public/images/<name>-*.{avif,webp}` files manually — the script doesn't delete old outputs.

## CSS backgrounds

`<Img>` can't be used in CSS, so reference generated files directly with `image-set()` and a WebP fallback (see `src/components/Home/home.scss`):

```scss
background: $shade, url(/images/hero-back2-1280.webp) center / cover no-repeat;
background-image: $shade,
  image-set(
    url(/images/hero-back2-1920.avif) type("image/avif"),
    url(/images/hero-back2-1920.webp) type("image/webp")
  );
```

Only use widths that exist in the image's `widths` in the manifest. If the homepage hero changes, update the `<link rel="preload">` tags in `index.html` too.

## Gotchas

- **Missing from the manifest:** `<Img>` falls back to a plain `<img>` and logs a warning in dev. The original isn't deployed, so it will be broken in production — run `npm run images`.
- **Case:** generated file names are lowercase; folder names keep their case (`catalogFolder/`, `Icons/`). Production hosts are case-sensitive even though macOS isn't.
- **Same name, different extension** (`look1.jpg` + `look1.png`) get `-jpg` / `-png` suffixes in their output names.
- **Favicons:** `public/favicon.png` and `public/apple-touch-icon.png` are generated from `images-src/Logo.png` on every run — keep that file.
- **Unused originals:** `images-src/` contains some originals not referenced by the site; they are kept intentionally for storage.
