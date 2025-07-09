import React from "react";
import { GetAllUSers } from "../components/GetAllUSers";

export const Home = () => {
  return (
    <div className="container">
      <div className="h2">Welcome to HSMM Stackoverflow</div>
      <GetAllUSers />
    </div>
  );
};
