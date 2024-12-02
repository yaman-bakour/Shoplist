"use client";
import React, { useState } from "react";
import { api } from "~/trpc/react";
import { DataTable } from "./ui/DataTable";
import { columns } from "~/app/(autherized)/admin/orders/columns";

const Orders = () => {
  const { data: AllOrders } = api.order.getAllOrders.useQuery();
  const [globalFilter, setGlobalFilter] = useState("");
  return (
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
  );
};

export default Orders;
