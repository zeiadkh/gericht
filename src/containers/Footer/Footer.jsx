import './footer.css'
import images from "../../assets"
import {FaFacebookF} from "react-icons/fa"
import {FiTwitter ,FiInstagram} from "react-icons/fi";


const Footer = () => {
  return (
    <div className="footer sec__padding bg-primary">
      <div className="footer-container container">
        <div className="footer-contact">
          <h5>Conact Us</h5>
          <p>9 W 53rd St, New York, NY 10019, USA</p>
          <span>+1 212-344-1230</span>
          <span>+1 212-555-1230</span>
        </div>
        <div className="footer-social">
          <h2>Gerícht</h2>
          <p>
            &quot;The best way to find yourself is to lose yourself in the service of
            others.”
          </p>
          <img src={images.spoon} alt="footer-spoon" />
          <div className="footer-icons-wraper container">
            <FaFacebookF className="footer-icon" />
            <FiTwitter className="footer-icon" />
            <FiInstagram className="footer-icon" />
          </div>
        </div>
        <div className="footer-wrk-hours">
          <h5>Working Hours</h5>
          <span>Monday-Friday:</span>
          <span>08:00 am -12:00 am</span>
          <span>Saturday-Sunday:</span>
          <span>07:00am -11:00 pm</span>
        </div>
      </div>
      <p>2021 Gerícht. All Rights reserved.</p>
    </div>
  );
}

export default Footer