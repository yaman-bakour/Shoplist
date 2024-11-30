"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { RegisterAuth } from "~/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/Form";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import Link from "next/link";
import { api } from "~/trpc/react";

const Register = () => {
  const { mutate: SignupMutation } = api.user.registerUser.useMutation();
  const form = useForm<z.infer<typeof RegisterAuth>>({
    resolver: zodResolver(RegisterAuth),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      confirmPassword: "",
    },
  });

  function onSubmit(data: z.infer<typeof RegisterAuth>) {
    SignupMutation(data);
  }
  return (
    <div
      style={{ maxWidth: "480px" }}
      className="mx-auto mb-20 mt-10 rounded bg-white p-4 shadow-lg md:p-7"
    >
      <Form {...form}>
        <form className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
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
            Sign up
          </Button>

          <p>
            already have an account?{" "}
            <Link
              href={"/signin"}
              className="text-blue-500 hover:text-blue-600"
            >
              Sign in
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
};

export default Register;
