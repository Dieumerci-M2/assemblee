import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";

export const metadata: Metadata = {
  title: "Assemblee",
  description: "Assemblee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <hr />
        {children}
        <Footer />
      </body>
    </html>
  );
}
