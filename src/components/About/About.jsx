import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./about.scss";
import { Link } from "react-router-dom";

const About = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="aboutContainer">
      <div className="leftImage">
        <img
          src="/images/aboutUsImage.jpg"
          alt="Astonish Designs creative director"
          width={600}
          height={600}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="rightText">
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
      </div>
    </section>
  );
};

export default About;
