import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import TopBanner from "@/components/top-banner"
import Navbar from "@/components/navbar"
import MainFooter from "@/components/main-footer"

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter'
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
  viewportFit: 'cover'
}

export const metadata: Metadata = {
  title: "Hair Salon Chính",
  description: "Professional Hair Salon Chính Care Services",
  icons: {
    icon: '/logo.svg',
    apple: '/apple-touch-icon.png'
  },
  openGraph: {
    title: "Hair Salon Chính",
    description: "Professional Hair Salon Chính Care Services",
    type: 'website',
    images: [
      {
        url: './gallery/page.tsx',
        width: 1200,
        height: 630,
        alt: 'Hair Salon Chính',
      }
    ],
    siteName: 'Hair Salon Chính'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <TopBanner />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <MainFooter />
      </body>
    </html>
  )
}