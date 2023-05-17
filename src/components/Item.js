import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setCart] = useState(true);
  
  const addToCart = () => {
    setCart(!inCart);
  };
  const itemClass = inCart ? "Add to Cart" : "Remove From Cart"

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>{inCart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
