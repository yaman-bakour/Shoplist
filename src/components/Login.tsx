"use client";
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button } from "./ui/Button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/Form";
import { Input } from "./ui/Input";
import { LoginAuth } from "~/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";

interface Props {
  session: Session | null;
}

const Login = ({ session }: Props) => {
  const form = useForm<z.infer<typeof LoginAuth>>({
    resolver: zodResolver(LoginAuth),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof LoginAuth>) => {
    signIn("credentials", {
      email: data.email,
      password: data.password,
    });
  };

  return (
    <div
      style={{ maxWidth: "480px" }}
      className="mx-auto mb-20 mt-10 rounded bg-white p-4 shadow-lg md:p-7"
    >
      <Form {...form}>
        <form className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="button"
            className="bg-blue-500 hover:bg-blue-600"
            onClick={form.handleSubmit(onSubmit)}
          >
            Log in
          </Button>

          <p>
            already have an account?{" "}
            <Link
              href={"/signup"}
              className="text-blue-500 hover:text-blue-600"
            >
              Sign up
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
};

export default Login;
