import Link from "next/link";
import React from "react";

const BreadCrumbs = () => {
  return (
    <section className="bg-blue-100 py-5 sm:py-7">
      <div className="container mx-auto max-w-screen-xl px-4">
        <ol className="inline-flex flex-wrap items-center space-x-1 text-gray-600 md:space-x-3">
          <li className="inline-flex items-center">
            <Link href="/" className="text-gray-600 hover:text-blue-600">
              Breadcrumbs
            </Link>
            <i className="fa fa-chevron-right ml-3 text-gray-400"></i>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default BreadCrumbs;
