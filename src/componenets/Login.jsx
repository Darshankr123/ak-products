import React, { useState } from "react";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userType, setUserType] = useState("user");

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData((previous) => {
      return { ...previous, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log({
    //   ...userData,
    //   userType: userType,
    // });

    try {
      const data = await customFetch.post("/login", {
        ...userData,
        userType: userType,
      });
      if (data.data.userType === "user") {
        navigate("/userPage");
        toast.success("logged in as user");
        sessionStorage.setItem("user", JSON.stringify(data.data));
      } else if (data.data.userType === "admin") {
        navigate("/adminPage");
        toast.success("logged in as admin");
        sessionStorage.setItem("admin", JSON.stringify(data.data));
      }
    } catch (error) {
      if (error.response.data.status === 500) {
        toast.error("please provide valid UserId and Password");
      }
    }

    setUserData({
      email: "",
      password: "",
    });
    setUserType("user");
  };
  return (
    <div className=" w-screen page-height bg-white flex justify-center items-center py-10">
      <form
        onSubmit={handleSubmit}
        action=""
        className="bg-lime-50 px-10 py-10 rounded-lg shadow-slate-800 w-full  max-w-sm"
      >
        <div className="flex justify-between items-center mb-3">
          <label htmlFor="" className="capitalize tracking-widest">
            email :
          </label>
          <input
            type="email"
            className="bg-white rounded-md px-4 py-1 outline-none capitalize tracking-widest"
            autoFocus
            placeholder="email"
            name="email"
            required
            value={userData.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="" className="capitalize tracking-widest">
            Password :
          </label>
          <input
            type="password"
            className="bg-white rounded-md px-4 py-1 outline-none capitalize tracking-widest"
            autoFocus
            placeholder="password"
            name="password"
            required
            value={userData.password}
            onChange={handleChange}
          />
        </div>
        <button
          className="w-full bg-lime-600 text-md py-1 rounded-md text-white tracking-widest mt-2"
          type="submit"
        >
          Submit
        </button>

        <p
          className="text-center mt-2 capitalize tracking-widest underline text-lime-700 cursor-pointer"
          onClick={() => setUserType("admin")}
        >
          click to Login as Admin
        </p>
      </form>
    </div>
  );
};

export default Login;
