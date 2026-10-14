import { Link, NavLink } from "react-router-dom";
import "./header.scss";
import PropTypes from "prop-types";

const Header = ({ scrollToContact, isAboutPage = false }) => {
  return (
    <header className={`header ${isAboutPage ? "header--solid" : ""}`}>
      <nav className="navBody" aria-label="Main">
        <Link to="/" className="logo" aria-label="Astonish Designs home">
          <img src="/images/Logo.jpg" alt="Astonish Designs logo" width={72} height={72} />
        </Link>

        <ul className="navLinks">
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <button type="button" onClick={scrollToContact}>
              Contact
            </button>
          </li>
        </ul>

        <Link to="/catalogue" className="ctaButton">
          Catalogue
        </Link>
      </nav>
    </header>
  );
};
Header.propTypes = {
  scrollToContact: PropTypes.func.isRequired,
  isAboutPage: PropTypes.bool,
};
export default Header;
