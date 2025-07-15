import React from "react";
import { GetAllUSers } from "../components/GetAllUSers";

export const Users = () => {
  return (
    <div className="container">
      <div className="h2">All Users</div>
      <GetAllUSers />
    </div>
  );
};
