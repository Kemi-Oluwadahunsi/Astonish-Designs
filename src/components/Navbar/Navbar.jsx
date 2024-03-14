import "./navbar.scss";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ scrollToContact, isAboutPage }) => {
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

  const changeBackground = () => {
    return {
      backgroundColor: isAboutPage
        ? "rgb(152, 152, 152)"
        : "rgba(47, 47, 47, 0.1)",
    };
  };
  return (
    <>
      {/* navbar for phone-tab view */}
      <div className="small-screens" style={changeBackground()}>
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
                      
                    }}
                    className="times"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faBars}
                    style={{ width: "23px", height: "23px" }}
                  />
                )}
              </button>
            </div>
          </div>

          <div className={`bg ${showMobileContent ? "visible" : "hidden"}`}>
            <ul className="navigationItems">
              <Link to="/" onClick={closeMobileContent}>
                <li>Home</li>
              </Link>

              <Link to="/about" onClick={closeMobileContent}>
                <li>About Us</li>
              </Link>

              <li
                onClick={() => {
                  scrollToContact();
                  closeMobileContent();
                }}
              >
                Contact
              </li>

              <Link to="/catalogue" onClick={closeMobileContent}>
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
  isAboutPage: PropTypes.bool.isRequired,
};
export default Navbar;
