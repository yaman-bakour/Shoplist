"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "~/components/ui/Button";
import { ProductsType } from "~/types";

export const columns: ColumnDef<ProductsType>[] = [
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
    accessorKey: "price",
    header: ({ column }) => {
      return <div className="w-full text-center">Price</div>;
    },
    cell: ({ row }) => {
      //@ts-ignore
      const amount = parseInt(row.original.priceInCents);

      return <div className="text-center">{`${amount / 100} $`}</div>;
    },
  },
  {
    accessorKey: "description",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="mx-auto w-full"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Description
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const desc = String(row.getValue("description"));

      return <div className="text-center">{desc}</div>;
    },
    enableSorting: true,
  },
  {
    accessorKey: "category",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="mx-auto w-full"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Category
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const cat = String(row.getValue("category"));

      return <div className="text-center">{cat}</div>;
    },
    enableSorting: true,
  },
  {
    accessorKey: "stock",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="mx-auto w-full"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Left in stock
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const stock = String(row.getValue("stock"));

      return <div className="text-center">{stock}</div>;
    },
    enableSorting: true,
  },
];
