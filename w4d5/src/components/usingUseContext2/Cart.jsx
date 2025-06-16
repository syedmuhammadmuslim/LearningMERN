import React from "react";

import { useCartContext } from "./CartContext";

const Cart = () => {
  const { cartItems } = useCartContext();

  return (
    <div className="container">
      <h2>Shopping Cart</h2>
      <ul className="list-group">
        {cartItems.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
