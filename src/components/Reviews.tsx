import React from "react";
import StarRatings from "react-star-ratings";

const Reviews = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      <article className="mb-5 block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md">
        <div className="mb-4 flex items-center space-x-4">
          <img
            className="h-10 w-10 rounded-full"
            src={"/logo192.png"}
            alt="user"
          />
          <div className="space-y-1 font-medium">
            <p>
              Ghulam
              <time className="block text-sm text-gray-500 dark:text-gray-400">
                Posted on: 12-12-2023
              </time>
            </p>
          </div>
        </div>

        <div className="mb-2 flex flex-wrap items-center space-x-2">
          <div className="ratings">
            <StarRatings
              rating={5}
              starRatedColor="#ffb829"
              numberOfStars={5}
              starDimension="18px"
              starSpacing="1px"
              name="rating"
            />
          </div>
          <span className="text-yellow-500">{5}</span>
        </div>

        <p className="mb-2 text-xl font-light text-gray-500 dark:text-gray-400">
          This is user review
        </p>
      </article>
    </div>
  );
};

export default Reviews;
