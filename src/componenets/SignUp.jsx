import React, { useState } from "react";
import { customFetch } from "../utils";
import { toast } from "react-toastify";

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phno: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser((previous) => {
      return { ...previous, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user);
    try {
      const data = await customFetch.post("/signUp", { ...user });
      //   console.log(data);
      toast.success("signed up successfully");
    } catch (error) {
      console.log(error);
    }

    setUser({
      name: "",
      email: "",
      phno: "",
      password: "",
    });
  };
  return (
    <div className=" w-screen page-height bg-white flex justify-center items-center py-10">
      <form
        action=""
        className="bg-lime-50 px-10 py-10 rounded-lg shadow-slate-800 w-full  max-w-sm"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between items-center mb-3">
          <label htmlFor="" className="capitalize tracking-widest">
            name :
          </label>
          <input
            type="text"
            className="bg-white rounded-md px-4 py-1 outline-none capitalize tracking-widest"
            autoFocus
            placeholder="name"
            name="name"
            required
            value={user.name}
            onChange={handleChange}
          />
        </div>
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
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-between items-center mb-3">
          <label htmlFor="" className="capitalize tracking-widest">
            Phno :
          </label>
          <input
            type="text"
            className="bg-white rounded-md px-4 py-1 outline-none capitalize tracking-widest"
            autoFocus
            placeholder="mobile number"
            name="phno"
            maxLength="10"
            minLength="10"
            required
            value={user.phno}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-between items-center mb-3">
          <label htmlFor="" className="capitalize tracking-widest">
            password :
          </label>
          <input
            type="password"
            className="bg-white rounded-md px-4 py-1 outline-none capitalize tracking-widest"
            autoFocus
            placeholder="password"
            name="password"
            required
            value={user.password}
            onChange={handleChange}
          />
        </div>

        <button
          className="w-full bg-lime-600 text-md py-1 rounded-md text-white tracking-widest mt-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
