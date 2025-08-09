import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../styles/globals.css";
import { ReactNode } from "react";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IT Management Services",
  description:
    "We manage your IT, so you can manage your business. Take charge of your business continuity with innovative IT solutions.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}
