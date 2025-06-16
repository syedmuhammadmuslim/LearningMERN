import React from "react";
import ProductItem from "./ProductItem";

const PostsList = () => {
  const products = [
    { id: 1, name: "This is product 1" },
    { id: 2, name: "This is product 2" },
    { id: 3, name: "This is product 3" },
    { id: 4, name: "This is product 4" },
  ];
  return (
    <div className="container my-2">
      <ul className="list-group">
        {products.map((product) => (
          <ProductItem key={product.id} name={product.name} />
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
