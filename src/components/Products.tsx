"use client";
import React, { useState } from "react";
import { api } from "~/trpc/react";
import { DataTable } from "./ui/DataTable";
import { columns } from "~/app/(autherized)/admin/products/columns";

const Products = () => {
  const { data: AllProducts } = api.product.getAllProducts.useQuery();
  const [globalFilter, setGlobalFilter] = useState("");
  return (
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
  );
};

export default Products;
