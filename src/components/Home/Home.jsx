import "./home.scss";
import About from "../About/About";
import Services from "../Services/Services";
import Catalogue from "../Catalogue/Catalogue";
import Testimonial from "../Testimonials/Testimonial";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import PropTypes from "prop-types";
import { animateScroll as scroll } from "react-scroll";
import { useRef } from "react";
import Navbar from "../Navbar/Navbar";

const Home = ({ showContact, toggleContact }) => {
  const contactRef = useRef(null);
  const scrollToContact = () => {
    console.log("Scrolling to contact");
    scroll.scrollTo(contactRef.current.offsetTop, {
      duration: 800,
      offset: -50,
      smooth: "easeInOutQuad",
    });
  };

  return (
    <div className="mainBody">
      <div className="main">
        <Header scrollToContact={scrollToContact} />
        <Navbar scrollToContact={scrollToContact} />
        <div className="mainContent">
          <div className="text">
            <h1>Astonish</h1>
            <h1 className="design">Designs</h1>
            <span>A Style For Every Age</span>
          </div>
        </div>
      </div>

      <About />
      <Services />
      <Catalogue />
      <Testimonial />
      <Contact
        showContact={showContact}
        toggleContact={toggleContact}
        updateButtonText={() => {}}
        ref={contactRef}
      />
    </div>
  );
};
Home.propTypes = {
  showContact: PropTypes.bool.isRequired,
  toggleContact: PropTypes.func.isRequired,
};
export default Home;
