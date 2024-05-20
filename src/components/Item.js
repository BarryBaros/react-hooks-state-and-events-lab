import React, {useState} from "react";

function Item({ name, category }) {
  // Create state variable for the cart status
  const [inCart, setInCart] = useState(false);

  // Event handler to toggle the cart status
  const handleCartToggle = () => {
  setInCart((inCart) => !inCart);
}

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartToggle} > {inCart ? "Remove From Cart" : "Add to Cart"} </button>
    </li>
  );
}

export default Item;
