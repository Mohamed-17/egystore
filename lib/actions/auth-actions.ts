"use server";
import { signInSchema } from "@/lib/validation";
import { signIn, signOut } from "@/auth";

import { isRedirectError } from "next/dist/client/components/redirect-error";
export async function signInWithCredentials(
  prevState: unknown,
  formData: FormData
) {
  try {
    const user = signInSchema.parse({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });
    await signIn("credentials", user);
    return { success: true, message: "Sign in successfully" };
  } catch (error) {
    // Handle redirect error if needed, otherwise return a generic error message
    if (isRedirectError(error)) throw error;
    return { success: false, message: "Sign in failed" };
  }
}
export async function signOutUser() {
  await signOut();
}
