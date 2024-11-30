import React from "react";
import OrderItem from "./OrderItem";
import Sidebar from "~/components/Sidebar";

const ListOrders = () => {
  return (
    <>
      <section className="py-10">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="-mx-4 flex flex-col md:flex-row">
            <Sidebar />
            <main className="px-4 md:w-2/3 lg:w-3/4">
              <h3 className="mb-5 text-xl font-semibold">Your Orders</h3>
              <OrderItem />
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListOrders;
