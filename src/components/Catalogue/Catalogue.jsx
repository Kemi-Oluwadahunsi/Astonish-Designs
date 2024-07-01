import { useEffect, useState } from "react";
import "./catalogue.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useMediaQuery } from "react-responsive";

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
              <img src="/images/ross/ross2.JPG" alt="pictures" />
            </div>

            <div>
              <img src="/images/catalog3.JPG" alt="pictures" />
            </div>

            <div>
              <img src="/images/adelle/adelle2.JPG" alt="pictures" />
            </div>

            <div>
              <img src="/images/catalog4.JPG" alt="pictures" />
            </div>
          </Carousel>
        ) : (
          <>
            <div className="singlePictures">
              <img src="/images/ross/ross1.JPG" alt="pictures" />
            </div>

            <div className="singlePictures">
              <img src="/images/catalog3.JPG" alt="pictures" />
            </div>

            <div className="singlePictures">
              <img src="/images/adelle/adelle2.JPG" alt="pictures" />
            </div>

            <div className="singlePictures">
              <img src="/images/catalog4.JPG" alt="pictures" />
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
