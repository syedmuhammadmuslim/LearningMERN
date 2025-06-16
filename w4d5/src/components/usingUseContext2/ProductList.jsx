import React from "react";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    { id: 4, name: "Product 4" },
  ];
  return (
    <>
      <div className="my-3">
        <ul className="list-group d-inline-flex">
          {products.map((product) => (
            <ProductItem key={product.id} name={product.name} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductList;
