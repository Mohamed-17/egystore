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
import SignUpForm from "./SignUpForm";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "Sign Up",
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
              src={"/images/logo.jpg"}
              alt={`${APP_NAME} logo`}
              width={100}
              height={100}
              priority={true}
            />
          </Link>
          <CardTitle className="text-center">Create an account</CardTitle>
          <CardDescription className="text-center">
            Sign up to start shopping
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignUpForm />
        </CardContent>
      </Card>
    </div>
  );
}

export default page;
