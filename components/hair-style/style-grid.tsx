"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const products = [
    {
      id: 1,
      name: "Kiểu tóc Mohican",
      price: "228,000đ",
      originalPrice: "250,000đ",
      image: "https://clmensstore.com/wp-content/uploads/2020/03/Reuzel-Red-Pomade-2.png",
      category: "tao-kieu-toc",
      description:
        "Sáp vuốt tóc Reuzel Red Pomade với độ bóng cao, giữ nếp cực tốt, mang đến phong cách tạo kiểu tóc cổ điển sang trọng.",
      features: ["Độ bóng cao", "Giữ nếp mạnh", "Dễ gội rửa", "Tạo kiểu tóc đẹp"],
      specifications: {
        weight: "113g",
        origin: "Hà Lan",
        holdLevel: "Cao",
        shineLevel: "Cao",
      },
      usage: "Lấy một lượng sáp vừa đủ, xoa đều trong lòng bàn tay và tạo kiểu từ gốc đến ngọn tóc.",
      inStock: true,
      rating: 4.8,
      reviews: 124,
      isNew: false,
      isBestSeller: true,
    },
    {
      id: 2,
      name: "Sáp Blumaan Cavalier Clay Cho Tạo Kiểu Tóc",
      price: "273,000đ",
      originalPrice: "300,000đ",
      image: "https://down-vn.img.susercontent.com/file/c6b46d4e822bea7eb4cbc145609b4213",
      category: "tao-kieu-toc",
      description: "Sáp đất sét Clay Matte với kết cấu mềm mịn, giúp tạo kiểu tóc tự nhiên không bóng, phù hợp với mọi kiểu tóc.",
      features: ["Độ giữ nếp cao", "Không bóng", "Không gây bết dính", "Dễ tạo kiểu tóc"],
      specifications: {
        weight: "113g",
        origin: "Hà Lan",
        holdLevel: "Trung bình-Cao",
        shineLevel: "Không bóng",
      },
      usage: "Lấy một lượng nhỏ sáp, xoa đều trong lòng bàn tay cho mềm và tạo kiểu trên tóc khô.",
      inStock: true,
      rating: 4.9,
      reviews: 156,
      isNew: true,
      isBestSeller: false,
    },
    {
      id: 3,
      name: "Sáp Reuzel Fiber Pomade Cho Tạo Kiểu Tóc Mềm",
      price: "271,000đ",
      originalPrice: "290,000đ",
      image: "https://product.hstatic.net/1000246396/product/reuzel-fiber-pomade_945067b3694e41e992dde2e50eb2df82_master.jpg",
      category: "tao-kieu-toc",
      description: "Sáp tạo kiểu tóc Fiber Pomade với công thức đặc biệt giúp tạo độ phồng tự nhiên, phù hợp với tóc mỏng.",
      features: ["Tạo kiểu tự nhiên", "Độ giữ nếp lâu", "Không bết tóc", "Dễ gội sạch"],
      specifications: {
        weight: "113g",
        origin: "Hà Lan",
        holdLevel: "Trung bình",
        shineLevel: "Tự nhiên",
      },
      usage: "Sử dụng với tóc ẩm hoặc khô, xoa đều sáp và tạo kiểu để có độ phồng tự nhiên.",
      inStock: true,
      rating: 4.7,
      reviews: 98,
      isNew: false,
      isBestSeller: true,
    },
    {
      id: 4,
      name: "Sáp Tạo Kiểu Tóc Loreal Nam",
      price: "271,000đ",
      originalPrice: "290,000đ",
      image: "https://product.hstatic.net/200000168861/product/1550461800-1075701924-sap-vu-t-toc-nam-loreal_a3dbab94182b43f081f70bd7e172127a.jpg",
      category: "tao-kieu-toc",
      description: "Sáp tạo kiểu tóc Fiber Pomade với công thức đặc biệt giúp tạo độ phồng tự nhiên, phù hợp với tóc mỏng.",
      features: ["Tạo kiểu đẹp", "Độ giữ nếp lâu", "Không bết tóc", "Dễ gội sạch"],
      specifications: {
        weight: "113g",
        origin: "Hà Lan", 
        holdLevel: "Trung bình",
        shineLevel: "Tự nhiên"
      },
      usage: "Sử dụng với tóc ẩm hoặc khô, xoa đều sáp và tạo kiểu để có độ phồng tự nhiên.",
      inStock: true,
      rating: 4.7,
      reviews: 98,
      isNew: false,
      isBestSeller: true
    },
    {
      id: 5,
      name: "Gôm Xịt Tạo Kiểu Tóc Butterfly Shadow 600ml",
      price: "89.000đ",
      originalPrice: "120.000đ",
      image: "https://waxforman.com/public/manipulate/800x800/shopping-product-images/1695059811-gom-xit-toc-butterfly-shadow-600ml-01.jpg",
      category: "tao-kieu-toc",
      description: "Gôm xịt tạo kiểu tóc Butterfly Shadow 600ml là sản phẩm đầu tiên của thương hiệu. Sản phẩm cho hiệu năng cực mạnh trong thân hình nhỏ gọn với giá tốt, là sự lựa chọn đáng tiền cho việc tạo kiểu tóc.",
      features: ["Tạo kiểu nhanh", "Độ giữ nếp lâu", "Không bết tóc", "Dễ gội sạch"],
      specifications: {
        weight: "600ml - đủ sử dụng trên 6 tháng",
        origin: "China",
        holdLevel: "Trung bình",
        shineLevel: "Tự nhiên"
      },
      usage: "Xịt đều lên tóc và tạo kiểu theo ý muốn.",
      inStock: true,
      rating: 4.7,
      reviews: 98,
      isNew: false,
      isBestSeller: true
    },
    {
      id: 6,
      name: "Tinh Dầu Dưỡng Cho Tạo Kiểu Tóc Aurane Softliss 125ml",
      price: "120.000đ",
      originalPrice: "150.000đ",
      image: "https://down-vn.img.susercontent.com/file/6a5ac1d3efc5434f30f304c28b737818",
      category: "tao-kieu-toc",
      description: "Tinh dầu dưỡng giúp tạo kiểu tóc tự nhiên, phục hồi tóc hư tổn, cung cấp độ ẩm và bảo vệ tóc khỏi tác động của nhiệt.",
      features: ["Tạo kiểu mềm mại", "Dưỡng tóc", "Không bết dính", "Dễ sử dụng"],
      specifications: {
        weight: "125ml - đủ dùng 3 tháng",
        origin: "China",
        holdLevel: "Nhẹ",
        shineLevel: "Tự nhiên"
      },
      usage: "Thoa đều tinh dầu lên tóc ẩm hoặc khô và tạo kiểu theo ý muốn.",
      inStock: true,
      rating: 4.7,
      reviews: 98,
      isNew: false,
      isBestSeller: true
    },
  ]

