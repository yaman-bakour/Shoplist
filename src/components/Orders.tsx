"use client";
import React, { useState } from "react";
import { api } from "~/trpc/react";
import { DataTable } from "./ui/DataTable";
import { columns } from "~/app/(autherized)/admin/orders/columns";

const Orders = () => {
  const { data: AllOrders, isLoading } = api.order.getAllOrders.useQuery();
  const [globalFilter, setGlobalFilter] = useState("");
  if (isLoading)
    return (
      <div className="w-full pt-10 text-center text-black">Loading...</div>
    );
  return AllOrders?.length != 0 ? (
    <div className="container mx-10 py-10">
      <DataTable
        columns={columns}
        /* @ts-ignore */
        data={AllOrders ?? []}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        searchColumn={"Ordered by"}
        searchPlaceholder="Search user"
      />
    </div>
  ) : (
    <div className="w-full pt-10 text-center text-black">
      There are no Orders
    </div>
  );
};

export default Orders;
