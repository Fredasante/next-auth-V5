"use server";

import { useCurrentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { getUserById } from "@/lib/user";
import { SettingsSchema } from "@/schemas";
import * as z from "zod";

export const settings = async (values: z.infer<typeof SettingsSchema>) => {
  const user = await useCurrentUser();

  if (!user) {
    return { error: "You must be logged in to update your settings" };
  }
  const dbUser = await getUserById(user.id ?? "");

  if (!dbUser) {
    return { error: "User not found" };
  }

  await db.user.update({
    where: { id: dbUser.id },
    data: {
      ...values,
    },
  });

  return { success: "Settings updated" };
};
