import React from "react";
import ProductItem from "./ProductItem";

const products = [
  { id: 1, name: "Phone" },
  { id: 2, name: "Laptop" },
  { id: 3, name: "Screen" },
  { id: 4, name: "Speaker" },
];

const ProductList = ({ selectedProduct, setSelectedProduct }) => {
  return (
    <div className="container my-2">
      <ul className="list-group">
        {products
          ? products.map((product) => (
              <ProductItem
                key={product.id}
                name={product.name}
                selectedProduct={selectedProduct}
                setSelectedProduct={setSelectedProduct}
              />
            ))
          : ""}
      </ul>
    </div>
  );
};

export default ProductList;
