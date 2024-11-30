import React from "react";
import Sidebar from "./Sidebar";

const NewProduct = () => {
  const categories = [
    "Electronics",
    "Cameras",
    "Laptops",
    "Accessories",
    "Headphones",
    "Sports",
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="-mx-4 flex flex-col md:flex-row">
          <Sidebar />
          <main className="px-4 md:w-2/3 lg:w-3/4">
            <section className="container mx-auto max-w-3xl p-6">
              <h1 className="mb-8 text-xl font-semibold text-black md:text-3xl">
                Create New Product
              </h1>

              <form>
                <div className="mb-4">
                  <label className="mb-1 block"> Name </label>
                  <input
                    type="text"
                    className="w-full appearance-none rounded-md border border-gray-200 bg-gray-100 px-3 py-2 hover:border-gray-400 focus:border-gray-400 focus:outline-none"
                    placeholder="Product name"
                    name="name"
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
                  Create Product
                </button>
              </form>
            </section>
          </main>
        </div>
      </div>
    </section>
  );
};

export default NewProduct;
