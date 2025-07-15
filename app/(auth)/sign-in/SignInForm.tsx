"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";
import { signInWithCredentials } from "@/lib/actions/auth-actions";
import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
function SignInButton({ pending }: { pending: boolean }) {
  return (
    <Button className="w-full" variant={"default"}>
      {pending ? "Signing in ..." : "Sign In"}
    </Button>
  );
}
function SignInForm() {
  const [data, action, isPending] = useActionState(signInWithCredentials, {
    success: false,
    message: "",
  });
  const callbackUrl = useSearchParams().get("callbackUrl") || "/";
  return (
    <form className="space-y-4 px-5" action={action}>
      <input
        type="hidden"
        className="hidden"
        name={`${callbackUrl}`}
        value={callbackUrl}
      />
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          name="email"
          id="email"
          className=""
          defaultValue={""}
          required
          type="email"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          name="password"
          id="password"
          className=""
          defaultValue={""}
          required
          type="password"
        />
      </div>
      <SignInButton pending={isPending} />
      {data && !data.success && (
        <div className="text-destructive text-sm text-center">
          {data.message}
        </div>
      )}
      <div className="text-center text-sm text-muted-foreground mt-2">
        Don't have an account?{" "}
        <Link href="/sign-up" className="text-blue-500 hover:underline">
          Sign Up
        </Link>
      </div>
    </form>
  );
}

export default SignInForm;
