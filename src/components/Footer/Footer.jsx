import { Link } from "react-router-dom";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";

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
            <li onClick={scrollToTop}>Home</li>

            <Link to="/about">
              <li>About Us</li>
            </Link>

            <li>Contact</li>
          </ul>

          <ul>
            <a href="https://www.elle.com/" target="_blank" rel="noreferrer">
              <li>Fashion Magazine</li>
            </a>
            <a href="https://www.elle.com/" target="_blank" rel="noreferrer">
              <li>Women&apos;s Wear Daily</li>
            </a>
            <a href="https://www.elle.com/" target="_blank" rel="noreferrer">
              <li>Fashionista</li>
            </a>
          </ul>
        </div>

        <div className="socials">
          <a
            href="https://www.instagram.com/astonishdesigns"
            target="_blank"
            rel="noreferrer"
            className="instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.facebook.com/officialastonishdesigns"
            target="_blank"
            rel="noreferrer"
            className="facebook"
          >
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>

          <a
            href="https://www.facebook.com/officialastonishdesigns"
            target="_blank"
            rel="noreferrer"
            className="xTwitter"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>

          <a
            href="https://www.facebook.com/officialastonishdesigns"
            target="_blank"
            rel="noreferrer"
            className="linkedin"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
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
