import React from "react";
import StarRatings from "react-star-ratings";
// TODO

const Filters = () => {
  // let queryParams;

  // function checkHandler(checkBoxType, checkBoxValue) {
  //   if (typeof window !== "undefined") {
  //     queryParams = new URLSearchParams(window.location.search);
  //   }

  //   if (typeof window !== "undefined") {
  //     const value = queryParams.get(checkBoxType);
  //     if (checkBoxValue === value) return true;
  //     return false;
  //   }
  // }

  return (
    <aside className="px-4 md:w-1/3 lg:w-1/4">
      <a
        className="mb-5 inline-block  w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-center text-lg text-gray-700 shadow-sm hover:bg-gray-100 hover:text-blue-600 md:hidden"
        href="#"
      >
        Filter by
      </a>
      <div className="hidden rounded border border-gray-200 bg-white px-6 py-4 shadow-sm md:block">
        <h3 className="mb-2 font-semibold">Price ($)</h3>
        <div className="grid gap-x-2 md:grid-cols-3">
          <div className="mb-4">
            <input
              name="min"
              className="w-full appearance-none rounded-md border border-gray-200 bg-gray-100 px-3 py-2 hover:border-gray-400 focus:border-gray-400 focus:outline-none"
              type="number"
              placeholder="Min"
            />
          </div>

          <div className="mb-4">
            <input
              name="max"
              className="w-full appearance-none rounded-md border border-gray-200 bg-gray-100 px-3 py-2 hover:border-gray-400 focus:border-gray-400 focus:outline-none"
              type="number"
              placeholder="Max"
            />
          </div>

          <div className="mb-4">
            <button className="inline-block w-full rounded-md border border-transparent bg-blue-600 px-1 py-2 text-center text-white hover:bg-blue-700">
              Go
            </button>
          </div>
        </div>
      </div>

      <div className="hidden rounded border border-gray-200 bg-white px-6 py-4 shadow-sm md:block">
        <h3 className="mb-2 font-semibold">Category</h3>

        {/* <ul className="space-y-1">
          <li>
            <label className="flex items-center">
              <input
                name="category"
                type="checkbox"
                value="Electronics"
                className="h-4 w-4"
                defaultChecked={checkHandler("category", "Electronics")}
              />
              <span className="ml-2 text-gray-500"> Electronics </span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input
                name="category"
                type="checkbox"
                value="Laptops"
                className="h-4 w-4"
                defaultChecked={checkHandler("category", "Laptops")}
              />
              <span className="ml-2 text-gray-500"> Laptops </span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input
                name="category"
                type="checkbox"
                value="Toys"
                className="h-4 w-4"
                defaultChecked={checkHandler("category", "Toys")}
              />
              <span className="ml-2 text-gray-500"> Toys </span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input
                name="category"
                type="checkbox"
                value="Office"
                className="h-4 w-4"
                defaultChecked={checkHandler("category", "Office")}
              />
              <span className="ml-2 text-gray-500"> Office </span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input
                name="category"
                type="checkbox"
                value="Beauty"
                className="h-4 w-4"
                defaultChecked={checkHandler("category", "Beauty")}
              />
              <span className="ml-2 text-gray-500"> Beauty </span>
            </label>
          </li>
        </ul> */}

        <hr className="my-4" />

        <h3 className="mb-2 font-semibold">Ratings</h3>
        <ul className="space-y-1">
          <li>
            {[5, 4, 3, 2, 1].map((rating) => (
              <label key={rating} className="flex items-center">
                {/* <input
                  name="ratings"
                  type="checkbox"
                  value={rating}
                  className="h-4 w-4"
                  defaultChecked={checkHandler("ratings", `${rating}`)}
                /> */}
                <span className="ml-2 text-gray-500">
                  {" "}
                  <StarRatings
                    rating={5}
                    starRatedColor="#ffb829"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="2px"
                    name="rating"
                  />{" "}
                </span>
              </label>
            ))}
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Filters;
