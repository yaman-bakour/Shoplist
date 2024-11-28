import React from "react";

const Search = () => {
  return (
    <form className="order-last mt-5 flex w-full flex-nowrap items-center md:order-none md:mt-0 md:w-2/4 lg:w-2/4">
      <input
        className="mr-2 flex-grow appearance-none rounded-md border border-gray-200 bg-gray-100 px-3 py-2 hover:border-gray-400 focus:border-gray-400 focus:outline-none"
        type="text"
        placeholder="Enter your keyword"
        required
      />
      <button
        type="button"
        className="inline-block rounded-md border border-transparent bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
