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
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const socials = [
  { href: "https://www.instagram.com/astonishdesigns", icon: faInstagram, label: "Instagram" },
  { href: "https://www.facebook.com/officialastonishdesigns", icon: faFacebookSquare, label: "Facebook" },
  { href: "https://www.facebook.com/officialastonishdesigns", icon: faXTwitter, label: "X (Twitter)" },
  { href: "https://www.facebook.com/officialastonishdesigns", icon: faLinkedin, label: "LinkedIn" },
];

const Navbar = ({ scrollToContact, isAboutPage = false }) => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <div className={`small-screens ${isAboutPage ? "small-screens--solid" : ""}`}>
      <div className="nav">
        <Link to="/" className="logo" onClick={close} aria-label="Astonish Designs home">
          <img src="/images/Logo.jpg" alt="Astonish Designs logo" width={56} height={56} />
        </Link>
        <button
          type="button"
          className="toggleButton"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <FontAwesomeIcon icon={open ? faTimes : faBars} />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`menu ${open ? "is-open" : ""}`}
        aria-hidden={!open}
        inert={!open}
      >
        <ul className="navigationItems">
          <li>
            <NavLink to="/" end onClick={close}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={close}>
              About Us
            </NavLink>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                close();
                scrollToContact();
              }}
            >
              Contact
            </button>
          </li>
          <li>
            <Link to="/catalogue" className="menuCta" onClick={close}>
              Catalogue
            </Link>
          </li>
        </ul>

        <ul className="socialIcons">
          {socials.map(({ href, icon, label }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noreferrer" aria-label={label} onClick={close}>
                <FontAwesomeIcon icon={icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
Navbar.propTypes = {
  scrollToContact: PropTypes.func.isRequired,
  isAboutPage: PropTypes.bool,
};
export default Navbar;
