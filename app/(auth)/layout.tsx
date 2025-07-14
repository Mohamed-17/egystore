import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "sign in",
};
export default function SignInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex-center w-full  min-h-screen m-auto">{children}</div>
  );
}
