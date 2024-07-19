import Header from "../Header/Header";
import "./cataloguemain.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import Contact from "../Contact/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import Navbar from "../Navbar/Navbar";
import Collections from "./Collections";

const CatalogueMain = ({ showContact, toggleContact }) => {
  const [buttonText, setButtonText] = useState("Click to close");
  const [initialLoad, setInitialLoad] = useState(true);

  const updateButtonText = (text) => {
    setButtonText(text);
  };

  const shouldShowContact = initialLoad ? false : showContact;

  useEffect(() => {
    setInitialLoad(false);
  }, []);

  const scrollToContact = () => {
    const contactMeSection = document.getElementById("contactMe");
    contactMeSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="catalogueMain">
        <div className="subHeader">
          <Header scrollToContact={scrollToContact} />
          <Navbar scrollToContact={scrollToContact} />
          <div className="catalogueMainTitle">
            <h1>Our Collections</h1>
            <p>
              Explore our curated selection of timeless pieces crafted with
              precision and passion, designed to inspire confidence and
              captivate the senses.
            </p>
          </div>
        </div>

        <Collections />

        <div className="contactMe" id="contactMe">
          <p>Let&apos;s Make Your Dream Outfits Real!</p>
          <button onClick={toggleContact} className="contactButton">
            {shouldShowContact ? "Contact Us Now" : buttonText}
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>

      {!shouldShowContact && (
        <Contact
          showContact={showContact}
          toggleContact={toggleContact}
          updateButtonText={updateButtonText}
        />
      )}
    </>
  );
};

CatalogueMain.propTypes = {
  showContact: PropTypes.bool.isRequired,
  toggleContact: PropTypes.func.isRequired,
};

export default CatalogueMain;
