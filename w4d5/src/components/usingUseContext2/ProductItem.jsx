import React from "react";
import { useProductContext } from "./ProductContext";
import { useCartContext } from "./CartContext";

const ProductItem = ({ name }) => {
  const { selectedProduct, setSelectedProduct } = useProductContext();
  const { addToCart } = useCartContext();
  return (
    <>
      <li
        className={
          "list-group-item d-flex justify-content-between align-items-center gap-3" +
          (selectedProduct === name ? "active" : "")
        }
        onClick={() => setSelectedProduct(name)}
      >
        {name}
        <button
          className="btn btn-primary"
          onClick={(e) => {
            e.stopPropagation();
            addToCart(name);
          }}
        >
          Add to Cart
        </button>
      </li>
    </>
  );
};

export default ProductItem;
