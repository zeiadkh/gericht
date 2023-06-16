import './chefsword.css'
import images from '../../assets'
import Secheading from "../../components/Secheading/Secheading"


const ChefsWord = () => {
  return (
    <div className="chefsword sec__padding bg-primary container">
      <div className="chefsword-img">
        <img src={images.chef} alt="chef" />
      </div>
      <div className="chefsword-content">
        <Secheading title="Chef's Word" caught="What We Believe IN" />
        <div className="chefsword-quote">
          <p>
            <img src={images.quote} alt="quote" />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit.
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
            molestie lectus eu. Congue iaculis integer curabitur semper sit
            nunc.
          </p>
        </div>
        <div className="chefs-signature">
          <h4>Kevin Luo</h4>
          <p>Chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </div>
      </div>
    </div>
  );
}

export default ChefsWord