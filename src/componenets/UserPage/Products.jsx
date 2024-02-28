import React, { useEffect } from "react";
import { customFetch } from "../../utils";
import { useState } from "react";
import { FaRupeeSign, FaPlus } from "react-icons/fa";
import Btns from "./Btns";
import BookProduct from "./BookProduct";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [btn, setbtn] = useState("all");
  const [isBooking, setIsShowBooking] = useState(false);
  const [productId, setProductId] = useState();

  const getProducts = async () => {
    try {
      const data = await customFetch.get("/getOrganicProds");
      setProducts(data.data);
      // console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const filteredBtns = [
    "all",
    ...new Set(products.map((item) => item.prodCategory)),
  ];
  // console.log(filteredBtns);

  const filterBtnFun = (product) => {
    setbtn(product);
    setFilteredProducts(
      products.filter((item) => item.prodCategory === product)
    );
  };

  const buyProduct = async (prodId) => {
    setProductId(prodId);
    setIsShowBooking(!isBooking);
  };

  if (isBooking) {
    return <BookProduct productId={productId} />;
  }

  return (
    <div className=" min-w-screen flex flex-col justify-center items-center py-10">
      <Btns filteredBtns={filteredBtns} filterBtnFun={filterBtnFun} />
      <section>
        {btn === "all"
          ? products.map((prod) => {
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

                    <section>
                      <div className="mt-2 text-lime-600 flex justify-start items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-lime-500"></div>
                        {prodQuantity}
                      </div>
                    </section>
                    <div className="flex justify-between items-center gap-2 mt-2">
                      <button
                        className="bg-lime-200 hover:bg-lime-400 px-4 py-1 rounded-md text-lime-800 tracking-widest transition-all  hover:scale-105  flex justify-center items-center gap-1"
                        onClick={() => buyProduct(id)}
                      >
                        <span className="text-sm text-lime-600">
                          <FaPlus />
                        </span>
                        Book Product
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          : filteredProducts.map((prod) => {
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
                        className="bg-lime-200 px-4 py-1 rounded-md text-lime-800 tracking-widest transition-all  hover:scale-110  hover:bg-lime-400 flex justify-center items-center gap-1"
                        onClick={() => buyProduct(id)}
                      >
                        <span className="text-sm text-lime-600">
                          <FaPlus />
                        </span>
                        Book Product
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
      </section>
    </div>
  );
};

export default Products;
