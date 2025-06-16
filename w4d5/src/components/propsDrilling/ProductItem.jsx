import React from "react";

const ProductItem = ({ name, selectedProduct, setSelectedProduct }) => {
  return (
    <li
      className={
        "list-group-item " + (selectedProduct === name ? "active" : "")
      }
      onClick={() => setSelectedProduct(name)}
    >
      {name}
    </li>
  );
};

export default ProductItem;
