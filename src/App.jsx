import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./componenets/HomePage";
import Products from "./componenets/UserPage/Products";
import Login from "./componenets/Login";
import SignUp from "./componenets/SignUp";
import UserHome from "./componenets/UserPage/UserHome";
import UserCart from "./componenets/UserPage/UserCart";
import AdminHome from "./componenets/AdminPage/AdminHome";
import AddProducts from "./componenets/AdminPage/AddProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/userPage",
    element: <UserHome />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: "cart",
        element: <UserCart />,
      },
    ],
  },
  {
    path: "/adminPage",
    element: <AdminHome />,
    children: [
      {
        index: "true",
        element: <AddProducts />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
