import "./catalogue.scss";
import Img from "../Img/Img";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { getCollection } from "../../data/collections";
import Reveal from "../Reveal/Reveal";
import { loadCatalogue, loadCollection } from "../../routes";

// First entry is the tall feature tile; the rest fill the smaller grid cells.
const previews = ["special-occasions", "ross", "bespoke", "kids", "ready-to-wear"].map(
  getCollection
);

const Catalogue = () => {
  return (
    <section className="catalogBody">
      <Reveal className="catalogTitle">
        <h2>Catalogue</h2>
        <p>
          Explore our curated selection of timeless pieces crafted with
          precision and passion.
        </p>
      </Reveal>

      <ul className="pictures">
        {previews.map(({ slug, title, cover }, i) => (
          <Reveal as="li" className="singlePicture" key={slug} delay={i * 0.08}>
            <Link
              to={`/catalogue/${slug}`}
              onMouseEnter={loadCollection}
              onFocus={loadCollection}
            >
              <Img
                src={cover}
                alt=""
                sizes={
                  i === 0
                    ? "(min-width: 768px) 40vw, 100vw"
                    : "(min-width: 1024px) 25vw, 50vw"
                }
              />
              <span>{title}</span>
            </Link>
          </Reveal>
        ))}
      </ul>

      <Link
        to="/catalogue"
        className="viewCatalog"
        onMouseEnter={loadCatalogue}
        onFocus={loadCatalogue}
        onTouchStart={loadCatalogue}
      >
        View Catalogue
        <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </section>
  );
};

export default Catalogue;
