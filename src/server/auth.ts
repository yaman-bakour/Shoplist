import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, {
  DefaultSession,
  NextAuthConfig,
  Session,
  User,
} from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { nanoid } from "nanoid";
import { db } from "~/server/db";
import { LoginAuth } from "~/validations/auth";
import { serverSideCallerPublic } from "./api/root";
import { skipCSRFCheck } from "@auth/core";
/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */

const adapter = PrismaAdapter(db);
export const sessionTokenMaxAge = 60 * 60 * 24 * 30; // 30 days
const oauthToken = nanoid(256);
export const authOptions = {
  adapter: adapter,
  providers: [
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
    Credentials({
      // The name to display on the sign in form (e.g. "Sign in with...")
      // id: "username-login",
      name: "CredentialsProvider",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      // credentials: {
      //   email: { label: "Email", type: "email" },
      //   password: { label: "Password", type: "password" },
      // },
      async authorize(credentials) {
        try {
          // console.log({ credentials });
          const { email, password } = LoginAuth.parse(credentials);

          // Add logic here to look up the user from the credentials supplied
          const caller = await serverSideCallerPublic();
          const user = await caller.user.loginUser({ email, password });
          const token = nanoid(256);
          await adapter.createSession?.({
            userId: user.id,
            expires: new Date(Date.now() + sessionTokenMaxAge * 1000),
            sessionToken: token,
          });

          // Any object returned will be saved in `user` property of the JWT
          const userJwt: User = {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
          };

          return userJwt;
        } catch (err) {
          console.error(">>>> auth error", err);
          return null;
        }
      },
    }),
  ],
  events: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    signOut: async ({ token, session }) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (token?.sessionToken) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        await adapter.deleteSession?.(token.sessionToken as string);
      }
    },
  },
  callbacks: {
    session: ({ session, user, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          // id: user?.id ?? token?.id,
        },
      };
    },

    //for credentials & oauth
    // @TODO - if you wanna have auth on the edge
    async jwt({ token, user, account }) {
      try {
        delete token.picture;
        const isCredential = account?.provider === "credentials";
        if (token?.sessionToken) {
          const session = await adapter.getSessionAndUser?.(
            token.sessionToken as string,
          );

          if (!isCredential && !session?.session) {
            const createdAuthSession = await adapter.createSession?.({
              userId: user.id ?? "",
              expires: new Date(Date.now() + sessionTokenMaxAge * 1000),
              sessionToken: oauthToken,
            });

            token.sessionToken = createdAuthSession?.sessionToken;
            return token;
          }

          if (!session?.session) {
            return null;
          }
        }
        return token;
      } catch (error) {
        return null;
      }
    },
  },
  session: {
    strategy: "jwt",
    maxAge: sessionTokenMaxAge,
    updateAge: 24 * 60 * 60,
  },
} satisfies NextAuthConfig;

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */

export const { auth, signIn, signOut, handlers } = NextAuth(authOptions);

export const validateToken = async (token: string): Promise<Session | null> => {
  const sessionToken = token.slice("Bearer ".length);
  const session = await adapter.getSessionAndUser?.(sessionToken);
  return session
    ? {
        user: {
          ...session.user,
        },
        expires: session.session.expires.toISOString(),
      }
    : null;
};

export const invalidateSessionToken = async (token: string) => {
  const sessionToken = token.slice("Bearer ".length);
  await adapter.deleteSession?.(sessionToken);
};
