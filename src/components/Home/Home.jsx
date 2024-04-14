import "./home.scss";
import About from "../About/About";
import Services from "../Services/Services";
import Catalogue from "../Catalogue/Catalogue";
import Testimonial from "../Testimonials/Testimonial";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import PropTypes from "prop-types";
import { animateScroll as scroll } from "react-scroll";
import { useState, useRef, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { motion, AnimatePresence } from "framer-motion";


const Home = ({ showContact, toggleContact }) => {
  const [text, setText] = useState("");
  const contactRef = useRef(null);
  const scrollToContact = () => {
    console.log("Scrolling to contact");
    scroll.scrollTo(contactRef.current.offsetTop, {
      duration: 800,
      offset: -50,
      smooth: "easeInOutQuad",
    });
  };

  const sentence = "A Style For Every Age";

  useEffect(() => {
    const typingAnimation = () => {
      let index = 0;
      const interval = setInterval(() => {
        setText(sentence.slice(0, index));
        index++;
        if (index > sentence.length) {
          clearInterval(interval);
          setTimeout(typingAnimation, 5000);
        }
      }, 100);

      return () => clearInterval(interval);
    };

    typingAnimation();
  }, []);

  return (
    <div className="mainBody">
      
      <div className="main">
        <Header scrollToContact={scrollToContact} isAboutPage={false} />
        <Navbar scrollToContact={scrollToContact} />
        <div className="mainContent">
          <div className="text">
            <h1>Astonish</h1>
            <h1 className="design">Designs</h1>
            <AnimatePresence>
              <motion.span>{text}</motion.span>
            </AnimatePresence>
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
