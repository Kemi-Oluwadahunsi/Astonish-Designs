import { useEffect, useState } from "react";
import Wears from "../Wears";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import "./cataloguemain.scss";

const Modal = ({ showModal, setShowModal, imageSrc }) => {
  console.log("Image Source:", imageSrc);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Add event listener when the component mounts
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the modal content
      if (!event.target.classList.contains("modal")) {
        setShowModal(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal, setShowModal]);

  return (
    <div
      className="modal"
      style={{
        display: showModal ? "block" : "none",
      }}
    >
      <div className="modal-content">
        <FontAwesomeIcon
          icon={faTimes}
          className="times"
          onClick={handleCloseModal}
        />
        <img
          src={imageSrc} // Render the selected image
          alt="Full size image"
        />
      </div>
    </div>
  );
};

const Collections = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageSection, setSelectedImageSection] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleMouseEnter = (imageId, sectionId) => {
    setSelectedImage(imageId);
    setSelectedImageSection(sectionId);
  };

  const handleImageClick = (imageId, sectionId) => {
    if (selectedImage === imageId && selectedImageSection === sectionId) {
      // If the clicked image is the same as the currently selected one, toggle modal visibility
      setShowModal((prev) => !prev);
    } else {
      // If a different image is clicked, set selectedImage and selectedImageSection
      setSelectedImage(imageId);
      setSelectedImageSection(sectionId);

      // Ensure modal is opened
      setShowModal(true);
    }
  };

  return (
    <>
      <div className="collections">
        {Wears.map((wearCategory) => (
          <div className="allWears" key={wearCategory.id}>
            <h2 className="smallScreenTitle">{wearCategory.title}</h2>

            <div className="outerDiv">
              <h2 className="collectionName">{wearCategory.collectionName}</h2>
              <h2>{wearCategory.title}</h2>
              <div className="innerDiv">
                <img
                  src={wearCategory.innerDivImage}
                  alt={wearCategory.title}
                  style={{ objectFit: "contain" }}
                />
              </div>

              <div className="colorCategoryWrapper">
                <p>Pallete</p>
                {wearCategory.colors?.map((color) => (
                  <div key={color.id} className="colorsWrapper">
                    <div
                      className="colorsByCategory"
                      style={{ backgroundColor: color.color }}
                    ></div>
                  </div>
                ))}{" "}
              </div>
            </div>

            <div className="sideDiv">
              <div className="stylePictures">
                {wearCategory.images.map((image) => (
                  <div
                    key={image.id}
                    style={{ position: "relative" }}
                    className="smallScreenImage"
                  >
                    <h2 className="collectionNameSmall">
                      {wearCategory.collectionName}
                    </h2>
                    <span
                      className="clickToViewText"
                      style={{
                        backgroundColor: "black",
                        borderRadius: "20px",
                        padding: "0.4rem 0.8rem",
                        position: "absolute",
                        bottom: "12px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        color: "white",
                        cursor: "pointer",
                        zIndex: "100",
                        opacity:
                          selectedImageSection === wearCategory.id &&
                          selectedImage === image.id
                            ? 1
                            : 0,
                      }}
                    >
                      Click to view
                    </span>
                    <span className="smallScreenView">Click to view</span>

                    <img
                      src={image.img}
                      width={250}
                      height={315}
                      onMouseEnter={() =>
                        handleMouseEnter(image.id, wearCategory.id)
                      }
                      onClick={() =>
                        handleImageClick(image.id, wearCategory.id)
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        imageSrc={
          selectedImage
            ? Wears[selectedImageSection - 1].images[selectedImage - 1].img
            : null
        }
      />
    </>
  );
};

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default Collections;
