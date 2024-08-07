import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import {Poppins} from "next/font/google"

export const metadata: Metadata = {
  title: "Assemblee",
  description: "Assemblee",
};

const poppins = Poppins({
  subsets :['latin'],
  weight: ["400"],
  display: "swap",
  variable: "--poppins",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="md:fixed top-0 left-0 w-full bg-white bg-opacity-90 z-10 shadow-md"><Header /></div>
        <div>{children}</div>
        <div><Footer /></div>
      </body>
    </html>
  );
}
