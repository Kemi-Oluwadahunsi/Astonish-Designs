import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./contact.scss";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faInstagram, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = React.forwardRef(({ updateButtonText }, ref) => {
  const [close, setClose] = useState(false);

  const handleCloseContact = () => {
    const currentPage = window.location.pathname;
    console.log(currentPage);
    if (currentPage === "/about") {
      setClose(true);
    }

    if (currentPage === "/catalogue") {
      setClose(true);
    }
  };

  const handleSubmit = () => {
    handleCloseContact();
    updateButtonText("Contact Us Now"); 

    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormSubmit = () => {
    alert("Message submitted successfully");
  };

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gm0vt1r",
        "template_89lz7hi",
        formRef.current,
        "x5COycZ9vWD3qHvPY"
      )
      .then(
        (result) => {
          setSuccess(true);
          setError(false);
          console.log(result);

          // Reset the form fields
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          handleFormSubmit();
        },
        (error) => {
          setError(true);
          setSuccess(false);
          console.log("Error sending email:", error);
        }
      );
  };


  return (
    <div ref={ref} id="contact">
      {!close && (
        <div className="contactContainer">
          <div className="contactBody">
            <div className="leftContact">
              <div className="connection">
                <h2>Connect With Us</h2>
                <p>Welcome! We&apos;re thrilled to connect with you.</p>
              </div>
              <div className="location">
                <div className="iconDiv">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div className="address">
                  <p className="locationType">Address:</p>
                  <address>2b Iyere drive, Eriaria, Sapele Road, Benin</address>
                </div>
              </div>

              <div className="mail">
                <div className="iconDiv">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div className="address">
                  <p className="locationType">Email:</p>
                  <a href="mailto:lifestylewithastonish@gmail.com">
                    lifestylewithastonish@gmail.com
                  </a>
                </div>
              </div>

              <div className="phone">
                <div className="iconDiv">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div className="address">
                  <p className="locationType">Phone:</p>
                  <p>+2348134473169</p>
                </div>
              </div>

              <div className="socials">
                <a
                  href="https://www.instagram.com/astonishdesigns"
                  target="_blank"
                  rel="noreferrer"
                  className="instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://www.facebook.com/officialastonishdesigns"
                  target="_blank"
                  rel="noreferrer"
                  className="facebook"
                >
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </a>

                <a
                  href="https://www.facebook.com/officialastonishdesigns"
                  target="_blank"
                  rel="noreferrer"
                  className="xTwitter"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>

                <a
                  href="https://www.facebook.com/officialastonishdesigns"
                  target="_blank"
                  rel="noreferrer"
                  className="linkedin"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>

            <div className="rightForm">
              <p className="rightStart">
                We would love to hear from you!
              </p>
              <form ref={formRef} onSubmit={sendEmail}>
                <label htmlFor="Name" className="required">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Swiss Merry"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor="Email" className="required">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="example@dot.com"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                />

                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  rows="10"
                  placeholder="Feel free to contact Me for your bespoke outfits. Thank you!"
                  autoComplete="message"
                  value={formData.message}
                  onChange={handleChange}
                />

                <button type="submit" value="send" onClick={handleSubmit}>
                  Submit
                </button>
                {error && "Error"}
                {success && ""}
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});
Contact.displayName = "Contact";
Contact.propTypes = {
  updateButtonText: PropTypes.func.isRequired,
};

export default Contact;
