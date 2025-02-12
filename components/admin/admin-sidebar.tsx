"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Package, CalendarDays, FileText, Settings, ImageIcon } from "lucide-react"

const menuItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Sản phẩm",
    href: "/admin/products",
    icon: Package,
  },
  {
    title: "Đặt lịch",
    href: "/admin/appointments",
    icon: CalendarDays,
  },
  {
    title: "Tin tức",
    href: "/admin/news",
    icon: FileText,
  },
  {
    title: "Gallery",
    href: "/admin/gallery",
    icon: ImageIcon,
  },
  {
    title: "Cài đặt",
    href: "/admin/settings",
    icon: Settings,
  },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-white border-r min-h-screen fixed left-0 top-16 overflow-y-auto">
      <nav className="p-4">
        <div className="mb-8">
          <h2 className="px-3 text-lg font-semibold">Admin Panel</h2>
        </div>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors",
                  pathname === item.href && "bg-gray-100 text-black font-medium",
                )}
              >
                <item.icon className="w-5 h-5" />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

