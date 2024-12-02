"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "~/components/ui/Button";
import { UsersType } from "~/types";

export const columns: ColumnDef<UsersType>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="mx-auto w-full"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const name = String(row.getValue("name"));

      return <div className="text-center">{name}</div>;
    },
    enableSorting: true,
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="mx-auto w-full"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const email = String(row.getValue("email"));

      return <div className="text-center">{email}</div>;
    },
    enableSorting: true,
  },
  {
    accessorKey: "Role",
    // @ts-ignore
    accessorFn: (row) => row.UserRole,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="mx-auto w-full"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Role
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      // @ts-ignore
      const UserRole = String(row.original.UserRole);

      return <div className="text-center">{UserRole}</div>;
    },
    enableSorting: true,
  },
];
