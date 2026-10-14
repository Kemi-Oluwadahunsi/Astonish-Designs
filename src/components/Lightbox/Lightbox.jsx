import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Img from "../Img/Img";
import "./lightbox.scss";

const Lightbox = ({ image, onClose, children }) => {
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
      className={`modal${children ? " modal--withActions" : ""}`}
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
      <Img
        src={image.src}
        alt={image.alt}
        className="modalImage"
        sizes="(min-width: 980px) 900px, 92vw"
        priority
      />
      {children && <div className="modalActions">{children}</div>}
    </div>
  );
};

Lightbox.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Lightbox;
