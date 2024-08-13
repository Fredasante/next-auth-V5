"use server";

import { useCurrentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { sendVerificationEmail } from "@/lib/mail";
import { generateVerificationToken } from "@/lib/tokens";
import { getUserByEmail, getUserById } from "@/lib/user";
import { SettingsSchema } from "@/schemas";
import * as z from "zod";
import bcrypt from "bcryptjs";

export const settings = async (values: z.infer<typeof SettingsSchema>) => {
  const user = await useCurrentUser();

  if (!user) {
    return { error: "You must be logged in to update your settings" };
  }
  const dbUser = await getUserById(user.id ?? "");

  if (!dbUser) {
    return { error: "User not found" };
  }

  if (user.isOAuth) {
    values.email = undefined!;
    values.password = undefined;
    values.newPassword = undefined;
    values.isTwoFactorEnabled = undefined;
  }

  if (values.email && values.email !== user.email) {
    const existingUser = await getUserByEmail(values.email);

    if (existingUser && existingUser.id !== user.id) {
      return { error: "Email is already in use" };
    }

    const verificationToken = await generateVerificationToken(values.email);

    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );

    return { success: "Verification email sent" };
  }

  if (values.password && values.newPassword && dbUser.password) {
    const passwordMatch = await bcrypt.compare(
      values.password,
      dbUser.password
    );

    if (!passwordMatch) {
      return { error: "Incorrect password" };
    }

    const hashedPassword = await bcrypt.hash(values.newPassword, 10);
    values.password = hashedPassword;
    values.newPassword = undefined;
  }

  await db.user.update({
    where: { id: dbUser.id },
    data: {
      ...values,
    },
  });

  return { success: "Settings updated" };
};
