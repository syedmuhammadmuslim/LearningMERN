import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ProductsList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/*" element={<Products />}>
            <Route index element={<ProductsList />} />
            <Route path=":id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
