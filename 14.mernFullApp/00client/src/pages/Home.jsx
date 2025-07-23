import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Home = () => {
  const { user, loading } = useSelector((state) => state.profileReducer);
  if (loading) {
    return <div className="alert alert-info">Loading...</div>;
  }
  const ConditionalButton = () => {
    if (user._id) {
      return (
        <Link className="btn btn-primary" to={"/users"}>
          Get All Users
        </Link>
      );
    } else {
      return (
        <Link className="btn btn-primary" to={"/login"}>
          Login
        </Link>
      );
    }
  };

  return (
    <div className="container">
      <div className="h2">Welcome to HSMM Stackoverflow</div>
      <ConditionalButton />
    </div>
  );
};
