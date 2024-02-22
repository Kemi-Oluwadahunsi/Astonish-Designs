
import './navbar.scss'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";


const Navbar = ({ scrollToContact }) => {
  const [showMobileContent, setShowMobileContent] = useState(false);

  const toggleMobileContent = () => {
    setShowMobileContent(!showMobileContent);
  };

  const closeMobileContent = () => {
    setShowMobileContent(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.querySelector(".small-screens");
      if (navbar && !navbar.contains(event.target)) {
        closeMobileContent();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* navbar for phone-tab view */}
      <div className="small-screens">
        <div className="navbar">
          <div className="nav">
            <div className="logo">
              <Link to="/">
                <img src="/images/Logo.jpg" alt="Logo" width={100} />
              </Link>
            </div>
            <div className="toggleButton">
              <button onClick={toggleMobileContent}>
                {showMobileContent ? (
                  <FontAwesomeIcon
                    icon={faTimes}
                    style={{
                      width: "20px",
                      height: "20px",
                      border: "none",
                    }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faBars}
                    style={{ width: "20px", height: "20px" }}
                  />
                )}
              </button>
            </div>
          </div>

          <div className={`bg ${showMobileContent ? "visible" : "hidden"}`}>
            <ul className="navigationItems">
              <Link to="/">
                <li>Home</li>
              </Link>

              <Link to="/about">
                <li>About Us</li>
              </Link>

              <li onClick={scrollToContact}>Contact</li>

              <Link to="/catalogue">
                <button>Catalogue</button>
              </Link>
            </ul>

            <div className="socialIcons">
              <ul>
                <li onClick={closeMobileContent}>
                  <a
                    href="https://www.instagram.com/astonishdesigns"
                    target="_blank"
                    rel="noreferrer"
                    className="instagram"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>

                <li onClick={closeMobileContent}>
                  <a
                    href="https://www.facebook.com/officialastonishdesigns"
                    target="_blank"
                    rel="noreferrer"
                    className="facebook"
                  >
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </a>
                </li>

                <li onClick={closeMobileContent}>
                  <a
                    href="https://www.facebook.com/officialastonishdesigns"
                    target="_blank"
                    rel="noreferrer"
                    className="xTwitter"
                  >
                    <FontAwesomeIcon icon={faXTwitter} />
                  </a>
                </li>

                <li onClick={closeMobileContent}>
                  <a
                    href="https://www.facebook.com/officialastonishdesigns"
                    target="_blank"
                    rel="noreferrer"
                    className="linkedin"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
Navbar.propTypes = {
  scrollToContact: PropTypes.func.isRequired,
};
export default Navbar
