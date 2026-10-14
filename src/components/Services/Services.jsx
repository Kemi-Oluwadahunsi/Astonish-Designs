import "./services.scss";
import Img from "../Img/Img";
import Reveal from "../Reveal/Reveal";

const services = [
  {
    icon: "/images/scissors.png",
    title: "Custom Clothing Design",
    text: "Astonish Designs specializes in creating one-of-a-kind, bespoke garments tailored to individual preferences and measurements. Clients can expect a personalized experience that reflects their unique style.",
  },
  {
    icon: "/images/special-occassion.png",
    title: "Special Occasion Outfits",
    text: "For weddings, parties, and special events, Astonish Designs crafts exquisite outfits that make a statement. Each design is meticulously crafted to align with the client's vision and the specific theme.",
  },
  {
    icon: "/images/age-inclusive.png",
    title: "Age-Inclusive Collections",
    text: "Astonish Designs embraces diversity by curating fashion collections that cater to various age groups. Each collection is thoughtfully designed to celebrate different styles and preferences, ensuring inclusivity in every piece.",
  },
  {
    icon: "/images/ready-to-wear.png",
    title: "Ready-To-Wear Outfits",
    text: "Our Ready-To-Wear Outfits are meticulously designed, ensuring each piece is not only on-trend but also effortlessly chic. From casual day looks to sophisticated evening attire, we have range of outfits to suit every occasion and style preference.",
  },
];

const Services = () => {
  return (
    <>
      <hr className="sectionDivider" />
      <section className="serviceSection">
        <Reveal className="firstDiv">
          <h2>Our Services</h2>
          <p className="serviceParagraph">
            Explore our diverse range of services meticulously tailored to meet
            your every fashion need.
          </p>
        </Reveal>

        <div className="serviceWrap">
          <div className="services">
            {services.map(({ icon, title, text }, i) => (
              <Reveal as="article" className="serviceCard" key={title} delay={i * 0.08}>
                <Img src={icon} alt="" className="icon" sizes="56px" width={56} height={56} />
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>

          <div className="serviceImage">
            <Img
              src="/images/servicesImagesLeft.jpeg"
              alt="Astonish Designs outfit"
              sizes="30vw"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
