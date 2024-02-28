import React, { useEffect, useState } from "react";
import { customFetch } from "../../utils";
import { toast } from "react-toastify";

const BookProduct = ({ productId }) => {
  //   console.log(productId);

  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  const [curUser, setCurrentUser] = useState();

  const user = JSON.parse(sessionStorage.getItem("user"));

  const getUser = async () => {
    try {
      const data = await customFetch.get(`/getUser/${user.email}`);
      setCurrentUser(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductsById = async () => {
    try {
      const data = await customFetch.get(`/getProductById/${productId}`);
      //   console.log(data.data);
      setProduct(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  //   console.log(product);

  //   const {
  //     prodName,
  //     prodImage,
  //     prodDescription,
  //     prodPrice,
  //     prodQuantity,
  //     prodCategory,
  //   } = product;
  useEffect(() => {
    getUser();
    getProductsById();
  }, []);

  // console.log(curUser);

  const bookThisProduct = async () => {
    console.log(productId);
    try {
      const data = await customFetch.post(
        `/buyProduct/${productId}/${curUser?.id}`,
        {
          status: "approved",
          productQuantity: quantity,
          totalPrice: quantity * product.prodPrice,
        }
      );
      toast.success("product booked");

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" min-w-screen h-4/5 flex flex-col justify-center items-center py-10">
      <div className="w-full  max-w-4xl flex justify-center items-center bg-lime-100 rounded-lg px-4 py-4">
        <div>
          <img
            src={product?.prodImage}
            alt={product?.prodName}
            className="w-80 h-full block rounded-lg "
          />
        </div>
        <div className="w-1/2 h-full bg-white px-4 py-4 rounded-lg ml-4">
          <div className="flex justify-start text-md tracking-wider font-semibold text-lime-700 capitalize">
            <p> name : </p>
            <p className="ml-12">{product?.prodName}</p>
          </div>
          <div className="flex justify-start text-md tracking-wider font-semibold text-lime-700 capitalize">
            <p> Category : </p>
            <p className="ml-4">{product?.prodCategory}</p>
          </div>
          <div className="flex text-md tracking-wider font-semibold text-lime-700 capitalize">
            <p> price : </p>
            <p className="ml-14">{product?.prodPrice}</p>
          </div>
          <div className="flex text-md tracking-wider font-semibold text-lime-700 capitalize">
            <p> Quantity : </p>
            <input
              className="w-20 ml-6 px-2 outline-none"
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              autoFocus
            />
          </div>
          <div className="flex text-md tracking-wider font-semibold text-lime-700 capitalize">
            <p> TotalPrice : </p>
            <p className="ml-4">{quantity * product?.prodPrice}</p>
          </div>
          <div className="flex text-md tracking-wider font-semibold text-lime-700 capitalize">
            <p> Description </p>
            <p className="ml-4">{product?.prodDescription}</p>
          </div>
          <button
            className="bg-lime-600 text-white px-10 py-1 rounded-lg tracking-widest mt-2 w-full"
            onClick={bookThisProduct}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookProduct;
