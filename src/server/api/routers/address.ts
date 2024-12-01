import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { AddressValidation } from "~/validations/address";

export const addressRouter = createTRPCRouter({
  createAddress: protectedProcedure
    .input(AddressValidation)
    .mutation(async ({ input, ctx }) => {
      const res = await ctx.db.address.create({
        data: { ...input, userId: ctx.session.user.id },
      });
      return res;
    }),
});
