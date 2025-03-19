"use client"

import { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { GetProducts } from "@/api/api"

// Định nghĩa kiểu dữ liệu chính xác
type Product = {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  description: string
  features: string[]
  specifications: {
    weight: string
    origin: string
    holdLevel: string
    shineLevel: string
  }
  slug: string
  isNew: boolean
  isBestSeller: boolean
}

interface ProductGridProps {
  category: string
}

export default function ProductGrid({ category }: ProductGridProps) {
  const [getProducts, setGetProducts] = useState<Product[]>([])
  const [sortBy, setSortBy] = useState("newest")
  const router = useRouter()

  useEffect(() => {
    let isMounted = true
    const fetchData = async () => {
      try {
        const data = await GetProducts()
        if (isMounted) setGetProducts(data)
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu sản phẩm:", error)
      }
    }
    fetchData()

    return () => {
      isMounted = false
    }
  }, [])


  // Lọc sản phẩm theo category
  const filteredProducts = category === "all" ? getProducts : getProducts.filter((product) => product.category === category)

  // Sắp xếp sản phẩm
  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price
        case "price-desc":
          return b.price - a.price
        case "name-asc":
          return a.name.localeCompare(b.name)
        case "name-desc":
          return b.name.localeCompare(a.name)
        default:
          return 0
      }
    })
  }, [filteredProducts, sortBy])


  return (
    <div>
      <div className="flex justify-end mb-6 px-2">
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sắp xếp theo" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="newest">Mới nhất</SelectItem>
            <SelectItem value="price-asc">Giá tăng dần</SelectItem>
            <SelectItem value="price-desc">Giá giảm dần</SelectItem>
            <SelectItem value="name-asc">Tên A-Z</SelectItem>
            <SelectItem value="name-desc">Tên Z-A</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProducts.map((product) => (
          <div key={product.id} onClick={() => router.push(`/stone/${product.id}`)}>
            <Card className="group hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <CardContent className="p-4">
                <div className="relative aspect-square mb-4">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300} // Điều chỉnh theo kích thước phù hợp
                    height={300}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute top-2 right-2 flex flex-col gap-2">
                    {product.isNew && (
                      <div className="bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">NEW</div>
                    )}
                    {product.isBestSeller && (
                      <div className="bg-yellow-500 text-black px-2 py-1 text-xs font-bold rounded">BEST SELLER</div>
                    )}
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="font-medium text-center mb-2 group-hover:text-[#FF9900] transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                  <div className="flex flex-col items-center gap-1">
                    <span className="font-bold text-red-600 text-lg">{product.price}.000đ</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice.toLocaleString()}.000đ</span>
                    )}

                  </div>
                  <div className="flex justify-center gap-2">
                    {product.specifications?.holdLevel && (
                      <div className="text-sm px-2 py-1 bg-gray-100 rounded">
                        <span className="font-medium">Độ giữ nếp:</span> {product.specifications.holdLevel}
                      </div>
                    )}
                    {product.specifications?.shineLevel && (
                      <div className="text-sm px-2 py-1 bg-gray-100 rounded">
                        <span className="font-medium">Độ bóng:</span> {product.specifications.shineLevel}
                      </div>
                    )}

                  </div>

                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}