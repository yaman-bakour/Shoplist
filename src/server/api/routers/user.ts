import { TRPCError } from "@trpc/server";
import bcrypt from "bcryptjs";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { LoginAuth, RegisterAuth } from "~/validations/auth";

export const userRouter = createTRPCRouter({
  registerUser: publicProcedure
    .input(RegisterAuth)
    .mutation(async ({ ctx, input }) => {
      const foundUser = await ctx.db.user.findUnique({
        where: { email: input.email },
      });

      if (foundUser)
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "User already exists!!",
        });

      const hashedPassword = await bcrypt.hash(input.password, 10);

      // const audit = { createdBy: input.createdBy, updatedBy: input.createdBy };
      return ctx.db.user.create({
        data: {
          email: input.email,
          name: input.name,
          // image: faker.image.url({ width: 480, height: 480 }),
          Accounts: {
            create: {
              password: hashedPassword,
              provider: "credentials",
              type: "credentials",
              // providerAccountId: user.id
              // ...audit,
            },
          },
        },
        select: {
          id: true,
          email: true,
          name: true,
        },
      });

      // const audit = { createdBy: input.createdBy, updatedBy: input.createdBy };
    }),

  isUserEmailVerified: protectedProcedure
    .input(z.object({ email: z.string().email() }))
    .query(async ({ ctx, input }) => {
      const userRecord = await ctx.db.user.findUnique({
        where: { email: input.email },
        include: { Accounts: true },
      });

      if (userRecord) {
        const credentialsAccounts = userRecord.Accounts.filter(
          (account) => account.provider !== "credentials",
        );
        if (credentialsAccounts.length !== 0 && userRecord.email) {
          await ctx.db.user.update({
            where: { email: userRecord.email },
            data: { emailVerified: new Date() },
          });
          return true;
        }
        if (userRecord.emailVerified) {
          return true;
        }
        return false;
      }
      return false;
    }),
  // sendEmail: protectedProcedure
  //   .input(z.object({ to: z.string(), subject: z.string(), text: z.string() }))
  //   .mutation(async ({ input }) => {
  //     await sendMail({
  //       to: input.to,
  //       subject: input.subject,
  //       text: input.text,
  //     });
  //   }),
  loginUser: publicProcedure
    .input(LoginAuth)
    .mutation(async ({ ctx, input }) => {
      const foundUser = await ctx.db.user.findUnique({
        where: {
          email: input.email,
        },
      });

      if (!foundUser)
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "User not found!!",
        });

      const userAccount = await ctx.db.account.findUniqueOrThrow({
        where: { userId: foundUser.id },
      });

      const correctPassword = userAccount.password
        ? await bcrypt.compare(input.password, userAccount.password) // returns true if same
        : false;

      if (!correctPassword)
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Email or Password Incorrect",
        });

      return foundUser;
    }),

  // updateUser: protectedProcedure
  //   .input(updateUserValidation)
  //   .mutation(async ({ ctx, input }) => {
  //     const foundUser = await ctx.db.user.findUnique({
  //       where: {
  //         email: input.email,
  //       },
  //     });

  //     if (!foundUser)
  //       throw new TRPCError({
  //         code: "BAD_REQUEST",
  //         message: "User doesn't exist!!",
  //       });

  //     return ctx.db.user.update({
  //       where: { id: foundUser.id },
  //       data: {
  //         email: input.email,
  //       },
  //       select: {
  //         id: true,
  //         name: true,
  //         email: true,
  //       },
  //     });
  //   }),
});
