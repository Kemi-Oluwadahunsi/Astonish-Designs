import Header from "../Header/Header";
import "./cataloguemain.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import Contact from "../Contact/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import Navbar from "../Navbar/Navbar";


const CatalogueMain = ({ showContact, toggleContact }) => {

  const [buttonText, setButtonText] = useState("Click to close");
  const [initialLoad, setInitialLoad] = useState(true);

  const updateButtonText = (text) => {
    setButtonText(text);
  };

  // Check if it's the initial load or if the contact button has been toggled
  const shouldShowContact = initialLoad ? false : showContact;

  // Set initialLoad to false after the component has mounted
  useEffect(() => {
    setInitialLoad(false);
  }, []);

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

  const scrollToContact = () => {
    const contactMeSection = document.getElementById("contactMe");
    contactMeSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="catalogueMain">
        <div className="subHeader">
          <Header scrollToContact={scrollToContact} />
          <Navbar scrollToContact={scrollToContact} />
          <div className="catalogueMainTitle">
            <h1>Our Collections</h1>
            <p>
              Explore our curated selection of timeless pieces crafted with
              precision and passion, designed to inspire confidence and
              captivate the senses.
            </p>
          </div>
        </div>

        <div className="collections">
          <div className="readyToWear">
            <h2 className="smallScreenTitle">Ready To Wear</h2>
            <div className="outerDiv">
              <h2>Ready To Wear</h2>
              <div className="innerDiv">
                <img src="/images/catalogFolder/readyToWear2.JPG" alt="rtw" />
              </div>
            </div>

            <div className="sideDiv">
              <Slider {...settings}>
                <div className="stylePictures">
                  <img
                    src="/images/ReadyToWear1.JPG"
                    alt="rtw"
                    width={250}
                    height={315}
                  />
                </div>
                <div className="stylePictures">
                  <img
                    src="/images/readyToWear3.JPG"
                    alt="rtw"
                    width={250}
                    height={315}
                  />
                </div>

                <div className="stylePictures">
                  <img
                    src="/images/readyToWear5.JPG"
                    alt="rtw"
                    width={250}
                    height={315}
                  />
                </div>

                <div className="stylePictures">
                  <img
                    src="/images/readyToWear11.JPG"
                    alt="rtw"
                    width={250}
                    height={315}
                  />
                </div>

                <div className="stylePictures">
                  <img
                    src="/images/white-jumpsuit.JPG"
                    alt="rtw"
                    width={250}
                    height={315}
                  />
                </div>

                <div className="stylePictures">
                  <img
                    src="/images/readyToWear9.JPG"
                    alt="rtw"
                    width={250}
                    height={315}
                  />
                </div>

                <div className="stylePictures">
                  <img
                    src="/images/readyToWear14.JPG"
                    alt="rtw"
                    width={255}
                    height={315}
                  />
                </div>

                <div className="stylePictures">
                  <img
                    src="/images/readyToWear6.JPG"
                    alt="rtw"
                    width={250}
                    height={315}
                  />
                </div>

                <div className="stylePictures">
                  <img
                    src="/images/readyToWearBlue.JPG"
                    alt="rtw"
                    width={250}
                    height={315}
                  />
                </div>
              </Slider>
            </div>
          </div>

          <div className="specialOccassions">
            <h2 className="smallScreenTitle">Special Occassions</h2>
            <div className="outerDiv">
              <h2>Special Occassions</h2>
              <div className="innerDiv">
                <img
                  src="/images/catalogFolder/specialOccassion.JPG"
                  alt="special"
                />
              </div>
            </div>

            <div className="sideDiv">
              <Slider {...settings}>
                <div className="stylePictures">
                  <img
                    src="/images/spacialOccassion2.JPG"
                    alt="speacial"
                    width={250}
                    height={315}
                  />
                </div>

                <div className="stylePictures">
                  <img
                    src="/images/catalog1.JPG"
                    alt="special"
                    width={250}
                    height={315}
                  />
                </div>

                <div className="stylePictures">
                  <img
                    src="/images/specialOccassion7.JPG"
                    alt="special"
                    width={250}
                    height={315}
                  />
                </div>

                <div className="stylePictures">
                  <img
                    src="/images/specialOccassion8.JPG"
                    alt="special"
                    width={250}
                    height={315}
                  />
                </div>

                <div className="stylePictures">
                  <img
                    src="/images/specialOccassion10.png"
                    alt="special"
                    width={250}
                    height={315}
                  />
                </div>

                <div className="stylePictures">
                  <img
                    src="/images/specialOccassion12.JPG"
                    alt="special"
                    width={250}
                    height={315}
                  />
                </div>

                <div className="stylePictures">
                  <img
                    src="/images/spacialOccassion3.JPG"
                    alt="special"
                    width={250}
                    height={315}
                  />
                </div>

                <div className="stylePictures">
                  <img
                    src="/images/special-occassion.jpg"
                    alt="special"
                    width={250}
                    height={315}
                  />
                </div>

                <div className="stylePictures">
                  <img
                    src="/images/specialOccassion5.JPG"
                    alt="special"
                    width={250}
                    height={315}
                  />
                </div>
              </Slider>
            </div>
          </div>

          <div className="photoshoots">
            <h2 className="smallScreenTitle">Bespoke Outfits</h2>
            <div className="outerDiv">
              <h2>Bespoke Outfits</h2>
              <div className="innerDiv">
                <img
                  src="/images/catalogFolder/photoshoot.JPG"
                  alt="photoshoot"
                />
              </div>
            </div>

            <div className="sideDiv">
              <Slider {...settings}>
                <div className="stylePictures">
                  <img
                    src="/images/photoshoot2.JPG"
                    alt="photoshoot"
                    width={250}
                    height={315}
                  />
                </div>
                <div className="stylePictures">
                  <img
                    src="/images/photoshoot3.JPG"
                    alt="photoshoot"
                    width={250}
                    height={315}
                  />
                </div>
                <div className="stylePictures">
                  <img
                    src="/images/photoshoot4.JPG"
                    alt="photoshoot"
                    width={250}
                    height={315}
                  />
                </div>
                <div className="stylePictures">
                  <img
                    src="/images/photoshoot7.jpg"
                    alt="photoshoot"
                    width={250}
                    height={315}
                  />
                </div>

                <div className="stylePictures">
                  <img
                    src="/images/specialOccassion13.JPG"
                    alt="photoshoot"
                    width={250}
                    height={315}
                  />
                </div>

                <div className="stylePictures">
                  <img
                    src="/images/photoshootCat.JPG"
                    alt="photoshoot"
                    width={250}
                    height={315}
                  />
                </div>

                <div className="stylePictures">
                  <img
                    src="/images/photoshoot12.JPG"
                    alt="photoshoot"
                    width={250}
                    height={315}
                  />
                </div>

                <div className="stylePictures">
                  <img
                    src="/images/photoshoot13.JPG"
                    alt="photoshoot"
                    width={250}
                    height={315}
                  />
                </div>

                <div className="stylePictures">
                  <img
                    src="/images/photoshoot11.JPG"
                    alt="photoshoot"
                    width={250}
                    height={315}
                  />
                </div>
              </Slider>
            </div>
          </div>

          <div className="kidsCollections">
            <h2 className="smallScreenTitle">Kid&apos;s Collections</h2>
            <div className="outerDiv">
              <h2>Kid&apos;s Collections</h2>
              <div className="innerDiv">
                <img src="/images/catalogFolder/catalog4.JPG" alt="" />
              </div>
            </div>

            <div className="sideDiv">
              <Slider {...settings}>
                <div className="stylePictures">
                  <img
                    src="/images/kidsCollection4.jpg"
                    alt="kidswear"
                    width={250}
                    height={315}
                  />
                </div>
                <div className="stylePictures">
                  <img
                    src="/images/kidsCollection2.JPG"
                    alt="kidswear"
                    width={250}
                    height={315}
                  />
                </div>
                <div className="stylePictures">
                  <img
                    src="/images/kidsCollection6.jpg"
                    alt="kidswear"
                    width={250}
                    height={315}
                  />
                </div>
                <div className="stylePictures">
                  <img
                    src="/images/kidsCollection.JPG"
                    alt="kidswear"
                    width={250}
                    height={315}
                  />
                </div>

                <div className="stylePictures">
                  <img
                    src="/images/kidsCollection5.jpg"
                    alt="kidswear"
                    width={250}
                    height={315}
                  />
                </div>

                <div className="stylePictures">
                  <img
                    src="/images/kidsCollection8.jpg"
                    alt="kidswear"
                    width={250}
                    height={315}
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>

        <div className="contactMe" id="contactMe">
          <p>Let&apos;s Make Your Dream Outfits Real!</p>
          <button onClick={toggleContact} className="contactButton">
            {shouldShowContact ? "Contact Us Now" : buttonText}
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>

      {!shouldShowContact && (
        <Contact
          showContact={showContact}
          toggleContact={toggleContact}
          updateButtonText={updateButtonText}
        />
      )}
    </>
  );
};
CatalogueMain.propTypes = {
  showContact: PropTypes.bool.isRequired,
  toggleContact: PropTypes.func.isRequired,
};
export default CatalogueMain;
