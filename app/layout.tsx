import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBanner from "@/components/top-banner";
import Navbar from "@/components/navbar";
import MainFooter from "@/components/main-footer";
import FloatingIcons from "@/components/floatingIcons/FloatingIcons";

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
  title: "Hair Salon Chính",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <TopBanner />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <FloatingIcons
          facebook="hairchinhsalon"
          facebookPage="hairchinhsalon"
          zaloNumber="0967100552"
          phoneNumber="0967100552"
        />
        <MainFooter />
      </body>
    </html>
  );
}
