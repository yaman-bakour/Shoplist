"use client";

import React, { useState, useContext, useEffect } from "react";
// TODO
// import { toast } from "react-toastify";

const UpdateProduct = () => {
  // const { error, updated, setUpdated, clearErrors } =
  //   useContext(ProductContext);

  // const [product, setProduct] = useState({
  //   name: data?.name,
  //   description: data?.description,
  //   price: data?.price,
  //   seller: data?.seller,
  //   stock: data?.stock,
  //   category: data?.category,
  // });

  const { name, description, price, seller, stock, category } = product;

  // useEffect(() => {
  //   if (updated) {
  //     toast.success("Product Updated");
  //     setUpdated(false);
  //   }
  //   if (error) {
  //     toast.error(error);
  //     clearErrors();
  //   }
  // }, [error, updated]);

  const onChange = () => {
    // setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const categories = [
    "Electronics",
    "Cameras",
    "Laptops",
    "Accessories",
    "Headphones",
    "Sports",
  ];

  const submitHandler = () => {
    // e.preventDefault();
    // updateProduct(product, data?._id);
  };

  return (
    <section className="container mx-auto max-w-3xl p-6">
      <h1 className="mb-8 text-xl font-semibold text-black md:text-3xl">
        Update Product
      </h1>

      <form onSubmit={submitHandler}>
        <div className="mb-4">
          <label className="mb-1 block"> Name </label>
          <input
            type="text"
            className="w-full appearance-none rounded-md border border-gray-200 bg-gray-100 px-3 py-2 hover:border-gray-400 focus:border-gray-400 focus:outline-none"
            placeholder="Product name"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>

        <div className="mb-4 mt-5">
          <label className="mb-1 block"> Description </label>
          <textarea
            rows={4}
            className="w-full appearance-none rounded-md border border-gray-200 bg-gray-100 px-3 py-2 hover:border-gray-400 focus:border-gray-400 focus:outline-none"
            placeholder="Product description"
            name="description"
            value={description}
            onChange={onChange}
            required
          ></textarea>
        </div>

        <div className="mt-5 grid gap-x-2 md:grid-cols-2">
          <div className="mb-4">
            <label className="mb-1 block"> Price </label>
            <div className="relative">
              <div className="col-span-2">
                <input
                  type="text"
                  className="w-full appearance-none rounded-md border border-gray-200 bg-gray-100 px-3 py-2 hover:border-gray-400 focus:border-gray-400 focus:outline-none"
                  placeholder="0.00"
                  name="price"
                  value={price}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="mb-1 block"> Category </label>
            <div className="relative">
              <select
                className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-100 px-3 py-2 hover:border-gray-400 focus:border-gray-400 focus:outline-none"
                name="category"
                value={category}
                onChange={onChange}
                required
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <i className="absolute inset-y-0 right-0 p-2 text-gray-400">
                <svg
                  width="22"
                  height="22"
                  className="fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 10l5 5 5-5H7z"></path>
                </svg>
              </i>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-x-2 md:grid-cols-2">
          <div className="mb-4">
            <label className="mb-1 block"> Seller / Brand </label>
            <input
              type="text"
              className="w-full appearance-none rounded-md border border-gray-200 bg-gray-100 px-3 py-2 hover:border-gray-400 focus:border-gray-400 focus:outline-none"
              placeholder="Seller or brand"
              name="seller"
              value={seller}
              onChange={onChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="mb-1 block"> Stock </label>
            <div className="relative">
              <div className="col-span-2">
                <input
                  type="text"
                  className="w-full appearance-none rounded-md border border-gray-200 bg-gray-100 px-3 py-2 hover:border-gray-400 focus:border-gray-400 focus:outline-none"
                  placeholder="0"
                  name="stock"
                  value={stock}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="my-2 inline-block w-full rounded-md border border-transparent bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-700"
        >
          Update Product
        </button>
      </form>
    </section>
  );
};

export default UpdateProduct;
