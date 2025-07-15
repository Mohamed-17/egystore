import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { APP_NAME } from "@/lib/constans";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SignInForm from "./SignInForm";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "Sign In",
};
async function page(props: {
  searchParams: Promise<{
    callbackUrl: string;
  }>;
}) {
  const session = await auth();
  const callbackUrl = (await props.searchParams).callbackUrl;
  if (session?.user) {
    redirect(callbackUrl || "/");
  }
  return (
    <div className="w-full max-w-md mx-auto ">
      <Card>
        <CardHeader className="space-y-2">
          <Link href={"/"} className="flex-center">
            <Image
              src={"/images/logo.svg"}
              alt={`${APP_NAME} logo`}
              width={100}
              height={100}
              priority={true}
            />
          </Link>
          <CardTitle className="text-center">Sign In </CardTitle>
          <CardDescription className="text-center">
            Sign In to your account
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <SignInForm />
      </Card>
    </div>
  );
}

export default page;
