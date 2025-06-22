import { Routes, Route, Outlet } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import ProductsList from "./ProductList";

function Products() {
  return (
    <div className="p-4 border rounded">
      This is my Products Page <br />
      
      <Outlet />
    </div>
  );
}

export default Products;
