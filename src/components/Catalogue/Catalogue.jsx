import "./catalogue.scss";
import Img from "../Img/Img";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { getCollection } from "../../data/collections";

// First entry is the tall feature tile; the rest fill the smaller grid cells.
const previews = ["special-occasions", "ross", "bespoke", "kids", "ready-to-wear"].map(
  getCollection
);

const Catalogue = () => {
  return (
    <section className="catalogBody">
      <div className="catalogTitle">
        <h2>Catalogue</h2>
        <p>
          Explore our curated selection of timeless pieces crafted with
          precision and passion.
        </p>
      </div>

      <ul className="pictures">
        {previews.map(({ slug, title, cover }, i) => (
          <li className="singlePicture" key={slug}>
            <Link to={`/catalogue/${slug}`}>
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
          </li>
        ))}
      </ul>

      <Link to="/catalogue" className="viewCatalog">
        View Catalogue
        <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </section>
  );
};

export default Catalogue;
