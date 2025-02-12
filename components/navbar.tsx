"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu } from "lucide-react"
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
      { name: "Sản phẩm", href: "/stone/san-pham" },
      { name: "Tạo kiểu tóc", href: "/stone/tao-kieu-toc" },
      { name: "Chăm sóc tóc", href: "/stone/cham-soc-toc" },
      { name: "Chăm sóc da", href: "/stone/cham-soc-da" },
      { name: "Chăm sóc cơ thể", href: "/stone/cham-soc-co-the" },
    ],
  },
  { name: "TUYỂN DỤNG", href: "/tuyen-dung" },
  { name: "LIÊN HỆ", href: "/lien-he" },
]

export default function Navbar() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const pathname = usePathname()

  const handleMenuClick = (item: (typeof menuItems)[0]) => {
    if (item.isBooking) {
      setIsBookingOpen(true)
    }
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
                src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/477315575_122146548824433331_1179012108685661300_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=AuU4TpQQCVgQ7kNvgEx9FLA&_nc_oc=AdhaZ7w4gYiZ76kvapf6j8SzVDI1jkTLyPrHbaCAozA2O6jS7BYxj0kcaW9Fx1u2Pzc&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=AUyMlMRmfy_jo7Dz346H_YN&oh=00_AYCxCVyz4hRWpGxph9q1HyxkyG9R_SLYWlElvDJ_X8OM8g&oe=67B0E8C6"
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
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-4 mt-8">
                  {menuItems.map((item) => (
                    <div key={item.name}>
                      {item.items ? (
                        <div>
                          <div className={`text-lg font-medium mb-2 ${
                            isDropdownActive(item.items) ? "text-[#FF9900]" : "text-gray-700"
                          }`}>
                            {item.name}
                          </div>
                          <div className="pl-4 flex flex-col gap-2">
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className={`${
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
                          className={`text-lg font-medium ${
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

          {/* Desktop Menu */}
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
                      style={{ borderRadius: "7px" }}
                    >
                      {item.items.map((subItem) => (
                        <DropdownMenuItem 
                          key={subItem.name} 
                          asChild 
                          className={`border-b hover:bg-[#A8A8A8] transition-colors`}
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