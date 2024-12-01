import React from "react";

const UploadImages = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto max-w-screen-xl px-4">
        <main className="px-4 md:w-2/3 lg:w-3/4">
          <div
            style={{ maxWidth: "480px" }}
            className="mx-auto mb-20 mt-1 rounded bg-white p-4 shadow-lg md:p-7"
          >
            <form>
              <h2 className="mb-3 text-2xl font-semibold">
                Upload Product Images
              </h2>

              <div className="mb-4 flex flex-col md:flex-row">
                <div className="w-full">
                  <input
                    className="form-control m-0 mt-8 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-2 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                    type="file"
                    id="formFile"
                    multiple
                  />
                </div>
              </div>

              <div className="my-5 grid grid-cols-6 gap-2">
                <img
                  src={"/logo192.png"}
                  alt="Preview"
                  className="border-gray col-span-1 h-full w-full rounded border-2 object-contain p-2 shadow"
                  width="50"
                  height="50"
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
  );
};

export default UploadImages;
