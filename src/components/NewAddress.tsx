import React from "react";

import { countries } from "countries-list";
import BreadCrumbs from "./BreadCrumbs";
import Sidebar from "./Sidebar";

const NewAddress = () => {
  const countriesList = Object.values(countries);

  return (
    <>
      <BreadCrumbs />
      <section className="py-10">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="-mx-4 flex flex-col md:flex-row">
            <Sidebar />
            <main className="px-4 md:w-2/3 lg:w-3/4">
              <div
                style={{ maxWidth: "480px" }}
                className="mx-auto mb-20 mt-1 rounded bg-white p-4 shadow-lg md:p-7"
              >
                <form>
                  <h2 className="mb-5 text-2xl font-semibold">
                    Add new Address
                  </h2>

                  <div className="mb-4 md:col-span-2">
                    <label className="mb-1 block"> Address* </label>
                    <input
                      className="w-full appearance-none rounded-md border border-gray-200 bg-gray-100 px-3 py-2 hover:border-gray-400 focus:border-gray-400 focus:outline-none"
                      type="text"
                      placeholder="Type your address"
                    />
                  </div>

                  <div className="grid gap-x-3 md:grid-cols-2">
                    <div className="mb-4 md:col-span-1">
                      <label className="mb-1 block"> City </label>
                      <input
                        className="w-full appearance-none rounded-md border border-gray-200 bg-gray-100 px-3 py-2 hover:border-gray-400 focus:border-gray-400 focus:outline-none"
                        type="text"
                        placeholder="Type your city"
                      />
                    </div>

                    <div className="mb-4 md:col-span-1">
                      <label className="mb-1 block"> State </label>
                      <input
                        className="w-full appearance-none rounded-md border border-gray-200 bg-gray-100 px-3 py-2 hover:border-gray-400 focus:border-gray-400 focus:outline-none"
                        type="text"
                        placeholder="Type state here"
                      />
                    </div>
                  </div>

                  <div className="grid gap-x-2 md:grid-cols-2">
                    <div className="mb-4 md:col-span-1">
                      <label className="mb-1 block"> ZIP code </label>
                      <input
                        className="w-full appearance-none rounded-md border border-gray-200 bg-gray-100 px-3 py-2 hover:border-gray-400 focus:border-gray-400 focus:outline-none"
                        type="number"
                        placeholder="Type zip code here"
                      />
                    </div>

                    <div className="mb-4 md:col-span-1">
                      <label className="mb-1 block"> Phone No </label>
                      <input
                        className="w-full appearance-none rounded-md border border-gray-200 bg-gray-100 px-3 py-2 hover:border-gray-400 focus:border-gray-400 focus:outline-none"
                        type="number"
                        placeholder="Type phone no here"
                      />
                    </div>
                  </div>

                  <div className="mb-4 md:col-span-2">
                    <label className="mb-1 block"> Country </label>
                    <select className="w-full appearance-none rounded-md border border-gray-200 bg-gray-100 px-3 py-2 hover:border-gray-400 focus:border-gray-400 focus:outline-none">
                      {countriesList.map((country) => (
                        <option key={country.name} value={country.name}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="my-2 inline-block w-full rounded-md border border-transparent bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-700"
                  >
                    Add
                  </button>
                </form>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewAddress;
