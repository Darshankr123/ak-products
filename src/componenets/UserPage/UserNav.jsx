import React from "react";
import { Link } from "react-router-dom";

const UserNav = () => {
  return (
    <div className="bg-lime-700 h-14 flex justify-between items-center">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        <h2 className="font-bold tracking-widest uppercase text-slate-50 text-2xl ">
          Organic <span className="text-lime-200">Products</span>
        </h2>

        <div className="flex gap-4">
          {/* <Link to="cart" className="tracking-widest text-md text-slate-100">
            cart
          </Link> */}
          <Link to="/" className="tracking-widest text-md text-slate-100">
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserNav;
