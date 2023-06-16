import Award from "../../components/Award/Award"
import images from "../../assets"
import Secheading from "../../components/Secheading/Secheading"
import './awards.css'


const Awards = () => {
  return (
    <div className="awards sec__padding container bg-primary" id="awards">
      <div className="awards-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <div className="awards-container container">
        <div className="awards-content">
          <Secheading title="Awards & recognition" caught="Our Laurels" />
          <div className="awards-collection ">
            <Award
              img={images.award01}
              name="Outstanding Chef"
              describtion="Lorem ipsum dolor sit amet, consectetur."
            />
            <Award
              img={images.award02}
              name="Bib Gourmond"
              describtion="Lorem ipsum dolor sit amet, consectetur."
            />
            <Award
              img={images.award03}
              name="AA Hospitality "
              describtion="Lorem ipsum dolor sit amet, consectetur."
            />
            <Award
              img={images.award05}
              name="Rising Star"
              describtion="Lorem ipsum dolor sit amet, consectetur."
            />
          </div>
        </div>
        <div className="awards-img">
          <img src={images.laurels} alt="laures" />
        </div>
      </div>
    </div>
  );
}

export default Awards