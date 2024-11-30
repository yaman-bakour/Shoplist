import React from "react";
import Link from "next/link";
import Search from "./Search";

const Header = () => {
  return (
    <header className="border-b bg-white py-2">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="flex flex-wrap items-center">
          <div className="mr-5 flex-shrink-0">
            <a href="/">
              <img
                src="logo192.png"
                style={{ height: "50px", width: "60px" }}
                height="40"
                width="120"
                alt="BuyItNow"
              />
            </a>
          </div>
          <Search />

          <div className="ml-auto flex items-center space-x-2">
            <Link
              href="/cart"
              className="inline-block rounded-md border border-gray-200 bg-white px-3 py-2 text-center text-gray-700 shadow-sm hover:border-gray-300 hover:bg-gray-100"
            >
              <i className="fa fa-shopping-cart w-5 text-gray-400"></i>
              <span className="ml-1 hidden lg:inline">
                Cart (<b>0</b>)
              </span>
            </Link>
            <Link
              href="/signin"
              className="inline-block rounded-md border border-gray-200 bg-white px-3 py-2 text-center text-gray-700 shadow-sm hover:border-gray-300 hover:bg-gray-100"
            >
              <i className="fa fa-user w-5 text-gray-400"></i>
              <span className="ml-1 hidden lg:inline">Sign in</span>
            </Link>
            <Link href="/profile">
              <div className="mb-4 mt-4 flex cursor-pointer items-center space-x-3">
                <img className="h-10 w-10 rounded-full" src={"logo192.png"} />
                <div className="space-y-1 font-medium">
                  <p>
                    Ghulam
                    <time className="block text-sm text-gray-500 dark:text-gray-400">
                      test@gmail.com
                    </time>
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="ml-2 lg:hidden">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-white p-3 text-black hover:bg-gray-200 hover:text-gray-800"
            >
              <span className="sr-only">Open menu</span>
              <i className="fa fa-bars fa-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
