import { Link } from "react-router-dom";
import "./header.scss";
import PropTypes from "prop-types";

const Header = ({scrollToContact, isAboutPage}) => {

  const changeBackground = () => {
     return {
       backgroundColor: isAboutPage ? "#3d3d3d" : "rgba(47, 47, 47, 0.1)",
     };
  }
  
  return (
    <>
      <div className="header" style={changeBackground()}>
        <div className="navBody">
          <div className="logo">
            <Link to="/">
              <img src="/images/Logo.jpg" alt="Logo" width={100} />
            </Link>
          </div>
          <div className="navLinks">
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>

              <Link to="/about">
                <li>About Us</li>
              </Link>

              <li onClick={scrollToContact}>Contact</li>
            </ul>
          </div>

          <Link to="/catalogue">
            <button>Catalogue</button>
          </Link>
        </div>
      </div>
    </>
  );
};
Header.propTypes = {
  scrollToContact: PropTypes.func.isRequired,
  isAboutPage: PropTypes.func.isRequired,
};
export default Header;
