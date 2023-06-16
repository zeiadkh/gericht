import './find.css';
import images from '../../assets'
import Secheading from "../../components/Secheading/Secheading"


const Find = () => {
  return (
    <div className="find sec__padding bg-primary container">
      <div className="find-content">
        <Secheading title="Contact" caught="Find Us" />
        <p>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <h5>Opening Hours</h5>
        <span>Mon - Fri: 10:00 am - 02:00 am</span>
        <span>Sat - Sun: 10:00 am - 03:00 am</span>
        <button className="main-button">
            Visit Us
        </button>
      </div>
      <div className="find-img">
        <img src={images.findus} alt="find-us" />
      </div>
    </div>
  );
}

export default Find