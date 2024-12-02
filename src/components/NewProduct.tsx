"use client";
import React from "react";
import { Card, CardContent } from "./ui/Card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/Form";
import { toast } from "sonner";
import { api } from "~/trpc/react";
import { useForm } from "react-hook-form";
import { NewProductValidation } from "~/validations/product";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "./ui/Input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/Button";
import { cn } from "~/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/Command";
import { Category } from "@prisma/client";
import { Textarea } from "./ui/Textarea";

const NewProduct = () => {
  const { mutate: addProductMutation } =
    api.product.addProductMutation.useMutation({
      onSuccess() {
        toast.success("Product Added");
      },
      onError() {
        toast.error("An Error Has Accurred");
      },
    });
  const form = useForm<z.infer<typeof NewProductValidation>>({
    resolver: zodResolver(NewProductValidation),
    defaultValues: {
      category: undefined,
      description: "",
      imageURL: "",
      name: "",
      price: undefined,
      stock: undefined,
    },
  });

  const onSubmit = (data: z.infer<typeof NewProductValidation>) => {
    addProductMutation(data);
  };

  return (
    <div className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <CardContent className="space-y-4">
          <h2 className="text-center text-2xl font-bold text-gray-800">
            Add New Address
          </h2>
          <Form {...form}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <FormControl>
                    <Input
                      id="name"
                      placeholder="Enter Product name"
                      className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="description">Description</FormLabel>
                  <FormControl>
                    <Textarea
                      id="description"
                      placeholder="Enter description"
                      className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imageURL"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="imageURL">Image URL</FormLabel>
                  <FormControl>
                    <Input
                      id="imageURL"
                      placeholder="Enter Online imageURL"
                      className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="price">Price</FormLabel>
                  <FormControl>
                    <Input
                      id="price"
                      placeholder="Enter Price"
                      className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Category</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-[200px] justify-between",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value
                            ? Object.values(Category).find(
                                (language) => language === field.value,
                              )
                            : "Select Category"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Search category..." />
                        <CommandList>
                          <CommandEmpty>No category found.</CommandEmpty>
                          <CommandGroup>
                            {Object.values(Category).map((language) => (
                              <CommandItem
                                value={language}
                                key={language}
                                onSelect={() => {
                                  form.setValue("category", language);
                                }}
                              >
                                {language}
                                <Check
                                  className={cn(
                                    "ml-auto",
                                    language === field.value
                                      ? "opacity-100"
                                      : "opacity-0",
                                  )}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="stock">Stock</FormLabel>
                  <FormControl>
                    <Input
                      id="stock"
                      placeholder="Enter how many you have in stock"
                      className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="focus:shadow-outline rounded-md bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
              onClick={form.handleSubmit(onSubmit)}
            >
              Add
            </Button>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewProduct;
