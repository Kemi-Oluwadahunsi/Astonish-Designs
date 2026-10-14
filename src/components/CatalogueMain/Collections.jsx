import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import collections from "../../data/collections";
import Img from "../Img/Img";
import "./cataloguemain.scss";

const Collections = () => (
  <div className="collections">
    {collections.map((collection) => {
      const href = `/catalogue/${collection.slug}`;
      return (
        <section
          className="collection band"
          key={collection.slug}
          aria-labelledby={`${collection.slug}-title`}
        >
          <Link to={href} className="bandMedia" tabIndex={-1} aria-hidden="true">
            <Img
              src={collection.cover}
              alt=""
              sizes="(min-width: 768px) 45vw, 100vw"
            />
          </Link>

          <div className="bandText">
            {collection.tag && <span className="tag">{collection.tag}</span>}
            <h2 id={`${collection.slug}-title`}>{collection.title}</h2>
            <p>{collection.description}</p>

            {collection.palette && (
              <div className="palette">
                <span>Palette</span>
                <ul>
                  {collection.palette.map((color) => (
                    <li key={color} style={{ backgroundColor: color }} title={color} />
                  ))}
                </ul>
              </div>
            )}

            <Link to={href} className="bandLink">
              View collection
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </section>
      );
    })}
  </div>
);

export default Collections;
