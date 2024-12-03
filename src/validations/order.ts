import { z } from "zod";

export const CheckoutValidation = z.object({
  addressId: z.string().min(1, { message: "Address is required" }),
  Products: z.array(
    z.object({
      productId: z.string(),
      quantity: z.number(),
      pricePerItem: z.number(),
    }),
  ),
});
