"use client"

import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import Image from "next/image"

export default function AdminHeader() {
  return (
    <header className="bg-white border-b h-16 fixed top-0 left-0 right-0 z-30">
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center gap-4">
          <Image src="/placeholder.svg" alt="Logo" width={40} height={40} className="rounded" />
          <span className="font-semibold">Min's Hair & Skin</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm">Admin</span>
          <Button variant="ghost" size="icon">
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}

