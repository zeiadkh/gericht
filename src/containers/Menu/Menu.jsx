import './menu.css'
import Secheading from '../../components/Secheading/Secheading'
import MenuItem from '../../components/MenuItem/MenuItem'
import data from "./menu.json"

const Menu = () => {
  return (
    <div className="menu sec__padding ">
      <Secheading title="Menu that fits you palatte" caught="Today’s Special" />
      <div className="menu-content container">
        <div className="menu-drinks">
          <h3>Drinks</h3>
          {data.drinks.map((item, index) => (
            <MenuItem
              key={index}
              name={item.name}
              ingredients={item.ingredients}
              price={item.price}
            />
          ))}
        </div>
        <div className="menu-img">
          <img
            src="https://ik.imagekit.io/3e6idanej/strawb-removebg.png?updatedAt=1686432427948"
            alt="menu"
          />
        </div>
        <div className="menu-meals">
          <h3>Meals</h3>
          {data.meals.map((item, index) => (
            <MenuItem
              key={index}
              name={item.name}
              ingredients={item.ingredients}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <button type="button" className="main-button">
        View More
      </button>
    </div>
  );
}

export default Menu