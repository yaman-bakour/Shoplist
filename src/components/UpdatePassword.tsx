import React from "react";

const UpdatePassword = () => {
  return (
    <>
      <section className="py-10">
        <div className="container mx-auto max-w-screen-xl px-4">
          <main className="px-4 md:w-2/3 lg:w-3/4">
            <div
              style={{ maxWidth: "480px" }}
              className="mx-auto mb-20 mt-5 rounded bg-white p-4 md:p-7"
            >
              <form>
                <h2 className="mb-5 text-2xl font-semibold">Update Password</h2>

                <div className="mb-4">
                  <label className="mb-1 block"> Current Password </label>
                  <input
                    className="w-full appearance-none rounded-md border border-gray-200 bg-gray-100 px-3 py-2 hover:border-gray-400 focus:border-gray-400 focus:outline-none"
                    type="password"
                    placeholder="Type your password"
                    minLength={6}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="mb-1 block"> New Password </label>
                  <input
                    className="w-full appearance-none rounded-md border border-gray-200 bg-gray-100 px-3 py-2 hover:border-gray-400 focus:border-gray-400 focus:outline-none"
                    type="password"
                    placeholder="Type your password"
                    minLength={6}
                    required
                  />
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
      </section>
    </>
  );
};

export default UpdatePassword;
