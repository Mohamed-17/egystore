import type { Metadata } from "next";
import { templateLiteral } from "zod";

export default function SignInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex-center w-full  min-h-screen m-auto">{children}</div>
  );
}
