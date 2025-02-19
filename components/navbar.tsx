"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, ChevronRight } from "lucide-react"
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
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState<string[]>([])
  const pathname = usePathname()

  const handleMenuClick = (item: (typeof menuItems)[0]) => {
    if (item.isBooking) {
      setIsBookingOpen(true)
    }
  }

  const toggleMobileDropdown = (itemName: string) => {
    setOpenMobileDropdowns(prev => 
      prev.includes(itemName) 
        ? prev.filter(name => name !== itemName)
        : [...prev, itemName]
    )
  }

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  const isDropdownActive = (items: { href: string }[]) => {
    return items.some(item => isActive(item.href))
  }

  return (
    <nav className="bg-white border-b py-2 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Logo */}
          <div className="flex items-center justify-between w-full lg:w-auto px-4 lg:px-0">
            <Link href="/" className="block w-14 hover:opacity-90 transition-opacity">
              <Image
                src="/Logo-1.png"
                alt="Hair's Salon Chinh's"
                width={100}
                height={80}
                className="w-full"
              />
            </Link>

            {/* Mobile Menu Button */}
            <Sheet>
              <SheetTrigger className="lg:hidden hover:bg-gray-100 p-2 rounded-full transition-colors">
                <Menu className="h-6 w-6" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
                <div className="flex flex-col mt-8 p-4">
                  {menuItems.map((item) => (
                    <div key={item.name} className="border-b border-gray-200 py-3">
                      {item.items ? (
                        <div>
                          <button
                            onClick={() => toggleMobileDropdown(item.name)}
                            className={`flex items-center justify-between w-full ${
                              isDropdownActive(item.items) ? "text-[#FF9900]" : "text-gray-700"
                            }`}
                          >
                            <span className="text-lg font-medium">{item.name}</span>
                            <ChevronRight 
                              className={`w-5 h-5 transition-transform ${
                                openMobileDropdowns.includes(item.name) ? "rotate-90" : ""
                              }`} 
                            />
                          </button>
                          <div className={`pl-4 mt-2 space-y-2 overflow-hidden transition-all ${
                            openMobileDropdowns.includes(item.name) 
                              ? "max-h-96 opacity-100" 
                              : "max-h-0 opacity-0"
                          }`}>
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className={`block py-2 ${
                                  isActive(subItem.href)
                                    ? "text-[#FF9900] font-medium"
                                    : "text-gray-600 hover:text-[#FF9900]"
                                } transition-colors`}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : item.isBooking ? (
                        <button
                          onClick={() => handleMenuClick(item)}
                          className="text-lg font-medium text-gray-700 hover:text-[#FF9900] transition-colors w-full text-left"
                        >
                          {item.name}
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          className={`text-lg font-medium block ${
                            isActive(item.href)
                              ? "text-[#FF9900]"
                              : "text-gray-700 hover:text-[#FF9900]"
                          } transition-colors`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Menu - Unchanged */}
          <div className="hidden lg:flex space-x-8">
            {menuItems.map((item) => {
              if (item.items) {
                return (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger 
                      className={`${
                        isDropdownActive(item.items)
                          ? "text-[#FF9900]"
                          : "text-gray-700 hover:text-[#FF9900]"
                      } transition-colors font-medium flex items-center gap-1 focus:outline-none`}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="bg-[#C0C0C0] border-[#808080] mt-3"
                      style={{ borderRadius: "5px", marginTop: "20px" }}
                    >
                      {item.items.map((subItem) => (
                        <DropdownMenuItem 
                          key={subItem.name} 
                          asChild 
                          className="border-b hover:bg-[#A8A8A8] transition-colors"
                        >
                          <Link 
                            href={subItem.href}
                            className={`w-full px-4 py-2 ${
                              isActive(subItem.href)
                                ? "text-[#FF9900] font-medium"
                                : "text-white hover:text-[#FF9900]"
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )
              }

              if (item.isBooking) {
                return (
                  <button
                    key={item.name}
                    onClick={() => handleMenuClick(item)}
                    className="text-gray-700 hover:text-[#FF9900] transition-colors font-medium"
                  >
                    {item.name}
                  </button>
                )
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium relative ${
                    isActive(item.href)
                      ? "text-[#FF9900] after:content-[''] after:absolute after:left-0 after:-bottom-[0px] after:w-full after:h-0.5 after:bg-[#FF9900]"
                      : "text-gray-700 hover:text-[#FF9900]"
                  } transition-colors`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      <BookingModal open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </nav>
  )
}