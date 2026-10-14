import { Link, NavLink } from "react-router-dom";
import "./header.scss";
import Img from "../Img/Img";
import PropTypes from "prop-types";
import useScrolled from "../../hooks/useScrolled";

const Header = ({ scrollToContact, isAboutPage = false }) => {
  const scrolled = useScrolled();
  const modifiers = `${isAboutPage ? " header--solid" : ""}${scrolled ? " header--scrolled" : ""}`;

  return (
    <header className={`header${modifiers}`}>
      <nav className="navBody" aria-label="Main">
        <Link to="/" className="logo" aria-label="Astonish Designs home">
          <Img src="/images/Logo.jpg" alt="Astonish Designs logo" sizes="72px" width={72} height={72} loading="eager" />
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
