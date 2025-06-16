import React from "react";
import ProductList from "./ProductList";
import { ProductProvider } from "./ProductContext";

const UseContextApp = () => {
  return (
    <ProductProvider>
      <ProductList />
    </ProductProvider>
  );
};

export default UseContextApp;
