import spoon from "../../assets/spoon.png"
import "./secheading.css"

const Secheading = ({title, caught}) => {
  return (
    <div className="secheading">
        <div className="secheading-spoon">
          <p>{title}</p>
          <img src={spoon} alt="" />
        </div>
        <h2>{caught}</h2>
    </div>
        
  )
}

export default Secheading