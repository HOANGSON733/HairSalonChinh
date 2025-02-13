import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBanner from "@/components/top-banner";
import Navbar from "@/components/navbar";
import MainFooter from "@/components/main-footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Hair Salon Chinh",
  description: "Professional Hair & Skin Care Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/Logo.png" sizes="any" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <TopBanner />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <MainFooter />
      </body>
    </html>
  );
}
