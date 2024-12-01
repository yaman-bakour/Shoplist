import React from "react";

const UpdateProfile = () => {
  return (
    <>
      <section className="py-10">
        <div className="container mx-auto max-w-screen-xl px-4">
          <main className="px-4 md:w-2/3 lg:w-3/4">
            <div
              style={{ maxWidth: "480px" }}
              className="mx-auto mb-20 mt-1 rounded bg-white p-4 md:p-7"
            >
              <form>
                <h2 className="mb-5 text-2xl font-semibold">Update Profile</h2>

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
                  <label className="mb-1 block"> Avatar </label>
                  <div className="mb-4 flex flex-col md:flex-row">
                    <div className="mb-4 mt-4 flex cursor-pointer items-center space-x-3 md:w-1/5 lg:w-1/4">
                      <img
                        className="h-14 w-14 rounded-full"
                        src={"/logo192.png"}
                      />
                    </div>
                    <div className="md:w-2/3 lg:w-80">
                      <input
                        className="form-control m-0 mt-6 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-2 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                        type="file"
                        id="formFile"
                      />
                    </div>
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
      </section>
    </>
  );
};

export default UpdateProfile;
