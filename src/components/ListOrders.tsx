"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import { api } from "~/trpc/react";
import { useSession } from "next-auth/react";
const ListOrders = () => {
  const { data: session } = useSession();
  const { data: Orders } = api.order.getUserOrders.useQuery({
    userId: session?.user.id ?? "",
  });
  return (
    <div className="grid w-full grid-cols-3 gap-10 p-10">
      {Orders?.map((order) => (
        <Card className="h-fit">
          <CardContent>
            <CardHeader>
              <CardTitle>
                Order total : {order.pricePaidInCents / 100}
              </CardTitle>
              <CardDescription>Order ID : {order.id}</CardDescription>
            </CardHeader>
            <CardContent>
              Ordered At : {order.createdAt.toLocaleString()}
            </CardContent>
            <CardFooter>
              <div
                className={`${order.completed ? "text-green-500" : "text-red-500"}`}
              >{`${order.completed ? "Completed" : "Not Completed"}`}</div>
            </CardFooter>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ListOrders;
