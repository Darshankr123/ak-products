import React from "react";
import Navbar from "./Navbar";
import Products from "./UserPage/Products";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default HomePage;
