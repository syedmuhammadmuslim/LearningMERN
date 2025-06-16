import React, { createContext, useState } from "react";
import ProductList from "./ProductList";

export const productContext = createContext();

const UseContextApp = () => {
  const [selectedProduct, setSelectedProduct] = useState("This is product 2");
  return (
    <div className="container">
      <h1>Using useContext</h1>
      <productContext.Provider value={{ selectedProduct, setSelectedProduct }}>
        <ProductList />
      </productContext.Provider>
    </div>
  );
};

export default UseContextApp;
