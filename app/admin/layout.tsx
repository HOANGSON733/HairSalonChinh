import { redirect } from "next/navigation"
import AdminSidebar from "@/components/admin/admin-sidebar"
import AdminHeader from "@/components/admin/admin-header"
import type { Metadata } from "next"
import type React from "react" // Added import for React

export const metadata: Metadata = {
  title: "Admin Dashboard - Min's Hair & Skin",
  description: "Admin dashboard for Min's Hair & Skin",
}
export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className="min-h-screen bg-gray-100">
      {/* <AdminHeader /> */}
      <div className="flex pt-16">
        {" "}
        {/* Added pt-16 for header height */}
        {/* <AdminSidebar /> */}
        <main className="flex-1 ml-64 p-8">
          {" "}
          {/* Added ml-64 for sidebar width */}
          {children}
        </main>
      </div>
    </div>
  )
}

