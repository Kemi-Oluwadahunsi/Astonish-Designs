import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./scrollarrow.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const ScrollArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="scroll-buttons">
      <a
        href="https://wa.me/2348134473169"
        className="fab fab--whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
      <button
        type="button"
        className={`fab fab--top${isVisible ? " is-visible" : ""}`}
        onClick={goTop}
        aria-label="Back to top"
        tabIndex={isVisible ? 0 : -1}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </div>
  );
};

export default ScrollArrow;
