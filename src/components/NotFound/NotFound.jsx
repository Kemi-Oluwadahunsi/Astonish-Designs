import { Link } from "react-router-dom";
import Seo from "../Seo/Seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import "./notfound.scss";

const scrollToContact = () => {
  document.querySelector(".footer")?.scrollIntoView({ behavior: "smooth" });
};

const NotFound = () => (
  <main className="notFound">
    <Seo
      title="Page not found"
      description="This page doesn't exist. Browse the Astonish Designs catalogue or head back home."
      path="/404"
      noindex
    />

    <Header scrollToContact={scrollToContact} />
    <Navbar scrollToContact={scrollToContact} />

    <div className="notFoundBody">
      <span className="code" aria-hidden="true">404</span>
      <h1>This page has slipped off the rail</h1>
      <p>
        The link may be old or mistyped. Our collections are still right where
        you left them.
      </p>
      <div className="actions">
        <Link to="/catalogue" className="primary">
          Browse the catalogue
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
        <Link to="/" className="ghost">
          Back to home
        </Link>
      </div>
    </div>
  </main>
);

export default NotFound;
