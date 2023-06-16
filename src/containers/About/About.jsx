import images from "../../assets"
import './about.css'

const About = () => {
  return (
    <div className="about sec__padding bg-primary container" id="about">
      <div className="g-overlay">
        <img src={images.G} alt="g-overlay" />
      </div>
      <div className="about-content container">
        <div className="about-container-about-us">
          <div className="about-container-spoon">
            <h2>About Us</h2>
            <img src={images.spoon} alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button type="button" className="main-button" id="about-more">Know More</button>
        </div>
        <div className="knife container">
          <img src={images.knife} alt="" />
        </div>
        <div className="about-container-history">
          <div className="about-container-spoon">
            <h2>Our History</h2>
            <img src={images.spoon} alt="" />
          </div>
          <p>
            Adipiscing Tempus Ullamcorper Lobortis Odio Tellus Arcu Volutpat.
            Risus Placerat Morbi Volutpat Habitasse Interdum Mi Aliquam In Sed
            Odio Nec Aliquet.
          </p>
          <button className="main-button">Know More</button>
        </div>
      </div>
    </div>
  );
}

export default About