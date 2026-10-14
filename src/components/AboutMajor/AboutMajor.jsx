import "./aboutmajor.scss";
import Img from "../Img/Img";
import Header from "../Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faGem,
  faLightbulb,
  faTimes,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import Contact from "../Contact/Contact";
import { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar/Navbar";
import PropTypes from "prop-types";

// Without an icon the copy spans the full row; icon sides alternate via CSS.
const StoryRow = ({ icon, children }) => (
  <article className={icon ? "storyRow" : "storyRow storyRow--full"}>
    {icon && (
      <div className="storyIcon" aria-hidden="true">
        <FontAwesomeIcon icon={icon} />
      </div>
    )}
    <div className="storyText">{children}</div>
  </article>
);

StoryRow.propTypes = {
  icon: PropTypes.object,
  children: PropTypes.node.isRequired,
};

const AboutMajor = () => {
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
    <main className="aboutMajorBody">
      <Header scrollToContact={scrollToContact} isAboutPage />
      <Navbar scrollToContact={scrollToContact} isAboutPage />

      <div className="aboutText2">
        <section className="welcomeFirst">
          <Img
            src="/images/logoOriginal.jpg"
            alt="Astonish Designs logo"
            sizes="(min-width: 768px) 400px, 80vw"
            className="logoAbout"
            priority
          />
          <div className="welcomeText">
            <h1>Welcome</h1>
            <p className="welcomeLead">Welcome to the World of Designs!</p>
            <p>
              At Astonish Designs, we are thrilled to have you here. This page
              offers a glimpse into the heart and soul of our brand, where
              creativity meets craftsmanship and timeless elegance intertwines
              with modern flair. Discover the ethos behind our &apos;A Style
              for Every Age&apos; motto and learn about our commitment to
              inclusivity, sustainability, and exceptional quality.
            </p>
            <p>
              Thank you for visiting Our Page. We hope you enjoy your time here
              and leave feeling inspired by our dedication to redefining
              fashion across generations.
            </p>
          </div>
        </section>

        <section className="overallAstonish">
          <StoryRow>
            <h2>About Astonish Designs (Our Story)</h2>
            <p>
              Astonish Designs, born amidst the lockdown of 2020, where
              creativity blossomed despite adversity. Our brand is a testament
              to resilience, blending innovation with timeless elegance. With
              the motto &quot;A style for every age&quot;, Astonish Designs
              celebrates individuality, offering chic and versatile pieces that
              transcend generations. From classic essentials to avant-garde
              statements, we craft fashion that speaks to the soul. Join us on a
              journey where style knows no bounds, and elegance meets modernity
              in every stitch and detail, igniting passion and confidence in
              every wearer.
            </p>
          </StoryRow>

          <StoryRow icon={faLightbulb}>
            <h2>Our Philosophy</h2>
            <p>
              At Astonish Designs, we believe in the power of fashion to
              inspire, empower, and unite. Our philosophy is rooted in
              inclusivity, embracing diversity in age, background, and style. We
              strive to create garments that not only elevate the wearer&apos;s
              confidence but also reflect their unique personality and journey.
              With a commitment to quality craftsmanship and sustainable
              practices, we aim to leave a positive impact on both our customers
              and the planet. Astonish Designs is not just a fashion brand;
              it&apos;s a movement towards self-expression, authenticity, and
              beauty in all its forms.
            </p>
          </StoryRow>

          <StoryRow icon={faGem}>
            <h2>Our Values</h2>
            <p>
              We prioritize a culture of innovation by encouraging our team to
              explore new materials, techniques, and design concepts. We stay
              connected with industry trends and customer preferences, ensuring
              our creations align with evolving tastes. However, we always
              anchor our innovations in the core values and aesthetic that
              define Astonish Designs which is embracing diversity in age.
            </p>
          </StoryRow>

          <StoryRow icon={faTrophy}>
            <h2>Our Achievement</h2>
            <p>
              They say &quot;great things start small&quot;. Small businesses
              like ours contribute to economic development by creating jobs and
              supporting local suppliers. Additionally, we foster community
              cohesion by providing personalized services, creating a sense of
              identity, and often engaging in community events and
              collaborations.
            </p>
          </StoryRow>
        </section>

        <section className="theDesigner">
          <div className="designerHead">
            <h2 className="designerHeader">About The Designer</h2>
            <p>
              Esosa Igbinedion is a passionate fashion maven who embarked on her
              sewing journey in 2009, turning her unprofessional passion into a
              professional pursuit in 2019. With a knack for versatility in
              sewing, designing, beading, pattern drafting, and draping, she has
              seamlessly woven her creative tapestry. As the proud owner of a
              thriving small business, Esosa not only stitches fabrics but also
              stitches communities together. Through her dedication, she has
              generated job opportunities, stitching the fabric of local
              livelihoods. Beyond her atelier, she has empowered her community
              by organizing short sewing classes, threading the needle towards
              communal growth. Esosa Igbinedion is not just a designer;
              she&apos;s a community weaver, crafting a legacy one stitch at a
              time.
            </p>
          </div>

          <div className="lastPart">
            <div className="ceo">
              <Img
                src="/images/CEOsmall.png"
                alt="Esosa Igbinedion"
                sizes="120px"
              />
              <div className="position">
                <h3>Esosa I.</h3>
                <span>Creative Director, Astonish Designs.</span>
              </div>
            </div>

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
          </div>
        </section>
      </div>

      {showContact && <Contact ref={contactRef} />}
    </main>
  );
};

export default AboutMajor;
