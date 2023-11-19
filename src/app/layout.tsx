import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nidday's Meat School",
  description:
    "Learn everything you need to know about meat! At Nidday's Meat Land",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark w-full h-full m-0 p-0">
      <body className="relative w-full h-full grid dark:bg-dark-primary grid-col-[1fr] grid-rows-[minmax(0,_1fr)_30px]">
        {children}
      </body>
    </html>
  );
}
