import React from "react";
import StarRatings from "react-star-ratings";

const NewReview = () => {
  return (
    <div>
      <hr className="my-4" />
      <h1 className="review-title my-5 text-2xl text-gray-500">Your Review</h1>

      <h3>Rating</h3>
      <div className="mb-4 mt-3">
        <div className="ratings">
          <StarRatings
            rating={5}
            starRatedColor="#ffb829"
            numberOfStars={5}
            name="rating"
          />
        </div>
      </div>
      <div className="mb-4 mt-5">
        <label className="mb-1 block"> Comments </label>
        <textarea
          rows={4}
          className="w-1/3 appearance-none rounded-md border border-gray-200 bg-gray-100 px-3 py-2 hover:border-gray-400 focus:border-gray-400 focus:outline-none"
          placeholder="Your review"
          name="description"
          required
        ></textarea>
      </div>

      <button className="mb-5 mt-3 inline-block w-1/3 rounded-md border border-transparent bg-yellow-500 px-4 py-2 text-center text-white hover:bg-yellow-600">
        Post Review
      </button>
    </div>
  );
};

export default NewReview;
