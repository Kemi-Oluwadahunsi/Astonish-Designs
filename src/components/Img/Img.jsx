import PropTypes from "prop-types";
import images from "../../data/images.json";

const srcSet = (meta, ext) =>
  meta.widths.map((w) => `${meta.base}-${w}.${ext} ${w}w`).join(", ");

const Img = ({ src, alt, sizes = "100vw", priority = false, style, ...rest }) => {
  const meta = images[src];

  if (!meta) {
    if (import.meta.env.DEV) console.warn(`<Img>: no optimised variants for ${src}`);
    return <img src={src} alt={alt} style={style} {...rest} />;
  }

  const fallback = meta.widths.find((w) => w >= 640) ?? meta.widths.at(-1);
  const placeholder = meta.ph && {
    backgroundImage: `url(${meta.ph})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <picture>
      <source type="image/avif" srcSet={srcSet(meta, "avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet(meta, "webp")} sizes={sizes} />
      <img
        src={`${meta.base}-${fallback}.webp`}
        alt={alt}
        width={meta.w}
        height={meta.h}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "auto" : "async"}
        fetchPriority={priority ? "high" : undefined}
        style={{ ...placeholder, ...style }}
        {...rest}
      />
    </picture>
  );
};

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  sizes: PropTypes.string,
  priority: PropTypes.bool,
  style: PropTypes.object,
};

export default Img;
