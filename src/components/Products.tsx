"use client";
import React, { useState } from "react";
import { api } from "~/trpc/react";
import { DataTable } from "./ui/DataTable";
import { columns } from "~/app/(autherized)/admin/products/columns";

const Products = () => {
  const { data: AllProducts, isLoading } =
    api.product.getAllProducts.useQuery();
  const [globalFilter, setGlobalFilter] = useState("");
  if (isLoading)
    return (
      <div className="w-full pt-10 text-center text-black">Loading...</div>
    );

  return AllProducts?.length != 0 ? (
    <div className="container mx-10 py-10">
      <DataTable
        columns={columns}
        /* @ts-ignore */
        data={AllProducts ?? []}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        searchColumn={"description"}
        searchPlaceholder="Search description"
      />
    </div>
  ) : (
    <div className="w-full pt-10 text-center text-black">
      There are no Products
    </div>
  );
};

export default Products;
