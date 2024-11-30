import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="px-4 md:w-1/3 lg:w-1/4">
      <ul className="sidebar">
        <>
          <li>
            {" "}
            <Link
              href="/admin/products/new"
              className="block rounded-md px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500"
            >
              New Product <span className="text-red-500">(Admin)</span>
            </Link>
          </li>

          <li>
            {" "}
            <Link
              href="/admin/products"
              className="block rounded-md px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500"
            >
              All Products <span className="text-red-500">(Admin)</span>
            </Link>
          </li>

          <li>
            {" "}
            <Link
              href="/admin/orders"
              className="block rounded-md px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500"
            >
              All Orders <span className="text-red-500">(Admin)</span>
            </Link>
          </li>

          <li>
            {" "}
            <Link
              href="/admin/users"
              className="block rounded-md px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500"
            >
              All Users <span className="text-red-500">(Admin)</span>
            </Link>
          </li>

          <hr />
        </>

        <li>
          {" "}
          <Link
            href="/profile"
            className="block rounded-md px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500"
          >
            Your Profile
          </Link>
        </li>
        <li>
          {" "}
          <Link
            href="/orders"
            className="block rounded-md px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500"
          >
            Orders
          </Link>
        </li>
        <li>
          {" "}
          <Link
            // TODO : fix href
            href="/profile/"
            className="block rounded-md px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500"
          >
            Update Profile
          </Link>
        </li>

        <li>
          {" "}
          <a className="hover:text-white-500 block cursor-pointer rounded-md px-3 py-2 text-red-800 hover:bg-red-100">
            Logout
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
