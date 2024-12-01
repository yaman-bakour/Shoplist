import { countries } from "countries-list";
import { z } from "zod";
const countriesList = Object.values(countries).map(
  (country) => country.name,
) as readonly String[];
export const AddressValidation = z.object({
  address: z.string().min(1, { message: "This field is required" }),
  city: z.string().min(1, { message: "This field is required" }),
  state: z.string().min(1, { message: "This field is required" }),
  zip: z.string().min(1, { message: "This field is required" }),
  phonenumber: z
    .number({
      coerce: true,
      invalid_type_error: "Please enter a valid Number",
    })
    .refine((val) => String(val).length >= 10, {
      message: "Phonenumber must be at least 10 digits",
    }),
  country: z.string().refine((val) => countriesList.includes(val), {
    message: "Invalid Country",
  }),
});
