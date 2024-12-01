"use client";
import React from "react";
import { useForm } from "react-hook-form";

import { countries } from "countries-list";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/Form";
import { Button } from "./ui/Button";
import { Card, CardContent } from "./ui/Card";
import { Input } from "./ui/Input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddressValidation } from "~/validations/address";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/Command";
import { cn } from "~/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { api } from "~/trpc/react";
import { toast } from "sonner";

const NewAddress = () => {
  const { mutate: addAddressMutation } = api.address.createAddress.useMutation({
    onSuccess() {
      toast.success("Address Added");
    },
    onError() {
      toast.error("An Error Has Accurred");
    },
  });
  const countriesList = Object.values(countries);
  const form = useForm<z.infer<typeof AddressValidation>>({
    resolver: zodResolver(AddressValidation),
    defaultValues: {
      address: "",
      city: "",
      country: "",
      phonenumber: undefined,
      state: "",
      zip: "",
    },
  });

  const onSubmit = (data: z.infer<typeof AddressValidation>) => {
    addAddressMutation(data);
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
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="address">Address</FormLabel>
                  <FormControl>
                    <Input
                      id="address"
                      placeholder="Enter your Address"
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
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="city">City</FormLabel>
                  <FormControl>
                    <Input
                      id="city"
                      placeholder="Enter your city"
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
              name="phonenumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="phonenumber">Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      id="phonenumber"
                      placeholder="Enter your phonenumber"
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
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="state">State</FormLabel>
                  <FormControl>
                    <Input
                      id="state"
                      placeholder="Enter your state"
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
              name="zip"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="zip">Zip Code</FormLabel>
                  <FormControl>
                    <Input
                      id="zip"
                      placeholder="Enter your zip"
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
              name="country"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Country</FormLabel>
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
                            ? countriesList.find(
                                (language) => language.name === field.value,
                              )?.name
                            : "Select Country"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Search country..." />
                        <CommandList>
                          <CommandEmpty>No countries found.</CommandEmpty>
                          <CommandGroup>
                            {countriesList.map((language) => (
                              <CommandItem
                                value={language.name}
                                key={language.name}
                                onSelect={() => {
                                  form.setValue("country", language.name);
                                }}
                              >
                                {language.name}
                                <Check
                                  className={cn(
                                    "ml-auto",
                                    language.name === field.value
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

export default NewAddress;
