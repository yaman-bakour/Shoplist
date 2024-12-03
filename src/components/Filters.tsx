"use client";
import { Category } from "@prisma/client";
import React, { Dispatch, Ref, SetStateAction } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/Button";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/Command";
import { cn } from "~/lib/utils";
import { Input } from "./ui/Input";

interface priceType {
  min: number | undefined;
  max: number | undefined;
}
interface Props {
  priceRange: priceType;
  setPriceRange: Dispatch<SetStateAction<priceType>>;
  category: Category | undefined;
  setCategory: Dispatch<SetStateAction<Category | undefined>>;
  allCategories: Category[];
  min: React.RefObject<HTMLInputElement>;
  max: React.RefObject<HTMLInputElement>;
}

const Filters = ({
  category,
  priceRange,
  setCategory,
  setPriceRange,
  allCategories,
  max,
  min,
}: Props) => {
  return (
    <div className="h-full w-[400px] px-4">
      <div className="hidden rounded border border-gray-200 bg-white px-6 py-4 shadow-sm md:block">
        <p className="mb-4 text-2xl font-bold">Filter by:</p>
        <h3 className="mb-2 font-semibold">Price ($)</h3>
        <div className="grid gap-x-2 md:grid-cols-3">
          <div className="mb-4">
            <Input
              type="number"
              ref={min}
              className="bg-gray-200"
              placeholder="min"
            />
          </div>

          <div className="mb-4">
            <Input
              type="number"
              ref={max}
              className="bg-gray-200"
              placeholder="max"
            />
          </div>

          <div className="mb-4">
            <Button
              className="inline-block w-full rounded-md border border-transparent bg-blue-600 px-1 py-2 text-center text-white hover:bg-blue-700"
              onClick={() =>
                setPriceRange({
                  max: parseFloat(max.current?.value ? max.current.value : "0"),
                  min: parseFloat(min.current?.value ? min.current.value : "0"),
                })
              }
            >
              Go
            </Button>
          </div>
        </div>
      </div>

      <div className="hidden rounded border border-gray-200 bg-white px-6 py-4 shadow-sm md:block">
        <h3 className="mb-2 font-semibold">Category</h3>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              className={cn("w-[200px] justify-between")}
            >
              {category
                ? allCategories.find((language) => language === category)
                : "Select Category"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search country..." />
              <CommandList>
                <CommandEmpty>No countries found.</CommandEmpty>
                <CommandGroup>
                  {allCategories.map((language) => (
                    <CommandItem
                      value={language}
                      key={language}
                      onSelect={() => {
                        setCategory(language);
                      }}
                    >
                      {language}
                      <Check
                        className={cn(
                          "ml-auto",
                          language === category ? "opacity-100" : "opacity-0",
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Filters;
