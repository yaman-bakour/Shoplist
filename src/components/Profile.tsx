import React from "react";
import Sidebar from "./Sidebar";
import UserAddresses from "./UserAddresses";
import Link from "next/link";

const Profile = () => {
  return (
    <>
      <section className="py-10">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="-mx-4 flex flex-col md:flex-row">
            <Sidebar />
            <main className="px-4 md:w-2/3 lg:w-3/4">
              <figure className="flex items-start sm:items-center">
                <div className="relative">
                  <img
                    className="mr-4 h-16 w-16 rounded-full"
                    src={"/logo192.png"}
                    alt={"user name"}
                  />
                </div>
                <figcaption>
                  <h5 className="text-lg font-semibold">Ghulam</h5>
                  <p>
                    <b>Email:</b> ghulam@gmail.com | <b>Joined On:</b>
                    2023-12-24
                  </p>
                </figcaption>
              </figure>

              <hr className="my-4" />

              <UserAddresses />

              <Link href="/address/new">
                <button className="inline-block rounded-md border border-gray-300 px-4 py-2 text-blue-600 hover:bg-gray-100">
                  <i className="fa fa-plus mr-1"></i> Add new address
                </button>
              </Link>

              <hr className="my-4" />
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
