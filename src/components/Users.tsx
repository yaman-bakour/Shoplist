"use client";
import React, { useState } from "react";
import { api } from "~/trpc/react";
import { DataTable } from "./ui/DataTable";
import { columns } from "~/app/(autherized)/admin/users/columns";

const Users = () => {
  const { data: AllUsers, isLoading } = api.user.getAllUsers.useQuery();
  const [globalFilter, setGlobalFilter] = useState("");
  if (isLoading)
    return (
      <div className="w-full pt-10 text-center text-black">Loading...</div>
    );
  return AllUsers?.length != 0 ? (
    <div className="container mx-10 py-10">
      <DataTable
        columns={columns}
        /* @ts-ignore */
        data={AllUsers ?? []}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        searchColumn={"name"}
        searchPlaceholder="Search name"
      />
    </div>
  ) : (
    <div className="w-full pt-10 text-center text-black">
      There are no Orders
    </div>
  );
};

export default Users;
