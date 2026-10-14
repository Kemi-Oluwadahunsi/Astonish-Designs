import "./home.scss";
import About from "../About/About";
import Services from "../Services/Services";
import Catalogue from "../Catalogue/Catalogue";
import Testimonial from "../Testimonials/Testimonial";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import { useState, useRef, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const sentence = "A Style For Every Age";

const Home = () => {
  const [text, setText] = useState("");
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    let interval;
    let timeout;

    const typingAnimation = () => {
      let index = 0;
      interval = setInterval(() => {
        setText(sentence.slice(0, index));
        index++;
        if (index > sentence.length) {
          clearInterval(interval);
          timeout = setTimeout(typingAnimation, 5000);
        }
      }, 100);
    };

    typingAnimation();
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <main className="mainBody">
      <section className="main">
        <Header scrollToContact={scrollToContact} />
        <Navbar scrollToContact={scrollToContact} />
        <div className="mainContent">
          <div className="heroCopy">
            <h1 className="text">
              <span className="brand">Astonish</span>
              <span className="brand design">Designs</span>
            </h1>
            <p className="tagline" aria-label={sentence}>
              <span aria-hidden="true">{text}</span>
              <span className="caret" aria-hidden="true" />
            </p>
          </div>
        </div>
        <a href="#about" className="scrollCue" aria-label="Scroll to About section">
          <span aria-hidden="true">Scroll</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </a>
      </section>

      <About />
      <Services />
      <Catalogue />
      <Testimonial />
      <Contact ref={contactRef} />
    </main>
  );
};

export default Home;
