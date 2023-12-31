import { useState} from 'react'
import "./navbar.css"
import logo from "../../../assets/gericht.png";
import { CgMenuHotdog } from "react-icons/cg"
import { IoRestaurantOutline } from "react-icons/io5"

const Navbar = () => {
  const [toggeled, setToggeled] = useState(false);
  let closeOverlay = () => setToggeled(false)
  return (
    <nav>
      <img src={logo} alt="gericht" />

      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#awards">Awards</a>
        </li>
        <li>
          <a href="#newsletter">Contact</a>
        </li>
      </ul>

      <div className="nav-login">
        <a href="#newsletter" className="login">
          Login/Registeration
        </a>
        <svg
          width="2"
          height="57"
          viewBox="0 0 2 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 0V57" stroke="url(#paint0_radial_0_363)" />
          <defs>
            <radialGradient
              id="paint0_radial_0_363"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(1.5 28.5) rotate(90) scale(28.5 0.5)"
            >
              <stop offset="0.588542" stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>

        <a href="#findus" className="nav-login-book">
          Book Table
        </a>
      </div>
      <div className="nav-links-small">
        <CgMenuHotdog
          role="button"
          size={32}
          onClick={() => setToggeled(true)}
        />
        {toggeled && (
          <div className="nav-links-small-container">
            <IoRestaurantOutline
              role="button"
              size={27}
              onClick={() => setToggeled(false)}
            />
            <ul className="nav-links">
              <li>
                <a href="#home" onClick={closeOverlay}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={closeOverlay}>
                  About
                </a>
              </li>
              <li>
                <a href="#menu" onClick={closeOverlay}>
                  Menu
                </a>
              </li>
              <li>
                <a href="#awards" onClick={closeOverlay}>
                  Awards
                </a>
              </li>
              <li>
                <a href="#newsletter" onClick={closeOverlay}>
                  Contact
                </a>
              </li>
            </ul>
            <div className="nav-login-small">
              <a href="#newsletter" className="login" onClick={closeOverlay}>
                Login/Registeration
              </a>
              <a
                href="#findus"
                className="nav-login-book"
                onClick={closeOverlay}
              >
                Book Table
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar
