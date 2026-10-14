import "./catalogue.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const previews = [
  { src: "/images/ross/ross1.webp", alt: "Ross collection look" },
  { src: "/images/catalog3.JPG", alt: "Astonish Designs catalogue look" },
  { src: "/images/adelle/adelle2.webp", alt: "Adelle collection look" },
  { src: "/images/catalog4.JPG", alt: "Astonish Designs catalogue look" },
];

const Catalogue = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="catalogBody">
      <div className="catalogTitle">
        <h2>Catalogue</h2>
        <p>
          Explore our curated selection of timeless pieces crafted with
          precision and passion.
        </p>
      </div>

      <div className="pictures">
        {previews.map(({ src, alt }) => (
          <figure className="singlePicture" key={src}>
            <img
              src={src}
              alt={alt}
              width={400}
              height={500}
              loading="lazy"
              decoding="async"
            />
          </figure>
        ))}
      </div>

      <Link to="/catalogue" className="viewCatalog" onClick={scrollToTop}>
        View Catalogue
        <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </section>
  );
};

export default Catalogue;
