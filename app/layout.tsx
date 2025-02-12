import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import TopBanner from "@/components/top-banner"
import Navbar from "@/components/navbar"
import type React from "react" // Added import for React
import MainFooter from "@/components/main-footer"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Min's Hair & Skin",
  description: "Professional Hair & Skin Care Services",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBanner />
        <Navbar />
        {children}
        <MainFooter />
      </body>
    </html>
  )
}

