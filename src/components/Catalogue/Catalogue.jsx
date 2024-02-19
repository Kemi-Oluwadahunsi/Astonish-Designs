import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./catalogue.scss";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

const Catalogue = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const [showSlider, setShowSlider] = useState(isTabletOrMobile);
 useEffect(() => {
   setShowSlider(isTabletOrMobile);
 }, [isTabletOrMobile]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true, 
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <button className="slick-prev">Previous</button>,
    nextArrow: <button className="slick-next">Next</button>,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="catalogBody">
      <div className="catalogTitle">
        <h2>Catalogue</h2>
        <p>
          Explore our curated selection of timeless pieces crafted with
          precision and passion.
        </p>
      </div>

      {showSlider ? (
        <div className="pictures">
          <Slider {...settings}>
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
          </Slider>
        </div>
      ) : (
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
      )}

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