interface ProductGridProps {
  category: string
}

export default function ProductGrid({ category }: ProductGridProps) {
  const [sortBy, setSortBy] = useState("newest")

  const filteredProducts = category === "all" ? products : products.filter((product) => product.category === category)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return Number.parseInt(a.price.replace(/\D/g, "")) - Number.parseInt(b.price.replace(/\D/g, ""))
      case "price-desc":
        return Number.parseInt(b.price.replace(/\D/g, "")) - Number.parseInt(a.price.replace(/\D/g, ""))
      case "name-asc":
        return a.name.localeCompare(b.name)
      case "name-desc":
        return b.name.localeCompare(a.name)
      default:
        return 0
    }
  })

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
          <Link href={`/stone/${category}/${product.id}`} key={product.id}>
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4">
                <div className="relative aspect-square mb-4">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
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
                  <div className="flex items-center justify-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-1 text-sm text-gray-600">({product.reviews})</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="font-bold text-red-600 text-lg">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                  <div className="flex justify-center gap-2">
                    <div className="text-sm px-2 py-1 bg-gray-100 rounded">
                      <span className="font-medium">Độ giữ nếp:</span> {product.specifications.holdLevel}
                    </div>
                    <div className="text-sm px-2 py-1 bg-gray-100 rounded">
                      <span className="font-medium">Độ bóng:</span> {product.specifications.shineLevel}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

