"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2 } from "lucide-react"
import Image from "next/image"

const news = [
  {
    id: 1,
    title: "Bí mật đằng sau những cánh cửa luôn chật ních người của Salon tóc nam Min Shair Skin",
    category: "Tin tức",
    publishDate: "2024-02-07",
    status: "published",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Là đàn ông, đừng bỏ lỡ 3 kiểu tóc nam Hot Trend nhất 2024 này",
    category: "Xu hướng",
    publishDate: "2024-02-06",
    status: "draft",
    image: "/placeholder.svg",
  },
  // Add more news...
]

export default function NewsTable() {
  return (
    <div className="bg-white rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tiêu đề</TableHead>
            <TableHead>Danh mục</TableHead>
            <TableHead>Ngày đăng</TableHead>
            <TableHead>Trạng thái</TableHead>
            <TableHead className="text-right">Thao tác</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {news.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 relative">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <span>{item.title}</span>
                </div>
              </TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.publishDate}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    item.status === "published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {item.status === "published" ? "Đã đăng" : "Bản nháp"}
                </span>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="icon">
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

