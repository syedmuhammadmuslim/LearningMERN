import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Home = () => {
  const loggedIn = !!useSelector((state) => state.profileReducer.user._id);
  
  return (
    <div className="container">
      <div className="h2">Welcome to HSMM Stackoverflow</div>
      {loggedIn ? (
        <Link className="btn btn-primary" to={"/users"}>
          Get All Users
        </Link>
      ) : (
        <Link className="btn btn-primary" to={"/login"}>
          Login
        </Link>
      )}
    </div>
  );
};
