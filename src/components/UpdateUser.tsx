import React from "react";
import Sidebar from "./Sidebar";

const UpdateUser = () => {
  return (
    <>
      <section className="py-10">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="-mx-4 flex flex-col md:flex-row">
            <Sidebar />
            <main className="px-4 md:w-2/3 lg:w-3/4">
              <div
                style={{ maxWidth: "480px" }}
                className="mx-auto mb-20 mt-1 rounded bg-white p-4 md:p-7"
              >
                <form>
                  <h2 className="mb-5 text-2xl font-semibold">Update User</h2>

                  <div className="mb-4">
                    <label className="mb-1 block"> Full Name </label>
                    <input
                      className="w-full appearance-none rounded-md border border-gray-200 bg-gray-100 px-3 py-2 hover:border-gray-400 focus:border-gray-400 focus:outline-none"
                      type="text"
                      placeholder="Type your name"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="mb-1 block"> Email </label>
                    <input
                      className="w-full appearance-none rounded-md border border-gray-200 bg-gray-100 px-3 py-2 hover:border-gray-400 focus:border-gray-400 focus:outline-none"
                      type="text"
                      placeholder="Type your email"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="mb-1 block"> Role </label>
                    <div className="relative">
                      <select
                        className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-100 px-3 py-2 hover:border-gray-400 focus:border-gray-400 focus:outline-none"
                        name="category"
                        required
                      >
                        {["user", "admin"].map((role) => (
                          <option key={role} value={role}>
                            {role}
                          </option>
                        ))}
                      </select>
                      <i className="absolute inset-y-0 right-0 p-2 text-gray-400">
                        <svg
                          width="22"
                          height="22"
                          className="fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M7 10l5 5 5-5H7z"></path>
                        </svg>
                      </i>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="my-2 inline-block w-full rounded-md border border-transparent bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-700"
                  >
                    Update
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

export default UpdateUser;
