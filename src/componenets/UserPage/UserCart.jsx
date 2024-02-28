import React, { useEffect } from "react";
import { useState } from "react";
import { customFetch } from "../../utils";
import userImg from "../../assets/user.jpg";
const UserCart = () => {
  const [currentUser, setCurrentUser] = useState();
  const [cartProducts, setCartProducts] = useState();

  const user = JSON.parse(sessionStorage.getItem("user"));

  const getCurUser = async () => {
    try {
      const data = await customFetch.get(`/getUser/${user.email}`);
      setCurrentUser(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCartProducts = async () => {
    try {
      const data = await customFetch.get("/getProducts");
      setCartProducts(
        data.data.filter((item) => {
          if (item.status === "pending") {
            return item;
          }
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCartProducts();
    getCurUser();
  }, []);

  console.log(cartProducts);

  return (
    <div className=" min-w-screen flex flex-col justify-center items-center py-10">
      <div>
        <img src={userImg} alt="" className="h-40 w-40 " />
        <p className="text-center capitalize tracking-widest ">
          {currentUser?.name}
        </p>
        <div className="h-1 bg-slate-700 rounded-full"></div>
      </div>

      <section>
        {/* {cartProducts.map((prod) => {
          const { prodImage, prodPrice, prodName, prodQuantity, id } = prod;
          return (
            <div
              key={id}
              className="flex justify-start gap-10 px-4 py-6 h-40  bg-slate-100 mt-4 rounded-lg "
            >
              <div className="h-30">
                <img
                  src={prodImage}
                  alt={prodName}
                  className="h-full w-40 rounded-lg object-cover object-center"
                />
              </div>
              <div>
                <div className="flex justify-between items-center gap-10 ">
                  <p className="font-bold text-lime-800 capitalize">
                    {prodName}
                  </p>
                  <p className="font-semibold flex justify-center items-center">
                    <span className="text-sm pr-1">
                      <FaRupeeSign />
                    </span>
                    {prodPrice}.00
                  </p>
                </div>
                <div className="mt-2 text-lime-600 flex justify-start items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-lime-500"></div>
                  {prodQuantity}
                </div>
                <div className="flex justify-between items-center gap-2 mt-2">
                  <button
                    className="bg-lime-200 px-4 py-1 rounded-md text-lime-800 tracking-widest transition-all  hover:scale-110  border-black flex justify-center items-center gap-1"
                    onClick={() => buyProduct(id)}
                  >
                    <span className="text-sm text-lime-600">
                      <FaPlus />
                    </span>
                    Add To Cart
                  </button>
                  
                </div>
              </div>
            </div>
          );
        })} */}
      </section>
    </div>
  );
};

export default UserCart;
