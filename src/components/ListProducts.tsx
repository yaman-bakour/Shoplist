"use client";
import React from "react";
import StarRatings from "react-star-ratings";
import Header from "./Header";
import Filters from "./Filters";
import Link from "next/link";

const ListProducts = () => {
  return (
    <>
      <Header />
      <section className="py-12">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="-mx-4 flex flex-col md:flex-row">
            <Filters />

            <main className="px-3 md:w-2/3 lg:w-3/4">
              <article className="mb-5 overflow-hidden rounded border border-gray-200 bg-white shadow-sm">
                <div className="flex flex-col md:flex-row">
                  <div className="flex p-3 md:w-1/4">
                    <div
                      style={{
                        width: "80%",
                        height: "70%",
                        position: "relative",
                      }}
                    >
                      <img
                        src={"/logo192.png"}
                        alt="product anme"
                        height="240"
                        width="240"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/4">
                    <div className="p-4">
                      <Link href={`/`} className="hover:text-blue-600">
                        Lorem Ipsum is simply dummy text
                      </Link>
                      <div className="mb-2 flex flex-wrap items-center space-x-2">
                        <div className="ratings">
                          <div className="my-1">
                            <StarRatings
                              rating={5}
                              starRatedColor="#ffb829"
                              numberOfStars={5}
                              starDimension="18px"
                              starSpacing="1px"
                              name="rating"
                            />
                          </div>
                        </div>
                        <b className="text-gray-300">•</b>
                        <span className="ml-1 text-yellow-500">5</span>
                      </div>
                      <p className="mb-2 text-gray-500">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 md:w-1/4 lg:border-l lg:border-t-0">
                    <div className="p-5">
                      <span className="text-xl font-semibold text-black">
                        $989
                      </span>

                      <p className="text-green-500">Free Shipping</p>
                      <div className="my-3">
                        <a className="inline-block cursor-pointer rounded-md border border-transparent bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                          {" "}
                          Add to Cart{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListProducts;
