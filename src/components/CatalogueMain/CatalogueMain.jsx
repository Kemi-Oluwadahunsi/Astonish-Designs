import Header from "../Header/Header";
import "./cataloguemain.scss";
import { useEffect, useRef, useState } from "react";
import Contact from "../Contact/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Navbar/Navbar";
import Collections from "./Collections";

const CatalogueMain = () => {
  const [showContact, setShowContact] = useState(false);
  const contactRef = useRef(null);

  const scrollToContact = () => {
    document
      .getElementById("contactMe")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (showContact) {
      contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [showContact]);

  return (
    <main className="catalogueMain">
      <div className="subHeader">
        <Header scrollToContact={scrollToContact} />
        <Navbar scrollToContact={scrollToContact} />
        <div className="catalogueMainTitle">
          <h1>Our Collections</h1>
          <p>
            Explore our curated selection of timeless pieces crafted with
            precision and passion, designed to inspire confidence and captivate
            the senses.
          </p>
        </div>
      </div>

      <Collections />

      <div className="contactMe" id="contactMe">
        <p>Let&apos;s Make Your Dream Outfits Real!</p>
        <button
          type="button"
          onClick={() => setShowContact((open) => !open)}
          className="contactButton"
          aria-expanded={showContact}
          aria-controls="contact"
        >
          {showContact ? "Close form" : "Contact Us Now"}
          <FontAwesomeIcon icon={showContact ? faTimes : faArrowRight} />
        </button>
      </div>

      {showContact && <Contact ref={contactRef} />}
    </main>
  );
};

export default CatalogueMain;
