import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Histologics Homepage",
  description: "Saving Lives Worldwide with Kylon Tissue-Based Devices",
};

import { AOSInit } from "./_components/AOSInit";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-sans antialiased`}>
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
