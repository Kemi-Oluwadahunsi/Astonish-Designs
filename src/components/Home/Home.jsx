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
import Seo from "../Seo/Seo";
import { socials } from "../../data/socials";
import { WHATSAPP_NUMBER } from "../../data/whatsapp";
import { SITE_NAME, SITE_URL } from "../../data/site";

const sentence = "A Style For Every Age";

const storeSchema = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: SITE_NAME,
  slogan: sentence,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/images/logooriginal-640.webp`,
  image: `${SITE_URL}/og/default.jpg`,
  telephone: `+${WHATSAPP_NUMBER}`,
  founder: { "@type": "Person", name: "Esosa Igbinedion" },
  foundingDate: "2020",
  sameAs: socials.map((s) => s.href),
};

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
      <Seo
        description="Astonish Designs is a Nigerian fashion house making bespoke, ready-to-wear and special occasion outfits. A style for every age."
        path="/"
      >
        <script type="application/ld+json">{JSON.stringify(storeSchema)}</script>
      </Seo>
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
              <span className="taglineGhost" aria-hidden="true">
                {sentence}
              </span>
              <span aria-hidden="true">
                {text}
                <span className="caret" />
              </span>
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
