import React from "react";
import Sidebar from "./Sidebar";
import Link from "next/link";

const Products = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="-mx-4 flex flex-col md:flex-row">
          <Sidebar />
          <main className="px-4 md:w-2/3 lg:w-3/4">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <h1 className="my-5 ml-4 text-3xl font-bold">12 Products</h1>
              <table className="w-full text-left text-sm">
                <thead className="text-l uppercase text-gray-700">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Stock
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="px-6 py-2">Product name</td>
                    <td className="px-6 py-2">12</td>
                    <td className="px-6 py-2">$456</td>
                    <td className="px-6 py-2">
                      <div>
                        <Link
                          href={`/admin/products/upload_images`}
                          className="mr-2 inline-block cursor-pointer rounded-md border border-gray-200 bg-white px-2 py-2 text-green-600 shadow-sm hover:bg-gray-100"
                        >
                          <i className="fa fa-image" aria-hidden="true"></i>
                        </Link>

                        <Link
                          href={`/admin/products`}
                          className="mr-2 inline-block cursor-pointer rounded-md border border-gray-200 bg-white px-2 py-2 text-yellow-600 shadow-sm hover:bg-gray-100"
                        >
                          <i className="fa fa-pencil" aria-hidden="true"></i>
                        </Link>
                        <a className="inline-block cursor-pointer rounded-md border border-gray-200 bg-white px-2 py-2 text-red-600 shadow-sm hover:bg-gray-100">
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default Products;
