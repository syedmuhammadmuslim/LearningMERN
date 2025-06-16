import React from "react";
import { useProductContext } from "./ProductContext";

const ProductItem = ({ name }) => {
  const { selectedProduct, setSelectedProduct } = useProductContext();
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
