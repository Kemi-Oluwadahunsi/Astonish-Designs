import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./catalogue.scss";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Catalogue = () => {
  return (
    <div className="catalogBody">
      <div className="catalogTitle">
        <h2>Catalogue</h2>
        <p>
          Explore our curated selection of timeless pieces crafted with
          precision and passion.
        </p>
      </div>

      <div className="pictures">
        <div className="singlePictures">
          <img src="/images/catalog1.JPG" alt="pictures" width={300} />
        </div>

        <div className="singlePictures">
          <img
            src="/images/catalogFolder/photoshoot.JPG"
            alt="pictures"
            width={290}
          />
        </div>

        <div className="singlePictures">
          <img src="/images/catalog3.JPG" alt="pictures" width={300} />
        </div>

        <div className="singlePictures">
          <img src="/images/catalog4.JPG" alt="pictures" width={300} />
        </div>
      </div>

      <Link to="/catalogue">
        <div className="viewCatalog">
          <button>
            View Catalogue <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Catalogue;
