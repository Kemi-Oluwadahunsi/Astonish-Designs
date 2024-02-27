// import { Link } from "react-router-dom";
import "./aboutmajor.scss";
import Header from "../Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Contact from "../Contact/Contact";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Navbar from "../Navbar/Navbar";

const AboutMajor = ({ showContact, toggleContact }) => {
  const [buttonText, setButtonText] = useState("Click to close");
  const [initialLoad, setInitialLoad] = useState(true);

  const updateButtonText = (text) => {
    setButtonText(text);
  };

  // Check if it's the initial load or if the contact button has been toggled
  const shouldShowContact = initialLoad ? false : showContact;

  // Set initialLoad to false after the component has mounted
  useEffect(() => {
    setInitialLoad(false);
  }, []);

  const scrollToContact = () => {
    const contactMeSection = document.getElementById("contactMe");
    contactMeSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div>
        <div className="aboutMajorBody">
          <Header scrollToContact={scrollToContact} />
          <Navbar scrollToContact={scrollToContact} />
          <div className="aboutText2">
            <h1>About Us</h1>

            <div className="aboutMajorText">
              <div className="welcome">
                <h2>Welcome</h2>
                <p>Welcome to the World of Designs!</p>
                <p>
                  At Astonish Designs, we are thrilled to have you here. This
                  page offers a glimpse into the heart and soul of our brand,
                  where creativity meets craftsmanship and timeless elegance
                  intertwines with modern flair. Discover the ethos behind our
                  &apos;A Style for Every Age&apos; motto and learn about our
                  commitment to inclusivity, sustainability, and exceptional
                  quality.
                </p>
                <p>
                  Thank you for visiting Astonish Designs. We hope you enjoy
                  your time here and leave feeling inspired by our dedication to
                  redefining fashion across generations.
                </p>
              </div>
              <div className="astonishAbout">
                <h2>About Astonish Designs (Our Story)</h2>
                <p>
                  Astonish Designs, born amidst the lockdown of 2020, where
                  creativity blossomed despite adversity. Our brand is a
                  testament to resilience, blending innovation with timeless
                  elegance. With the motto &quot;A style for every age&quot;,
                  Astonish Designs celebrates individuality, offering chic and
                  versatile pieces that transcend generations. From classic
                  essentials to avant-garde statements, we craft fashion that
                  speaks to the soul. Join us on a journey where style knows no
                  bounds.
                </p>
              </div>
              <div className="philosophy">
                <h2>Our Philosophy</h2>
                <p>
                  At Astonish Designs, we believe in the power of fashion to
                  inspire, empower, and unite. Our philosophy is rooted in
                  inclusivity, embracing diversity in age, background, and
                  style. We strive to create garments that not only elevate the
                  wearer&apos;s confidence but also reflect their unique
                  personality and journey. With a commitment to quality
                  craftsmanship and sustainable practices, we aim to leave a
                  positive impact on both our customers and the planet. Astonish
                  Designs is not just a fashion brand; it&apos;s a movement
                  towards self-expression, authenticity, and beauty in all its
                  forms.
                </p>
              </div>
              <div className="exceptionalServices">
                <h2>Our Values</h2>
                <p>
                  We prioritize a culture of innovation by encouraging our team
                  to explore new materials, techniques, and design concepts. We
                  stay connected with industry trends and customer preferences,
                  ensuring our creations align with evolving tastes. However, we
                  always anchor our innovations in the core values and aesthetic
                  that define Astonish Designs which is embracing diversity in
                  age.
                </p>
              </div>
              <div className="exceptionalServices">
                <h2>Our Achievement</h2>
                <p>
                  They say &quot;great things start small&quot;. Small
                  businesses like ours contribute to economic development by
                  creating jobs and supporting local suppliers. Additionally, we
                  foster community cohesion by providing personalized services,
                  creating a sense of identity, and often engaging in community
                  events and collaborations.
                </p>
              </div>

              <div className="exceptionalServices">
                <h2>About The Designer</h2>
                <p>
                  Esosa Igbinedion is a passionate fashion maven who embarked on
                  her sewing journey in 2009, turning her unprofessional passion
                  into a professional pursuit in 2019. With a knack for
                  versatility in sewing, designing, beading, pattern drafting,
                  and draping, she has seamlessly woven her creative tapestry.
                  As the proud owner of a thriving small business, Esosa not
                  only stitches fabrics but also stitches communities together.
                  Through her dedication, she has generated job opportunities,
                  stitching the fabric of local livelihoods. Beyond her atelier,
                  she has empowered her community by organizing short sewing
                  classes, threading the needle towards communal growth. Esosa
                  Igbinedion is not just a designer; she&apos;s a community
                  weaver, crafting a legacy one stitch at a time.
                </p>
              </div>
            </div>
          </div>

          <div className="lastPart">
            <div className="ceo">
              <img src="/images/CEOsmall.png" alt="ceo" width={150} />
              <div className="position">
                <h4>Esosa I.</h4>
                <span>Creative Director, Astonish Designs.</span>
              </div>
            </div>

            <div className="contactMe" id="contactMe">
              <p>Let&apos;s Make Your Dream Outfits Real!</p>
              <button onClick={toggleContact} className="contactButton">
                {shouldShowContact ? "Contact Us Now" : buttonText}
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
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

AboutMajor.propTypes = {
  showContact: PropTypes.bool.isRequired,
  toggleContact: PropTypes.func.isRequired,
};

export default AboutMajor;
