import type { Metadata } from 'next'
import AdminSide from "@/components/admin/admin-sidebar"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['vietnamese'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Productic',
    default: 'Productic'
  },
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-100`}>
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <div >
            <AdminSide />
          </div>

          {/* Nội dung chính */}
          <div className="flex-1 p-6 md:p-10 bg-white rounded-lg shadow-md">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
