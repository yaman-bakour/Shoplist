import React from "react";
import BreadCrumbs from "./BreadCrumbs";
import Link from "next/link";

const Shipping = () => {
  return (
    <div>
      <BreadCrumbs />
      <section className="bg-gray-50 py-10">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="flex flex-col gap-4 md:flex-row lg:gap-8">
            <main className="md:w-2/3">
              <article className="mb-5 rounded border border-gray-200 bg-white p-4 shadow-sm lg:p-6">
                <h2 className="mb-5 text-xl font-semibold">
                  Shipping information
                </h2>

                <div className="mb-6 grid gap-4 sm:grid-cols-2">
                  <label className="flex cursor-pointer rounded-md border border-gray-200 bg-gray-50 p-3 hover:border-blue-400 hover:bg-blue-50">
                    <span>
                      <input
                        name="shipping"
                        type="radio"
                        className="mt-1 h-4 w-4"
                      />
                    </span>
                    <p className="ml-2">
                      <span>1295 street</span>
                      <small className="block text-sm text-gray-400">
                        Orlando, FL, 84753
                        <br />
                        US
                        <br />
                        9871234576
                      </small>
                    </p>
                  </label>
                </div>

                <Link
                  href="/address/new"
                  className="inline-block rounded-md border border-gray-300 px-4 py-2 text-blue-600 hover:bg-gray-100"
                >
                  <i className="fa fa-plus mr-1"></i> Add new address
                </Link>

                <div className="mt-10 flex justify-end space-x-2">
                  <Link
                    href="/cart"
                    className="inline-block rounded-md border border-gray-200 bg-white px-5 py-2 text-gray-700 shadow-sm hover:bg-gray-100 hover:text-blue-600"
                  >
                    Back
                  </Link>
                  <a className="inline-block cursor-pointer rounded-md border border-transparent bg-green-600 px-5 py-2 text-white hover:bg-green-700">
                    Checkout
                  </a>
                </div>
              </article>
            </main>
            <aside className="md:w-1/3">
              <article className="text-gray-600" style={{ maxWidth: "350px" }}>
                <h2 className="mb-3 text-lg font-semibold">Summary</h2>
                <ul>
                  <li className="mb-1 flex justify-between">
                    <span>Amount:</span>
                    <span>$343</span>
                  </li>
                  <li className="mb-1 flex justify-between">
                    <span>Est TAX:</span>
                    <span>$34</span>
                  </li>
                  <li className="mt-3 flex justify-between border-t pt-3">
                    <span>Total Amount:</span>
                    <span className="font-bold text-gray-900">$343</span>
                  </li>
                </ul>

                <hr className="my-4" />

                <h2 className="mb-3 text-lg font-semibold">Items in cart</h2>

                <figure className="mb-4 flex items-center leading-5">
                  <div>
                    <div className="relative block h-20 w-20 rounded border border-gray-200 p-1">
                      <img
                        width="50"
                        height="50"
                        src={"/logo192.png"}
                        alt="Title"
                      />
                      <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-center text-sm text-white">
                        3
                      </span>
                    </div>
                  </div>
                  <figcaption className="ml-3">
                    <p> product name</p>
                    <p className="mt-1 text-gray-400">Total: $34</p>
                  </figcaption>
                </figure>
              </article>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shipping;
