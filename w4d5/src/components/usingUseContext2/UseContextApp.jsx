import React from "react";
import ProductList from "./ProductList";
import { ProductProvider } from "./ProductContext";
import { CartProvider } from "./CartContext";
import Cart from "./Cart";

const UseContextApp = () => {
  return (
    <div className="container">
      <ProductProvider>
        <CartProvider>
          <ProductList />
          <Cart />
        </CartProvider>
      </ProductProvider>
    </div>
  );
};

export default UseContextApp;
