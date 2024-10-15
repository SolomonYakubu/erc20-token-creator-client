import type { Metadata } from "next";

import {Ubuntu} from "next/font/google";
import "./globals.css";


const ubuntu = Ubuntu({
  weight: "300",
  subsets:["latin","latin-ext","greek","greek-ext","cyrillic","cyrillic-ext"],
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.className}`}
      >
        {children}
      </body>
    </html>
  );
}
