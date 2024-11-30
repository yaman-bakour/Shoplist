import { TRPCError } from "@trpc/server";
import { postRouter } from "~/server/api/routers/post";
import {
  createCallerFactory,
  createInnerTRPCContext,
  createTRPCRouter,
} from "~/server/api/trpc";
import { auth } from "../auth";
import { userRouter } from "./routers/user";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);

export const serverSideCallerPublic = async () => {
  const ctx = createInnerTRPCContext({ session: null, token: null });
  //@ts-ignore
  const caller = appRouter.createCaller(ctx);

  return caller;
};

export const serverSideCallerProtected = async () => {
  const session = await auth();
  if (!session) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  const ctx = createInnerTRPCContext({
    session,
    token: null,
  });
  //@ts-ignore
  const caller = appRouter.createCaller(ctx);
  return caller;
};
