import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="container text-center">
        <Link to="/">
          <h1>HOME</h1>
        </Link>
        This is my home page.
      </div>
    </div>
  );
};

export default Home;
