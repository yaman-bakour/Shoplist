import React from "react";
import Link from "next/link";

const Cart = () => {
  return (
    <>
      <section className="bg-blue-100 py-5 sm:py-7">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h2 className="mb-2 text-3xl font-semibold">5 Item(s) in Cart</h2>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="flex flex-col gap-4 md:flex-row">
            <main className="md:w-3/4">
              <article className="mb-5 rounded border border-gray-200 bg-white p-3 shadow-sm lg:p-5">
                <div>
                  <div className="mb-4 flex flex-wrap gap-5  lg:flex-row">
                    <div className="w-full lg:w-2/5 xl:w-2/4">
                      <figure className="flex leading-5">
                        <div>
                          <div className="block h-16 w-16 overflow-hidden rounded border border-gray-200">
                            <img src={"/logo192.png"} alt="Title" />
                          </div>
                        </div>
                        <figcaption className="ml-3">
                          <p>
                            <a href="#" className="hover:text-blue-600">
                              Product name
                            </a>
                          </p>
                          <p className="mt-1 text-gray-400"> Seller: Apple</p>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="w-24">
                      <div className="relative mt-1 flex h-10 w-full flex-row rounded-lg bg-transparent">
                        <button
                          data-action="decrement"
                          className=" h-full w-20 cursor-pointer rounded-l bg-gray-300 text-gray-600 outline-none hover:bg-gray-400 hover:text-gray-700"
                        >
                          <span className="m-auto text-2xl font-thin">−</span>
                        </button>
                        <input
                          type="number"
                          className="text-md md:text-basecursor-default custom-input-number flex w-full items-center bg-gray-300 text-center  font-semibold text-gray-900 outline-none hover:text-black  focus:text-black focus:outline-none"
                          name="custom-input-number"
                          value={0}
                          readOnly
                        ></input>
                        <button
                          data-action="increment"
                          className="h-full w-20 cursor-pointer rounded-r bg-gray-300 text-gray-600 hover:bg-gray-400 hover:text-gray-700"
                        >
                          <span className="m-auto text-2xl font-thin">+</span>
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="leading-5">
                        <p className="font-semibold not-italic">$898</p>
                        <small className="text-gray-400">
                          {" "}
                          $98 / per item{" "}
                        </small>
                      </div>
                    </div>
                    <div className="flex-auto">
                      <div className="float-right">
                        <a className="inline-block cursor-pointer rounded-md border border-gray-200 bg-white px-4 py-2 text-red-600 shadow-sm hover:bg-gray-100">
                          Remove
                        </a>
                      </div>
                    </div>
                  </div>

                  <hr className="my-4" />
                </div>
              </article>
            </main>
            <aside className="md:w-1/4">
              <article className="mb-5 rounded border border-gray-200 bg-white p-3 shadow-sm lg:p-5">
                <ul className="mb-5">
                  <li className="mb-1 flex justify-between  text-gray-600">
                    <span>Total price:</span>
                    <span>$98</span>
                  </li>
                  <li className="mb-1 flex justify-between  text-gray-600">
                    <span>Total Units:</span>
                    <span className="text-green-500">7 (Units)</span>
                  </li>
                  <li className="mb-1 flex justify-between  text-gray-600">
                    <span>TAX:</span>
                    <span>$78</span>
                  </li>
                  <li className="mt-3 flex justify-between border-t pt-3 text-lg font-bold">
                    <span>Total price:</span>
                    <span>$898</span>
                  </li>
                </ul>

                <a className="mb-2 inline-block w-full cursor-pointer rounded-md border border-transparent bg-green-600 px-4 py-3 text-center text-lg font-medium text-white hover:bg-green-700">
                  Continue
                </a>

                <Link
                  href="/"
                  className="inline-block w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-center text-lg font-medium text-green-600 shadow-sm hover:bg-gray-100"
                >
                  Back to shop
                </Link>
              </article>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
