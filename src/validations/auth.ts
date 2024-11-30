import { z } from "zod";

export const RegisterAuth = z
  .object({
    email: z.string().toLowerCase().email({
      message: "please Enter a valid email",
    }),
    password: z.string().min(4, "Password must be at least 4 characters long"),
    name: z.string().min(1, "Name is required"),
  })
  .extend({
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export const LoginAuth = z.object({
  email: z.string().toLowerCase().email({
    message: "please Enter a valid email",
  }),
  password: z.string().min(1, "Password Required"),
});
