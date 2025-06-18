import React, { useContext } from "react";
import { productContext } from "./UseContextApp";

const ProductItem = ({ name }) => {
  const { selectedProduct, setSelectedProduct } = useContext(productContext);
  return (
    <li
      className={
        "list-group-item " + (selectedProduct === name ? "active" : "")
      }
    >
      {name}
    </li>
  );
};

export default ProductItem;
