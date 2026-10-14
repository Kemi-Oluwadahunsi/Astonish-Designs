import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./about.scss";
import Img from "../Img/Img";
import { Link } from "react-router-dom";
import Reveal from "../Reveal/Reveal";

const About = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="aboutContainer" id="about">
      <Reveal className="leftImage">
        <Img
          src="/images/aboutUsImage.jpg"
          alt="Astonish Designs creative director"
          sizes="(min-width: 768px) 45vw, 92vw"
        />
      </Reveal>
      <Reveal className="rightText" delay={0.1}>
        <h2>About Us</h2>
        <p>
          Astonish Designs stands at the forefront of fashion, championing
          inclusivity and timeless elegance with our motto, &quot;A Style for
          Every Age.&quot; Our brand ethos revolves around redefining
          traditional notions of fashion, celebrating individuality, and
          embracing diversity across generations. From chic and trendy
          ensembles tailored for the youthful spirit to refined and
          sophisticated pieces designed for mature elegance, Astonish Designs
          offers a versatile range of clothing and accessories that resonate
          with individuals of all ages.
        </p>
        <Link to="/about" className="readMore" onClick={scrollToTop}>
          Read More <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </Reveal>
    </section>
  );
};

export default About;
