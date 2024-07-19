import { useEffect, useState } from "react";
import "./catalogue.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useMediaQuery } from "react-responsive";
import ross2 from "../../../public/images/ross/ross2.webp";
import ross1 from "../../../public/images/ross/ross1.webp";
import catalog3 from "../../../public/images/catalog3.jpg";
import adelle2 from "../../../public/images/adelle/adelle2.webp";
import catalog4 from "../../../public/images/catalog4.jpg";

const Catalogue = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 900px)" });
  const [showSlider, setShowSlider] = useState(isTabletOrMobile);

  useEffect(() => {
    setShowSlider(isTabletOrMobile);
  }, [isTabletOrMobile]);

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
        {showSlider ? (
          <Carousel
            showArrows={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            showStatus={false}
            showThumbs={false}
            stopOnHover={true}
            emulateTouch={true}
            swipeable={true}
          >
            <div>
              <img src={ross2} alt="pictures" />
            </div>

            <div>
              <img src={catalog3} alt="pictures" />
            </div>

            <div>
              <img src={adelle2} alt="pictures" />
            </div>

            <div>
              <img src={catalog4} alt="pictures" />
            </div>
          </Carousel>
        ) : (
          <>
            <div className="singlePictures">
              <img src={ross1} alt="pictures" />
            </div>

            <div className="singlePictures">
              <img src={catalog3} alt="pictures" />
            </div>

            <div className="singlePictures">
              <img src={adelle2} alt="pictures" />
            </div>

            <div className="singlePictures">
              <img src={catalog4} alt="pictures" />
            </div>
          </>
        )}
      </div>

      <Link to="/catalogue">
        <div className="viewCatalog">
          <button onClick={scrollToTop}>
            View Catalogue
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Catalogue;
