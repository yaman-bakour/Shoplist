import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  protectedProcedureAdmin,
  publicProcedure,
} from "~/server/api/trpc";

import { CheckoutValidation } from "~/validations/order";

export const orderRouter = createTRPCRouter({
  getAllOrders: protectedProcedureAdmin.query(async ({ ctx }) => {
    return await ctx.db.order.findMany({ include: { User: true } });
  }),

  getUserOrders: protectedProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.db.order.findMany({
        where: { userId: input.userId },
        include: { OrderProducts: { include: { Product: true } } },
      });
    }),
  CreateOrder: protectedProcedure
    .input(CheckoutValidation)
    .mutation(async ({ ctx, input }) => {
      const total = input.Products.reduce((total, value) => {
        return total + value.pricePerItem * value.quantity;
      }, 0);
      const Info = input.Products.map((item) => {
        return { productId: item.productId, numberOfItems: item.quantity };
      });
      return await ctx.db.order.create({
        data: {
          pricePaidInCents: total,
          userId: ctx.session.user.id,
          OrderProducts: { createMany: { data: [...Info] } },
        },
      });
    }),
});
