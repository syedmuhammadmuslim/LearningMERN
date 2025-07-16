import React from "react";
import { useSelector } from "react-redux";
import { GetAllUsers } from "../components/GetAllUsers";

export const Users = () => {
  const { loading, error } = useSelector((store) => store.profileReducer);
  if (loading) return <div className="alert alert-info">Loading...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;
  return (
    <div className="container">
      <div className="h2">All Users</div>
      <GetAllUsers />
    </div>
  );
};
