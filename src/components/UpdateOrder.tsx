import React from "react";
import Sidebar from "./Sidebar";

const UpdateOrder = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="-mx-4 flex flex-col md:flex-row">
          <Sidebar />
          <main className="px-4 md:w-2/3 lg:w-3/4">
            <article className="mb-5 rounded-md border border-blue-600 bg-white p-3 lg:p-5">
              <header className="mb-4 justify-between lg:flex">
                <div className="mb-4 lg:mb-0">
                  <p className="font-semibold">
                    <span>Order ID: 938759485 </span>

                    <span className="text-green-500"> • Delivered</span>
                  </p>
                  <p className="text-gray-500"> 2023-23-12 </p>
                </div>
              </header>
              <div className="grid gap-2 md:grid-cols-3">
                <div>
                  <p className="mb-1 text-gray-400">Person</p>
                  <ul className="text-gray-600">
                    <li>Ghulam</li>
                    <li>Phone: 12345667897</li>
                    <li>Email: test@gmail.com</li>
                  </ul>
                </div>
                <div>
                  <p className="mb-1 text-gray-400">Delivery address</p>
                  <ul className="text-gray-600">
                    <li>124 street</li>
                    <li>Orlando, FL, 12345</li>
                    <li>US</li>
                  </ul>
                </div>
                <div>
                  <p className="mb-1 text-gray-400">Payment</p>
                  <ul className="text-gray-600">
                    <li className="text-green-400">PAID</li>
                    <li>Tax paid: $12</li>
                    <li>Total paid: $34</li>
                  </ul>
                </div>
              </div>

              <hr className="my-4" />

              <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
                <figure className="mb-4 flex flex-row">
                  <div>
                    <div className="block h-20 w-20 overflow-hidden rounded border border-gray-200 p-3">
                      <img
                        src={"/logo192.png"}
                        height="60"
                        width="60"
                        alt="Title"
                      />
                    </div>
                  </div>
                  <figcaption className="ml-3">
                    <p>Product 1</p>
                    <p className="mt-1 font-semibold">2x = $23</p>
                  </figcaption>
                </figure>
              </div>

              <hr />

              <div className="my-8">
                <label className="mb-3 block"> Update Order Status </label>
                <div className="relative">
                  <select
                    className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-100 px-3 py-2 hover:border-gray-400 focus:border-gray-400 focus:outline-none"
                    name="category"
                    required
                  >
                    {["Processing", "Shipped", "Delivered"].map((status) => (
                      <option key={status} value={status}>
                        {status}
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

              <button
                type="submit"
                className="mb-2 inline-block w-full rounded-md border border-transparent bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-700"
              >
                Update
              </button>
            </article>
          </main>
        </div>
      </div>
    </section>
  );
};

export default UpdateOrder;
