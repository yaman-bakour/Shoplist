import React from "react";
import StarRatings from "react-star-ratings";
import NewReview from "./NewReview";
import Reviews from "./Reviews";

const ProductDetails = () => {
  return (
    <>
      <section className="bg-white py-10">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="mb-5 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <aside>
              <div className="mb-5 rounded border border-gray-200 p-3 text-center shadow-sm">
                <img
                  className="inline-block object-cover"
                  src="/logo192.png"
                  alt="Product title"
                  width="340"
                  height="340"
                />
              </div>
              <div className="space-x-2 overflow-auto whitespace-nowrap text-center">
                <a className="inline-block cursor-pointer rounded-md border border-gray-200 p-1 hover:border-blue-500">
                  <img
                    className="h-14 w-14"
                    src={"/logo192.png"}
                    alt="Product title"
                    width="500"
                    height="500"
                  />
                </a>
              </div>
            </aside>
            <main>
              <h2 className="mb-4 text-2xl font-semibold">Product title</h2>

              <div className="mb-2 flex flex-wrap items-center space-x-2">
                <div className="ratings">
                  <StarRatings
                    rating={5}
                    starRatedColor="#ffb829"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="2px"
                    name="rating"
                  />
                </div>
                <span className="text-yellow-500">5</span>

                <svg
                  width="6px"
                  height="6px"
                  viewBox="0 0 6 6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="3" cy="3" r="3" fill="#DBDBDB" />
                </svg>

                <span className="text-green-500">Verified</span>
              </div>

              <p className="mb-4 text-xl font-semibold">$234</p>

              <p className="mb-4 text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>

              <div className="mb-5 flex flex-wrap gap-2">
                <button className="inline-block rounded-md border border-transparent bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                  <i className="fa fa-shopping-cart mr-2"></i>
                  Add to cart
                </button>
              </div>

              <ul className="mb-5">
                <li className="mb-1">
                  {" "}
                  <b className="inline-block w-36 font-medium">Stock</b>
                </li>
                <li className="mb-1">
                  {" "}
                  <b className="inline-block w-36 font-medium">Category:</b>
                  <span className="text-gray-500">Electonics</span>
                </li>
                <li className="mb-1">
                  {" "}
                  <b className="inline-block w-36 font-medium">
                    Seller / Brand:
                  </b>
                  <span className="text-gray-500">Apple</span>
                </li>
              </ul>
            </main>
          </div>

          <NewReview />
          <hr />

          <div className="font-semibold">
            <h1 className="review-title mb-6 mt-10 text-2xl text-gray-500">
              Other Customers Reviews
            </h1>
            <Reviews />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
