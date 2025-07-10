import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constans";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center ">
      <Image
        src={"/images/logo.svg"}
        alt={`${APP_NAME}`}
        width={70}
        height={70}
      />
      <h3 className="mt-2 text-2xl">Page Not Found</h3>
      <Button asChild variant={"secondary"} className="mt-4">
        <Link href={"/"}>Back to home</Link>
      </Button>
    </div>
  );
}
