"use client";
import React, { useState } from "react";
import { api } from "~/trpc/react";
import { DataTable } from "./ui/DataTable";
import { columns } from "~/app/(autherized)/admin/users/columns";

const Users = () => {
  const { data: AllUsers } = api.user.getAllUsers.useQuery();
  const [globalFilter, setGlobalFilter] = useState("");
  return (
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
  );
};

export default Users;
