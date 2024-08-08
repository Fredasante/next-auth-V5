"use client";

import { CardWrapper } from "./CardWrapper";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginSchema, ResetSchema } from "@/schemas";
import { Button } from "../ui/button";
import { FormError } from "../FormError";
import { FormSuccess } from "../FormSuccess";
import { useState, useTransition } from "react";
import { reset } from "@/actions/reset";

export const ResetForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof ResetSchema>) {
    setError("");
    setSuccess("");

    startTransition(() => {
      reset(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  }

  return (
    <CardWrapper
      headerLabel="Forgot your password?"
      backButtonLabel="Back to Login"
      backButtonHref="/auth/login"
      showSocial={false}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      placeholder="Enter your email"
                      type="email"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormError message={error} />
            <FormSuccess message={success} />

            <Button
              disabled={isPending}
              type="submit"
              className="w-full !mt-10 "
            >
              Send reset email
            </Button>
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
};
