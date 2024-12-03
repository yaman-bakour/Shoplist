import { Category } from "@prisma/client";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  protectedProcedureAdmin,
} from "~/server/api/trpc";
import { NewProductValidation } from "~/validations/product";

const ProductsFilter = z
  .object({
    min: z.number({ coerce: true }).nullish(),
    max: z.number({ coerce: true }).nullish(),
    Category: z.string().nullish(),
  })
  .optional();

export const productRouter = createTRPCRouter({
  getAllProducts: protectedProcedureAdmin
    .input(ProductsFilter)
    .query(async ({ input, ctx }) => {
      if (!input) return await ctx.db.product.findMany({});
      else
        return await ctx.db.product.findMany({
          where: {
            priceInCents: {
              gte: input.min ? input.min * 100 : 0,
              ...(input.max ? { lte: input.max * 100 } : {}),
            },
            ...(input.Category
              ? { category: { equals: input.Category as Category } }
              : {}),
          },
        });
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
