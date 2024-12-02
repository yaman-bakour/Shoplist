import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  protectedProcedureAdmin,
  publicProcedure,
} from "~/server/api/trpc";

export const orderRouter = createTRPCRouter({
  getAllOrders: protectedProcedureAdmin.query(async ({ ctx }) => {
    return await ctx.db.order.findMany({ include: { User: true } });
  }),

  getUserOrders: protectedProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.db.order.findMany({ where: { userId: input.userId } });
    }),
});
