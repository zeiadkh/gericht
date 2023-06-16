import Secheading from '../../../components/Secheading/Secheading'
import './hero.css'

const Hero = () => {
  return (
    <div className="hero sec__padding container">
      <div className="hero-container-content">
        <Secheading
          title="Chase the new Flavour"
          caught="The Key to Fine dining"
        />

        <p>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus{" "}
        </p>
        <button className="main-button">Explore Menu</button>
      </div>
      <div className="hero-container-img">
        <img
          src="https://ik.imagekit.io/3e6idanej/welcome.png?updatedAt=1686934663991"
          alt="welcome"
        />
      </div>
    </div>
  );
}

export default Hero