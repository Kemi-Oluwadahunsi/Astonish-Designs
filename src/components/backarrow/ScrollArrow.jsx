import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons"
import "./scrollarrow.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"


const ScrollArrow = () => {

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      })
    }, []);

    const goTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    };


  return (
    <div className="scroll-buttons">
      <div
        className="btn-Scroll"
        style={{ display: isVisible ? "block" : "none" }}
        onClick={goTop}
      >
        <FontAwesomeIcon icon={faArrowCircleUp} color="white" />
      </div>
      <a
        href="https://wa.me/+2348134473169"
        className="btn-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} color="white" />
      </a>
    </div>
  );
}

export default ScrollArrow