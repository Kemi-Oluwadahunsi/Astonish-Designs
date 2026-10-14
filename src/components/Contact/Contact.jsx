import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./contact.scss";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { forwardRef, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { socials } from "../../data/socials";

const initialForm = { name: "", email: "", message: "" };

const Contact = forwardRef(function Contact(_props, ref) {
  const formRef = useRef(null);
  const [formData, setFormData] = useState(initialForm);
  const [sendState, setSendState] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSendState("sending");

    emailjs
      .sendForm(
        "service_gm0vt1r",
        "template_89lz7hi",
        formRef.current,
        "x5COycZ9vWD3qHvPY"
      )
      .then(
        () => {
          setSendState("success");
          setFormData(initialForm);
        },
        () => setSendState("error")
      );
  };

  return (
    <section ref={ref} id="contact" className="contactContainer">
      <div className="contactBody">
        <div className="leftContact">
          <div className="connection">
            <h2>Connect With Us</h2>
            <p>Welcome! We&apos;re thrilled to connect with you.</p>
          </div>

          <ul className="contactInfo">
            <li>
              <span className="iconDiv" aria-hidden="true">
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              <div className="address">
                <p className="locationType">Address</p>
                <address>2b Iyere drive, Eriaria, Sapele Road, Benin</address>
              </div>
            </li>
            <li>
              <span className="iconDiv" aria-hidden="true">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <div className="address">
                <p className="locationType">Email</p>
                <a href="mailto:lifestylewithastonish@gmail.com">
                  lifestylewithastonish@gmail.com
                </a>
              </div>
            </li>
            <li>
              <span className="iconDiv" aria-hidden="true">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <div className="address">
                <p className="locationType">Phone</p>
                <a href="tel:+2348134473169">+234 813 447 3169</a>
              </div>
            </li>
          </ul>

          <div className="socials">
            {socials.map(({ href, icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                <FontAwesomeIcon icon={icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="rightForm">
          <p className="rightStart">We would love to hear from you!</p>
          <form ref={formRef} onSubmit={sendEmail}>
            <label htmlFor="contact-name" className="required">
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              required
              placeholder="Swiss Merry"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="contact-email" className="required">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              required
              placeholder="example@dot.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows="6"
              placeholder="Feel free to contact me for your bespoke outfits. Thank you!"
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit" disabled={sendState === "sending"}>
              {sendState === "sending" ? "Sending..." : "Submit"}
            </button>
            <p className={`formStatus formStatus--${sendState}`} role="status">
              {sendState === "success" && "Thank you! Your message has been sent."}
              {sendState === "error" && "Something went wrong. Please try again or email us directly."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
});

export default Contact;
