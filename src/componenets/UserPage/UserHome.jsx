import React from "react";
import { Outlet } from "react-router-dom";
import UserNav from "./UserNav";

const UserHome = () => {
  return (
    <div>
      <UserNav />
      <Outlet />
    </div>
  );
};

export default UserHome;
