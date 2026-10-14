import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./testimonies.scss";
import Img from "../Img/Img";
import {
  faQuoteLeft,
  faQuoteRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const testimonies = [
  {
    image: "/images/firstTestimony.png",
    name: "Hannah B.",
    quote:
      "Astonish Designs exceeded all my expectations! From the impeccable fit to the exquisite detailing, every garment. Their commitment to quality craftsmanship is truly remarkable.",
  },
  {
    image: "/images/secondTestimony.png",
    name: "Precious O.",
    quote:
      "I've never felt more confident in my attire since discovering Astonish Designs. The personalized service and attention to detail make every shopping experience a delight.",
  },
  {
    image: "/images/third.jpeg",
    name: "Oniovosa S.",
    quote:
      "Astonish Designs has transformed my outlook on fashion. Their diverse range of styles caters to every occasion, and the quality of their garments is unmatched.",
  },
  {
    image: "/images/fourthTest.jpeg",
    name: "Ebenehita O.",
    quote:
      "I've been a loyal customer of Astonish Designs for years, and I can confidently say that their commitment to excellence never wavers, their collections always leave me feeling great.",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonialContainer">
      <h2 className="testimonialTitle">What Our Clients Say</h2>
      <ul className="testimonies" aria-label="Client testimonials">
        {testimonies.map(({ image, name, quote }) => (
          <li className="eachTestimony" key={name}>
            <Img
              src={image}
              alt=""
              sizes="88px"
              width={88}
              height={88}
              className="testImage"
            />
            <blockquote className="testimony">
              <FontAwesomeIcon icon={faQuoteLeft} className="quote" />
              <p className="testimonialParagraph">{quote}</p>
              <FontAwesomeIcon icon={faQuoteRight} className="quote quote--end" />
            </blockquote>
            <div className="stars" role="img" aria-label="Rated 5 out of 5">
              {Array.from({ length: 5 }, (_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} />
              ))}
            </div>
            <h3>{name}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Testimonial;
