import { Link } from "react-router-dom";
import "./footer.scss";

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
