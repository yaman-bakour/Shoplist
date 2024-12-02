import { z } from "zod";
import { Category } from "@prisma/client";
export const NewProductValidation = z.object({
  name: z.string().min(1, { message: "This field is required" }),
  description: z
    .string()
    .min(50, { message: "Description must be at least 50 characters" }),
  price: z.number({
    coerce: true,
    invalid_type_error: "Please enter a valid number",
  }),
  imageURL: z.string().url({ message: "Please enter a valid URL" }),
  category: z.string().refine((val) => val in Category),
  stock: z.number({
    coerce: true,
    invalid_type_error: "Please enter a valid number",
  }),
});
