import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/header";
export const metadata: Metadata = {
  title: "Home",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 wrapper">{children}</main>
      <Footer />
    </div>
  );
}
