import { Category } from "@prisma/client";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  protectedProcedureAdmin,
} from "~/server/api/trpc";
import { NewProductValidation } from "~/validations/product";

export const productRouter = createTRPCRouter({
  getAllProducts: protectedProcedureAdmin.query(async ({ ctx }) => {
    return await ctx.db.product.findMany({});
  }),
  addProductMutation: protectedProcedureAdmin
    .input(NewProductValidation)
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.product.create({
        data: {
          description: input.description,
          name: input.name,
          stock: input.stock,
          priceInCents: input.price / 100,
          imagePath: input.imageURL,
          category: input.category as Category,
        },
      });
    }),
  deleteProductMutation: protectedProcedureAdmin
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.product.delete({
        where: { id: input.id },
      });
    }),
});
