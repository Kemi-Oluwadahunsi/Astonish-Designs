import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faExpand, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import collections, { allLooks, getCollection } from "../../data/collections";
import { enquiryMessage, whatsappUrl } from "../../data/whatsapp";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Img from "../Img/Img";
import Lightbox from "../Lightbox/Lightbox";
import Contact from "../Contact/Contact";
import NotFound from "../NotFound/NotFound";
import "../CatalogueMain/cataloguemain.scss";
import "./collectionpage.scss";

const WhatsAppLink = ({ message, className, children }) => (
  <a
    href={whatsappUrl(message)}
    className={className}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={faWhatsapp} />
    {children}
  </a>
);

WhatsAppLink.propTypes = {
  message: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

const CollectionView = ({ collection }) => {
  const { slug, title, tag, description, cover, palette } = collection;
  const looks = allLooks(collection);
  const others = collections.filter((c) => c.slug !== slug);

  const [selected, setSelected] = useState(null);
  const [showContact, setShowContact] = useState(false);
  const contactRef = useRef(null);
  const closeModal = useCallback(() => setSelected(null), []);

  const scrollToContact = () => {
    document.getElementById("enquire")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (showContact) {
      contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [showContact]);

  const lookName = (i) => `Look ${i + 1}`;

  return (
    <main className="collectionPage">
      <Helmet>
        <title>{`${title} | Astonish Designs`}</title>
        <meta name="description" content={description} />
      </Helmet>

      <section className="collectionHero">
        <Header scrollToContact={scrollToContact} />
        <Navbar scrollToContact={scrollToContact} />

        <div className="heroGrid">
          <div className="heroText">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/catalogue">Catalogue</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{title}</span>
            </nav>

            {tag && <span className="tag">{tag}</span>}
            <h1>{title}</h1>
            <p>{description}</p>

            {palette && (
              <div className="palette">
                <span>Palette</span>
                <ul>
                  {palette.map((color) => (
                    <li key={color} style={{ backgroundColor: color }} title={color} />
                  ))}
                </ul>
              </div>
            )}

            <div className="heroActions">
              <WhatsAppLink message={enquiryMessage(title)} className="whatsappButton">
                Enquire on WhatsApp
              </WhatsAppLink>
              <a href="#looks" className="ghostButton">
                See all {looks.length} looks
              </a>
            </div>
          </div>

          <div className="heroMedia">
            <Img
              src={cover}
              alt={`${title} collection, featured look`}
              sizes="(min-width: 768px) 45vw, 100vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="looks" id="looks" aria-labelledby="looks-title">
        <h2 id="looks-title">The looks</h2>
        <p className="looksLead">
          <FontAwesomeIcon icon={faExpand} aria-hidden="true" />
          Tap or click any look to see it full size.
        </p>
        <ul className="lookGrid">
          {looks.map((src, i) => {
            const alt = `${title} ${lookName(i).toLowerCase()}`;
            return (
              <li key={src}>
                <figure>
                  <button
                    type="button"
                    className="galleryItem"
                    onClick={() => setSelected(i)}
                    aria-label={`View ${alt} full size`}
                  >
                    <Img
                      src={src}
                      alt={alt}
                      sizes="(min-width: 1024px) 30vw, (min-width: 480px) 45vw, 100vw"
                    />
                    <span className="viewHint" aria-hidden="true">
                      <FontAwesomeIcon icon={faExpand} />
                      <span className="viewHintLabel">View full size</span>
                    </span>
                  </button>
                  <figcaption>
                    <span>{lookName(i)}</span>
                    <WhatsAppLink
                      message={enquiryMessage(title, lookName(i))}
                      className="lookEnquire"
                    >
                      Enquire
                    </WhatsAppLink>
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="enquire" id="enquire">
        <p>Love something from {title}?</p>
        <div className="enquireActions">
          <WhatsAppLink message={enquiryMessage(title)} className="whatsappButton">
            Enquire on WhatsApp
          </WhatsAppLink>
          <button
            type="button"
            onClick={() => setShowContact((open) => !open)}
            className="contactButton"
            aria-expanded={showContact}
            aria-controls="contact"
          >
            {showContact ? "Close form" : "Use the contact form"}
            <FontAwesomeIcon icon={showContact ? faTimes : faArrowRight} />
          </button>
        </div>
      </section>

      {showContact && <Contact ref={contactRef} />}

      <section className="otherCollections" aria-labelledby="others-title">
        <h2 id="others-title">More collections</h2>
        <ul className="otherStrip">
          {others.map((other) => (
            <li key={other.slug}>
              <Link to={`/catalogue/${other.slug}`} className="otherCard">
                <Img src={other.cover} alt="" sizes="(min-width: 768px) 15rem, 60vw" />
                <span>{other.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {selected !== null && (
        <Lightbox
          image={{ src: looks[selected], alt: `${title} ${lookName(selected).toLowerCase()}` }}
          onClose={closeModal}
        >
          <WhatsAppLink
            message={enquiryMessage(title, lookName(selected))}
            className="whatsappButton"
          >
            Enquire about {lookName(selected).toLowerCase()}
          </WhatsAppLink>
        </Lightbox>
      )}
    </main>
  );
};

CollectionView.propTypes = {
  collection: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tag: PropTypes.string,
    description: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    palette: PropTypes.arrayOf(PropTypes.string),
    looks: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

const CollectionPage = () => {
  const { slug } = useParams();
  const collection = getCollection(slug);

  if (!collection) return <NotFound />;

  // key resets local state (open lightbox, contact form) when moving between collections
  return <CollectionView key={collection.slug} collection={collection} />;
};

export default CollectionPage;
