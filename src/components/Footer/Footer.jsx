import { Link } from "react-router-dom";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="footer">
      <div className="firstFooter">
        <div className="logoOriginal">
          <img src="/images/logoOriginal.jpg" alt="logo" width={100} />
        </div>

        <div className="footerLinks">
          <ul>
            <li onClick={scrollToTop}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={scrollToTop}>
              <Link to="/about">About Us</Link>
            </li>

            <li onClick={scrollToTop}>
              <Link to="/catalogue">Catalogue</Link>
            </li>
          </ul>

          <div className="externalLinks">
            <a
              href="https://leadingladiesafrica.org/from-threads-to-trends-esosa-igbinedion-is-carving-her-way-into-the-fashion-industry/"
              target="_blank"
              rel="noreferrer"
            >
              Featured Blog
            </a>
            <a href="https://www.elle.com" target="_blank" rel="noreferrer">
              Fashion Magazine
            </a>

            <a href="https://www.elle.com" target="_blank" rel="noreferrer">
              Fashionista
            </a>
          </div>
        </div>

        <div className="socials">
          <ul>
            <li>
              <a
                href="https://www.instagram.com/astonishdesigns"
                target="_blank"
                rel="noreferrer"
                className="instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>

            <li>
              <a
                href="https://www.facebook.com/officialastonishdesigns"
                target="_blank"
                rel="noreferrer"
                className="facebook"
              >
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
            </li>

            <li>
              <a
                href="https://www.facebook.com/officialastonishdesigns"
                target="_blank"
                rel="noreferrer"
                className="xTwitter"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </li>

            <li>
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

      <div className="secondFooter">
        <div className="rights">
          <span className="circleC">&#169;</span> {new Date().getFullYear()}{" "}
          Astonish Designs. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
