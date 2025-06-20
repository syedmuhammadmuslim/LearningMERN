import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container text-center">
      <Link to="/about">
        <h2>ABOUT</h2>
      </Link>
      This is my about page
    </div>
  );
};

export default About;
