"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Pencil, Eye } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

// Sample gallery data
const galleryItems = [
  {
    id: 1,
    title: "Kiểu tóc Layer Nam",
    category: "Kiểu tóc",
    image: "/placeholder.svg",
    date: "2024-02-08",
  },
  {
    id: 2,
    title: "Undercut Hiện Đại",
    category: "Kiểu tóc",
    image: "/placeholder.svg",
    date: "2024-02-08",
  },
  {
    id: 3,
    title: "Chăm sóc da",
    category: "Dịch vụ",
    image: "/placeholder.svg",
    date: "2024-02-08",
  },
  {
    id: 4,
    title: "Salon Interior",
    category: "Cơ sở vật chất",
    image: "/placeholder.svg",
    date: "2024-02-08",
  },
  // Add more gallery items...
]

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {galleryItems.map((item) => (
          <Card key={item.id} className="overflow-hidden group">
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <Button variant="secondary" size="icon" onClick={() => setSelectedImage(item.image)}>
                    <Eye className="w-4 h-4" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="secondary" size="icon">
                        <Pencil className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Đổi tên</DropdownMenuItem>
                      <DropdownMenuItem>Đổi danh mục</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Xóa</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-medium truncate">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Xem hình ảnh</DialogTitle>
          </DialogHeader>
          {selectedImage && (
            <div className="relative aspect-video">
              <Image src={selectedImage || "/placeholder.svg"} alt="Preview" fill className="object-contain" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

