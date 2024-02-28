import React, { useState } from "react";
import { customFetch } from "../../utils";
import { toast } from "react-toastify";

const AddProducts = () => {
  const [product, setProduct] = useState({
    prodName: "",
    prodPrice: "",
    prodQuantity: "",
    prodCategory: "",
    prodDescription: "",
  });
  const [image, setImage] = useState();

  const handleImage = (e) => {
    let file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
  };

  const handleChange = (e) => {
    setProduct((previous) => {
      return { ...previous, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log({ ...product, prodImage: image });

    try {
      const data = await customFetch.post("/addProduct", {
        ...product,
        prodImage: image,
      });

      toast.success("Product Added Successfully");
    } catch (error) {
      console.log(error);
    }

    setProduct({
      prodName: "",
      prodPrice: "",
      prodQuantity: "",
      prodCategory: "",
      prodDescription: "",
    });
  };
  return (
    <div className=" w-screen page-height bg-white flex justify-center items-center py-10">
      <form
        action=""
        className="bg-lime-50 px-10 py-10 rounded-lg shadow-slate-800 w-full  max-w-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between items-center mb-3">
          <label htmlFor="" className="capitalize tracking-widest">
            product name :
          </label>
          <input
            type="text"
            className="bg-white rounded-md px-4 py-1 outline-none capitalize tracking-widest w-60"
            autoFocus
            placeholder="product name"
            name="prodName"
            value={product.prodName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex justify-between items-center mb-3">
          <label htmlFor="" className="capitalize tracking-widest">
            product Price :
          </label>
          <input
            type="text"
            className="bg-white rounded-md px-4 py-1 outline-none capitalize tracking-widest w-60"
            autoFocus
            placeholder="product price"
            name="prodPrice"
            value={product.prodPrice}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex justify-between items-center mb-3">
          <label htmlFor="" className="capitalize tracking-widest">
            product Quantity :
          </label>
          <input
            type="text"
            className="bg-white rounded-md px-4 py-1 outline-none capitalize tracking-widest w-60"
            autoFocus
            placeholder="product quantity"
            name="prodQuantity"
            value={product.prodQuantity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex justify-between items-center mb-3">
          <label htmlFor="" className="capitalize tracking-widest">
            product Category :
          </label>
          <input
            type="text"
            className="bg-white rounded-md px-4 py-1 outline-none capitalize tracking-widest w-60"
            autoFocus
            placeholder="product category"
            name="prodCategory"
            value={product.prodCategory}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex justify-between items-center mb-3">
          <label htmlFor="" className="capitalize tracking-widest">
            product Image :
          </label>
          <input
            type="file"
            className="bg-white rounded-md px-4 py-1 outline-none capitalize tracking-widest w-60"
            autoFocus
            name="prodImage"
            onChange={handleImage}
            required
          />
        </div>
        <div className="flex justify-between items-center mb-3">
          <label htmlFor="" className="capitalize tracking-widest">
            product Description :
          </label>
          <textarea
            type="text"
            className="bg-white rounded-md px-4 py-1 outline-none capitalize tracking-widest w-60"
            autoFocus
            name="prodDescription"
            onChange={handleChange}
            required
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

export default AddProducts;
