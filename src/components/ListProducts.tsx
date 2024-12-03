"use client";
import React, { useRef, useState } from "react";
import Filters from "./Filters";
import { api } from "~/trpc/react";
import { Category } from "@prisma/client";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/Card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";
import { Button } from "./ui/Button";
import { useGlobalContext } from "./AppSidebar";

const ListProducts = () => {
  const AllCategories = Object.values(Category);
  const [priceRange, setPriceRange] = useState<{
    min: number | undefined;
    max: number | undefined;
  }>({ min: undefined, max: undefined });
  const [category, setCategory] = useState<Category | undefined>();

  const min = useRef<HTMLInputElement>(null);
  let max = useRef<HTMLInputElement>(null);
  const { data: AllProducts, isLoading } = api.product.getAllProducts.useQuery({
    Category: category,
    min: priceRange.min,
    max: priceRange.max,
  });
  const CartContext = useGlobalContext();

  console.log(CartContext?.cart);
  return (
    <>
      <section className="py-12">
        <div className="mx-auto h-full max-w-screen-xl px-4">
          <div className="-mx-4 flex h-full flex-col md:flex-row">
            <Filters
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              category={category}
              setCategory={setCategory}
              allCategories={AllCategories}
              max={max}
              min={min}
            />
            <div className="grid-cols-2 gap-8 xl:grid">
              {isLoading ? (
                <>Loading...</>
              ) : AllProducts?.length != 0 && AllProducts ? (
                AllProducts.map((product) => {
                  return (
                    <Card className="mb-8 w-full" key={product.id}>
                      <div className="flex">
                        <Avatar className="my-auto ml-4 h-40 w-40">
                          <AvatarImage
                            src={product.imagePath}
                            alt={product.name}
                          />
                          <AvatarFallback className="text-4xl">
                            {product.name?.split(" ").map((n) => {
                              return n.charAt(0).toUpperCase();
                            })}
                          </AvatarFallback>
                        </Avatar>

                        <CardContent>
                          <CardHeader className="pl-0 text-2xl">
                            {product.name}
                            <br />
                            Category : {product.category}
                          </CardHeader>
                          <CardDescription>
                            Price : {product.priceInCents / 100} $
                            <br />
                            {product.description}
                            <br />
                            <Button
                              onClick={() => {
                                CartContext?.setCart((prev) => {
                                  const isInCart = prev.filter(
                                    (item) => item.productId === product.id,
                                  )[0]
                                    ? true
                                    : false;
                                  if (isInCart) return prev;
                                  else
                                    return [
                                      ...prev,
                                      {
                                        productId: product.id,
                                        quantity: 1,
                                        name: product.name,
                                        priceInCents: product.priceInCents,
                                      },
                                    ];
                                });
                              }}
                              className={`mt-4 ${CartContext?.cart.filter((item) => item.productId === product.id).length === 0 ? " bg-blue-500 hover:bg-blue-600" : "bg-green-500 hover:bg-green-600"}`}
                            >
                              {CartContext?.cart.filter(
                                (item) => item.productId === product.id,
                              ).length === 0
                                ? "Add To Cart"
                                : "Added To Cart"}
                            </Button>
                          </CardDescription>
                        </CardContent>
                      </div>
                    </Card>
                  );
                })
              ) : (
                <>There are no products</>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListProducts;
