"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "~/components/ui/Button";
import { OrdersType } from "~/types";

export const columns: ColumnDef<OrdersType>[] = [
  {
    accessorKey: "Ordered by",
    // @ts-ignore
    accessorFn: (row) => row.User.name,
    header: () => {
      return <div className="text-center">Ordered by</div>;
    },
    cell: ({ row }) => {
      /* @ts-ignore */
      const name = String(row.original.User.name);

      return <div className="text-center">{name}</div>;
    },
  },
  {
    accessorKey: "Price Paid",
    header: () => {
      return <div className="text-center">Price paid</div>;
    },
    cell: ({ row }) => {
      //@ts-ignore
      const amount = parseInt(row.original.pricePaidInCents);

      return <div className="text-center">{`${amount / 100} $`}</div>;
    },
  },
  {
    accessorKey: "completed",
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
      //@ts-ignore
      const received = row.original.completed ? "yes" : "no";

      return <div className="text-center">{received}</div>;
    },
    enableSorting: true,
  },
];
