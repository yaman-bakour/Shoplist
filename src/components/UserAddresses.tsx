import React from "react";
import Link from "next/link";

const UserAddresses = () => {
  return (
    <Link href={`/address/`}>
      <div className="mb-5 gap-4">
        <figure className="align-center flex w-full cursor-pointer rounded-md bg-gray-100 p-4">
          <div className="mr-3">
            <span className="mt-2 flex h-12 w-12 items-center justify-center rounded-full bg-white text-yellow-500 shadow">
              <i className="fa fa-map-marker-alt"></i>
            </span>
          </div>
          <figcaption className="text-gray-600">
            <p>
              123 street <br /> Orlando, FL, 34456, US
              <br />
              Phone no: 1234568746
            </p>
          </figcaption>
        </figure>
      </div>
    </Link>
  );
};

export default UserAddresses;
