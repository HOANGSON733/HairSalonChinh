"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2 } from "lucide-react"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Sáp Reuzel Clay Matte Pomade Không Bóng",
    price: "273,000đ",
    category: "Tạo kiểu tóc",
    image: "/placeholder.svg",
    stock: 15,
  },
  {
    id: 2,
    name: "Sáp Reuzel Fiber Pomade Mềm Dẻo",
    price: "271,000đ",
    category: "Tạo kiểu tóc",
    image: "/placeholder.svg",
    stock: 8,
  },
  // Add more products...
]

export default function ProductsTable() {
  return (
    <div className="bg-white rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Sản phẩm</TableHead>
            <TableHead>Danh mục</TableHead>
            <TableHead>Giá</TableHead>
            <TableHead>Tồn kho</TableHead>
            <TableHead className="text-right">Thao tác</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <span>{product.name}</span>
                </div>
              </TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.stock}</TableCell>
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

