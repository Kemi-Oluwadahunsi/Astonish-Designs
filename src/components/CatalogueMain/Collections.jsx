import { useCallback, useEffect, useRef, useState } from "react";
import Wears from "../Wears";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faExpand } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import "./cataloguemain.scss";

const Modal = ({ image, onClose }) => {
  const closeRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      previousFocus?.focus?.();
    };
  }, [onClose]);

  return (
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <button
        ref={closeRef}
        type="button"
        className="modalClose"
        onClick={onClose}
        aria-label="Close image"
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <img src={image.src} alt={image.alt} className="modalImage" />
    </div>
  );
};

Modal.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

const Collections = () => {
  const [selected, setSelected] = useState(null);
  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <>
      <div className="collections">
        {Wears.map((wear) => (
          <section className="collection" key={wear.id}>
            <div className="feature">
              <div className="featureHead">
                {wear.collectionName && (
                  <span className="tag">{wear.collectionName}</span>
                )}
                <h2>{wear.title}</h2>
              </div>

              <button
                type="button"
                className="featureImage"
                onClick={() =>
                  setSelected({ src: wear.innerDivImage, alt: wear.title })
                }
                aria-label={`View ${wear.title} full size`}
              >
                <img
                  src={wear.innerDivImage}
                  alt={wear.title}
                  width={400}
                  height={533}
                  loading="lazy"
                  decoding="async"
                />
              </button>

              {wear.colors && (
                <div className="palette">
                  <span>Palette</span>
                  <ul>
                    {wear.colors.map((color) => (
                      <li
                        key={color.id}
                        style={{ backgroundColor: color.color }}
                        title={color.color}
                      />
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <ul className="gallery" aria-label={`${wear.title} looks`}>
              {wear.images.map((image, index) => {
                const alt = `${wear.title} look ${index + 1}`;
                return (
                  <li key={image.id}>
                    <button
                      type="button"
                      className="galleryItem"
                      onClick={() => setSelected({ src: image.img, alt })}
                      aria-label={`View ${alt} full size`}
                    >
                      <img
                        src={image.img}
                        alt={alt}
                        width={280}
                        height={350}
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="viewHint" aria-hidden="true">
                        <FontAwesomeIcon icon={faExpand} /> View
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>

      {selected && <Modal image={selected} onClose={closeModal} />}
    </>
  );
};

export default Collections;
