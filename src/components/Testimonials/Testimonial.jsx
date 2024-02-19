import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./testimonies.scss";
import {
  faQuoteLeft,
  faQuoteRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

const Testimonial = () => {
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
    <div>
      <div className="testimonialContainer">
        <h1 className="testimonialTitle">What Our Clients Say</h1>
        {showSlider ? (
          <div className="testimonies">
            <Slider {...settings}>
              <div className="eachTestimony testimony1">
                <img
                  src="/images/firstTestimony.png"
                  alt=""
                  width={100}
                  className="testImage"
                />

                <div className="testimony">
                  <FontAwesomeIcon icon={faQuoteLeft} className="leftQuote" />
                  <p className="testimonialParagraph">
                    Astonish Designs exceeded all my expectations! From the
                    impeccable fit to the exquisite detailing, every garment.
                    Their commitment to quality craftsmanship is truly
                    remarkable.
                  </p>
                  <FontAwesomeIcon icon={faQuoteRight} className="rightQuote" />
                </div>

                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>

                <h3>Hannah B.</h3>
              </div>

              <div className="eachTestimony testimony2">
                <img
                  src="/images/secondTestimony.png"
                  alt=""
                  width={100}
                  className="testImage"
                />

                <div className="testimony">
                  <FontAwesomeIcon icon={faQuoteLeft} className="leftQuote" />
                  <p className="testimonialParagraph">
                    I&apos;ve never felt more confident in my attire since
                    discovering Astonish Designs. The personalized service and
                    attention to detail make every shopping experience a
                    delight.
                  </p>
                  <FontAwesomeIcon icon={faQuoteRight} className="rightQuote" />
                </div>

                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>

                <h3>Precious O.</h3>
              </div>

              <div className="eachTestimony testimony3">
                <img
                  src="/images/third.jpeg"
                  alt=""
                  width={100}
                  className="testImage"
                />

                <div className="testimony">
                  <FontAwesomeIcon icon={faQuoteLeft} className="leftQuote" />
                  <p className="testimonialParagraph">
                    Astonish Designs has transformed my outlook on fashion.
                    Their diverse range of styles caters to every occasion, and
                    the quality of their garments is unmatched.
                  </p>
                  <FontAwesomeIcon icon={faQuoteRight} className="rightQuote" />
                </div>

                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>

                <h3>Oniovosa S.</h3>
              </div>

              <div className="eachTestimony testimony4">
                <img
                  src="/images/fourthTest.jpeg"
                  alt=""
                  width={100}
                  className="testImage"
                />

                <div className="testimony">
                  <FontAwesomeIcon icon={faQuoteLeft} className="leftQuote" />
                  <p className="testimonialParagraph">
                    I&apos;ve been a loyal customer of Astonish Designs for
                    years, and I can confidently say that their commitment to
                    excellence never wavers, their collections always leave me
                    feeling great.
                  </p>
                  <FontAwesomeIcon icon={faQuoteRight} className="rightQuote" />
                </div>

                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>

                <h3>Ebenehita O.</h3>
              </div>
            </Slider>
          </div>
        ) : (
          <div className="testimonies">
            <div className="eachTestimony testimony1">
              <img
                src="/images/firstTestimony.png"
                alt=""
                width={100}
                className="testImage"
              />

              <div className="testimony">
                <FontAwesomeIcon icon={faQuoteLeft} className="leftQuote" />
                <p className="testimonialParagraph">
                  Astonish Designs exceeded all my expectations! From the
                  impeccable fit to the exquisite detailing, every garment.
                  Their commitment to quality craftsmanship is truly remarkable.
                </p>
                <FontAwesomeIcon icon={faQuoteRight} className="rightQuote" />
              </div>

              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>

              <h3>Hannah B.</h3>
            </div>

            <div className="eachTestimony testimony2">
              <img
                src="/images/secondTestimony.png"
                alt=""
                width={100}
                className="testImage"
              />

              <div className="testimony">
                <FontAwesomeIcon icon={faQuoteLeft} className="leftQuote" />
                <p className="testimonialParagraph">
                  I&apos;ve never felt more confident in my attire since
                  discovering Astonish Designs. The personalized service and
                  attention to detail make every shopping experience a delight.
                  {/* I
                highly recommend their collections to anyone seeking elegance
                and sophistication. */}
                </p>
                <FontAwesomeIcon icon={faQuoteRight} className="rightQuote" />
              </div>

              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>

              <h3>Precious O.</h3>
            </div>

            <div className="eachTestimony testimony3">
              <img
                src="/images/third.jpeg"
                alt=""
                width={100}
                className="testImage"
              />

              <div className="testimony">
                <FontAwesomeIcon icon={faQuoteLeft} className="leftQuote" />
                <p className="testimonialParagraph">
                  Astonish Designs has transformed my outlook on fashion. Their
                  diverse range of styles caters to every occasion, and the
                  quality of their garments is unmatched.
                  {/* I&aposm constantly
                receiving compliments whenever I wear their pieces! */}
                </p>
                <FontAwesomeIcon icon={faQuoteRight} className="rightQuote" />
              </div>

              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>

              <h3>Oniovosa S.</h3>
            </div>

            <div className="eachTestimony testimony4">
              <img
                src="/images/fourthTest.jpeg"
                alt=""
                width={100}
                className="testImage"
              />

              <div className="testimony">
                <FontAwesomeIcon icon={faQuoteLeft} className="leftQuote" />
                <p className="testimonialParagraph">
                  I&apos;ve been a loyal customer of Astonish Designs for years,
                  and I can confidently say that their commitment to excellence
                  never wavers, their collections always leave me feeling
                  stylish and empowered.
                </p>
                <FontAwesomeIcon icon={faQuoteRight} className="rightQuote" />
              </div>

              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>

              <h3>Ebenehita O.</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonial;
