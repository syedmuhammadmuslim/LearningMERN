import { Routes, Route } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import ProductsList from "./ProductList";

function Products() {
  return (
    <div className="p-4 border rounded">
      <Routes>
        <Route index element={<ProductsList />} />
        <Route path="/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default Products;
