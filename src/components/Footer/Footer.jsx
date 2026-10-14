import { Link } from "react-router-dom";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  { href: "https://www.instagram.com/astonishdesigns", icon: faInstagram, label: "Instagram" },
  { href: "https://www.facebook.com/officialastonishdesigns", icon: faFacebookSquare, label: "Facebook" },
  { href: "https://www.facebook.com/officialastonishdesigns", icon: faXTwitter, label: "X (Twitter)" },
  { href: "https://www.facebook.com/officialastonishdesigns", icon: faLinkedin, label: "LinkedIn" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="firstFooter">
        <div className="brandCol">
          <img
            src="/images/logoOriginal.jpg"
            alt="Astonish Designs logo"
            width={88}
            height={88}
            loading="lazy"
          />
          <p>A Style For Every Age.</p>
        </div>

        <nav className="footerCol" aria-label="Footer">
          <h3>Explore</h3>
          <ul>
            <li>
              <Link to="/" onClick={scrollToTop}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={scrollToTop}>About Us</Link>
            </li>
            <li>
              <Link to="/catalogue" onClick={scrollToTop}>Catalogue</Link>
            </li>
          </ul>
        </nav>

        <div className="footerCol">
          <h3>Press</h3>
          <ul>
            <li>
              <a
                href="https://leadingladiesafrica.org/from-threads-to-trends-esosa-igbinedion-is-carving-her-way-into-the-fashion-industry/"
                target="_blank"
                rel="noreferrer"
              >
                Featured Blog
              </a>
            </li>
            <li>
              <a href="https://www.elle.com" target="_blank" rel="noreferrer">
                Fashion Magazine
              </a>
            </li>
            <li>
              <a href="https://www.elle.com" target="_blank" rel="noreferrer">
                Fashionista
              </a>
            </li>
          </ul>
        </div>

        <div className="footerCol">
          <h3>Follow</h3>
          <ul className="socials">
            {socials.map(({ href, icon, label }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
                  <FontAwesomeIcon icon={icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="secondFooter">
        <p className="rights">
          &copy; {new Date().getFullYear()} Astonish Designs. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
