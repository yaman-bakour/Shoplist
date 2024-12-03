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
import { Button } from "./ui/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/Dialog";
const ListOrders = () => {
  const { data: session } = useSession();
  const { data: Orders, isLoading } = api.order.getUserOrders.useQuery({
    userId: session?.user.id ?? "",
  });

  if (isLoading)
    return (
      <div className="w-full pt-10 text-center text-black">Loading...</div>
    );

  return Orders?.length != 0 ? (
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
              <Dialog>
                <DialogTrigger className="mt-4 rounded-md bg-blue-400 px-3 py-1 text-white hover:bg-blue-500">
                  Details
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Purchesed Products</DialogTitle>
                  </DialogHeader>
                  <div className="h-72 overflow-y-scroll">
                    {order.OrderProducts.map((product) => {
                      return (
                        <div className="bg-gray-200 p-2 text-black">
                          Name : {product.Product.name}
                          <br />
                          Number Of Items : {product.numberOfItems}
                        </div>
                      );
                    })}
                  </div>
                </DialogContent>
              </Dialog>
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
  ) : (
    <div className="w-full pt-10 text-center text-black">
      There are no orders
    </div>
  );
};

export default ListOrders;
