"use client";
import React from "react";
import Link from "next/link";
import { Input } from "./ui/Input";
import { api } from "~/trpc/react";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "./ui/Button";
import { CheckoutValidation } from "~/validations/order";
import { useGlobalContext } from "./AppSidebar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/Form";
import { RadioGroupItem, RadioGroup } from "./ui/RadioGroup";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Shipping = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const { data: Addresses } = api.address.getUserAddresses.useQuery({
    userId: session?.user.id ?? "",
  });
  const { mutate: CreateOrder } = api.order.CreateOrder.useMutation({
    onSuccess(data) {
      toast.success("Order Has Been Placed");
      CartContext?.setCart([]);
      router.push("/products");
    },
    onError() {
      toast.error("An Error Has Accurred");
    },
  });
  const CartContext = useGlobalContext();
  const form = useForm<z.infer<typeof CheckoutValidation>>({
    resolver: zodResolver(CheckoutValidation),
    defaultValues: {
      addressId: "",
    },
  });

  const onSubmit = (data: z.infer<typeof CheckoutValidation>) => {
    CreateOrder(data);
  };
  return (
    <div>
      <section className="bg-gray-50 py-10">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="flex flex-col gap-4 md:flex-row lg:gap-8">
            <main className="md:w-2/3">
              <article className="mb-5 rounded border border-gray-200 bg-white p-4 shadow-sm lg:p-6">
                <h2 className="mb-5 text-xl font-semibold">
                  Shipping information
                </h2>

                <h2 className="mb-5 text-lg font-semibold">Select Address</h2>
                <Form {...form}>
                  <form className="space-y-8">
                    <div className="mb-6 grid gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="addressId"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                              >
                                {Addresses?.map((address) => {
                                  return (
                                    <FormItem className="flex items-center space-y-0">
                                      <FormLabel className="flex cursor-pointer rounded-md border border-gray-200 bg-gray-50 p-3 hover:border-blue-400 hover:bg-blue-50">
                                        <FormControl>
                                          <RadioGroupItem value={address.id} />
                                        </FormControl>
                                        <p className="ml-2">
                                          <span>{address.address}</span>
                                          <small className="block text-sm text-gray-400">
                                            {address.city}, {address.state},{" "}
                                            {address.zip}
                                            <br />
                                            {address.country}
                                            <br />
                                            {address.phonenumber}
                                          </small>
                                        </p>
                                      </FormLabel>
                                    </FormItem>
                                  );
                                })}
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Link
                      href="/address/new"
                      className="inline-block rounded-md border border-gray-300 px-4 py-2 text-blue-600 hover:bg-gray-100"
                    >
                      Add new address
                    </Link>

                    <div className="mt-10 flex justify-end space-x-2">
                      <Link
                        href="/cart"
                        className="inline-block rounded-md border border-gray-200 bg-white px-5 py-2 text-gray-700 shadow-sm hover:bg-gray-100 hover:text-blue-600"
                      >
                        Back
                      </Link>
                      <Button
                        className="inline-block cursor-pointer rounded-md border border-transparent bg-green-600 px-5 py-2 text-white hover:bg-green-700"
                        onClick={() => {
                          if (CartContext && CartContext.cart.length !== 0) {
                            form.setValue(
                              "Products",
                              CartContext.cart.map((item) => ({
                                productId: item.productId,
                                quantity: item.quantity,
                                pricePerItem: item.priceInCents,
                              })),
                            );
                            void form.handleSubmit(onSubmit)();
                          } else {
                            toast.error("Please Add Items To Cart");
                          }
                        }}
                        type="button"
                      >
                        Checkout
                      </Button>
                    </div>
                  </form>
                </Form>
              </article>
            </main>
            <aside className="md:w-1/3">
              <article className="text-gray-600" style={{ maxWidth: "350px" }}>
                <h2 className="mb-3 text-lg font-semibold">Summary</h2>
                {CartContext?.cart.map((item) => {
                  return (
                    <div>
                      {item.name} : {item.quantity} X {item.priceInCents / 100}$
                      = {(item.quantity * item.priceInCents) / 100}$
                    </div>
                  );
                })}
                <li className="mt-3 flex justify-between border-t pt-3">
                  <span>Total Amount:</span>
                  <span className="font-bold text-gray-900">
                    {CartContext
                      ? CartContext.cart.reduce((total, item) => {
                          return total + item.priceInCents * item.quantity;
                        }, 0) / 100
                      : 0}
                    $
                  </span>
                </li>
              </article>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shipping;
