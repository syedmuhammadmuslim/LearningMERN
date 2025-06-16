import React, { useState } from "react";
import ProductList from "./ProductList";

const PropsDrillingApp = () => {
  const [selectedProduct, setSelectedProduct] = useState("");
  return (
    <div className="container my-3">
      <ProductList
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
    </div>
  );
};

export default PropsDrillingApp;
