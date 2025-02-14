"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import BookingModal from "./booking-modal"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const menuItems = [
  { name: "TRANG CHỦ", href: "/" },
  { name: "GIỚI THIỆU", href: "/gioi-thieu" },
  { name: "DỊCH VỤ", href: "/dich-vu" },
  { name: "ĐẶT LỊCH", href: "#", isBooking: true },
  { name: "BLOG", href: "/blog" },
  { name: "GALLERY", href: "/gallery" },
  {
    name: "STORE",
    items: [
      { name: "Sản Phẩm", href: "/stone/san-pham" },
      { name: "Kiểu Tóc Nam", href: "/stone/kieu-toc" },
      { name: "Kiểu Tóc Nữ", href: "/stone/toc-nu" },
      { name: "Phun Xăm Thẩm Mỹ", href: "/stone/phun-xam-tham-my" },
      { name: "Làm Nail", href: "/stone/lam-nail" },
    ],
  },
  { name: "TUYỂN DỤNG", href: "/tuyen-dung" },
  { name: "LIÊN HỆ", href: "/lien-he" },
]

export default function Navbar() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const handleMenuClick = (item) => {
    if (item.isBooking) {
      setIsBookingOpen(true)
    }
  }

  const isActive = (href) => {
    if (href === "/") {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <nav className="bg-white border-b py-2 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="block w-16">
          <Image
            src="/logo.png"
            alt="Hair's Salon Chinh's"
            width={100}
            height={80}
            className="w-full"
          />
        </Link>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger className="p-2 rounded-md focus:outline-none">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gray-100">
              <div className="flex flex-col gap-4 mt-8">
                {menuItems.map((item) => (
                  <div key={item.name}>
                    {item.items ? (
                      <details className="group">
                        <summary className="text-lg font-medium cursor-pointer flex items-center justify-between p-2 text-gray-700 group-open:text-[#FF9900]">
                          {item.name}
                          <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="pl-4 flex flex-col gap-2 mt-2">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={`text-gray-600 hover:text-[#FF9900] transition-colors`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </details>
                    ) : item.isBooking ? (
                      <button onClick={() => handleMenuClick(item)} className="text-lg font-medium text-gray-700 hover:text-[#FF9900] transition-colors">
                        {item.name}
                      </button>
                    ) : (
                      <Link href={item.href} className={`text-lg font-medium ${isActive(item.href) ? "text-[#FF9900]" : "text-gray-700 hover:text-[#FF9900]"} transition-colors`}>
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8">
          {menuItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.items ? (
                <>
                  <button className="text-gray-700 hover:text-[#FF9900] transition-colors font-medium flex items-center gap-1 focus:outline-none">
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.items.map((subItem) => (
                      <Link key={subItem.name} href={subItem.href} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : item.isBooking ? (
                <button onClick={() => handleMenuClick(item)} className="text-gray-700 hover:text-[#FF9900] transition-colors font-medium">
                  {item.name}
                </button>
              ) : (
                <Link href={item.href} className={`font-medium ${isActive(item.href) ? "text-[#FF9900]" : "text-gray-700 hover:text-[#FF9900]"} transition-colors`}>
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
      <BookingModal open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </nav>
  )
}