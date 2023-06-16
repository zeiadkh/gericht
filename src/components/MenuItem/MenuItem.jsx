import './menuitem.css'


const MenuItem = ({name, price, ingredients}) => {
  return (
    <div className="menu-item">
      <div className="menu-item-description">
        <h4>{name}</h4>
        <div className="menu-item-description-price">
          <span></span>
          <p>${price}</p>
        </div>
      </div>
      <div className="menu-item-ingreds">
        {ingredients.map((ingred, index) => (
          <p key={index}>{ingred}</p>
        ))}
      </div>
    </div>
  );
}

export default MenuItem