import React, { useContext } from "react";
import ProductList from "./ProductList";
import { ProductProvider } from "./ProductContext";
import { CartProvider } from "./CartContext";
import Cart from "./Cart";

const UseContextApp = () => {
  return (
    <div className="container">
      <CartProvider>
        <ProductProvider>
          <ProductList />
          <Cart />
        </ProductProvider>
      </CartProvider>
    </div>
  );
};

export default UseContextApp;
