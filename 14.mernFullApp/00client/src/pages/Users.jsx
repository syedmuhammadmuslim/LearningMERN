import React from "react";
import { GetAllUsers } from "../components/GetAllUsers";

export const Users = () => {
  return (
    <div className="container">
      <div className="h2">All Users</div>
      <GetAllUsers />
    </div>
  );
};
