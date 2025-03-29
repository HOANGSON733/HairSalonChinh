"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Box, TruckIcon, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GetDetailProduct } from "@/api/api"

// Định nghĩa kiểu dữ liệu cho sản phẩm
type Product = {
  id: number
  name: string
  price: number
  originalPrice?: string
  image: string
  gallery: string[]
  category: string
  description: string
  features: string[]
  weight: string
  origin: string
  holdLevel: string
  shineLevel: string
  slug: string
  isNew: boolean
  isBestSeller: boolean
  usage: string
}

interface ProductDetailsProps {
  id: number
}

export default function ProductDetails({ id }: ProductDetailsProps) {
  const [product, setProduct] = useState<Product | null>(null)
  const [selectedImage, setSelectedImage] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)
  const [quantity, setQuantity] = useState<number>(1)

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true)
      try {
        const data = await GetDetailProduct(id)
        setProduct(data)
      } catch (error) {
        console.error("Lỗi khi lấy chi tiết sản phẩm:", error)
      } finally {
        setLoading(false)
      }
    }
    if (id) fetchProduct()
  }, [id])

  const handleIncreaseQuantity = () => {
    setQuantity(prev => prev + 1)
  }

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }

  const calculateDiscount = () => {
    if (!product?.originalPrice) return 0

    // Xử lý chuỗi originalPrice để lấy giá trị số
    const originalPriceStr = typeof product.originalPrice === 'string' ? product.originalPrice : String(product.originalPrice)
    const originalPriceNum = parseInt(originalPriceStr.replace(/\D/g, ""))

    if (isNaN(originalPriceNum) || originalPriceNum === 0) return 0

    return Math.round((1 - (product.price / originalPriceNum)) * 100)
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF9900]"></div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-700">Không tìm thấy sản phẩm</h2>
        <p className="text-gray-500 mt-2">Sản phẩm không tồn tại hoặc đã bị xóa</p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          {/* Hình ảnh sản phẩm */}
          <div className="space-y-6">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">      
              <Image
                src={product.gallery[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-contain p-4"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNew && (
                  <Badge className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    NEW
                  </Badge>
                )}
                {product.isBestSeller && (
                  <Badge className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    BEST SELLER
                  </Badge>
                )}
              </div>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {product.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden transition-all duration-200 ${selectedImage === index
                      ? "ring-2 ring-[#FF9900] ring-offset-2"
                      : "border border-gray-200 hover:border-gray-300"
                    }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Thông tin sản phẩm */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-sm mb-1">
                <span className="text-gray-500">Danh mục:</span>
                <span className="font-medium text-gray-700">{product.category}</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">4.9 (120 đánh giá)</span>
              </div>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-bold text-red-600">{product.price.toLocaleString()}₫</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">{product.originalPrice}₫</span>
                )}
                {product.originalPrice && (
                  <span className="bg-red-100 text-red-600 text-sm px-2 py-1 rounded-md">
                    {calculateDiscount()}% giảm
                  </span>
                )}
              </div>
            </div>

            <Card className="p-5 bg-gray-50 border border-gray-100">
              <h3 className="font-medium mb-3 text-gray-800">Thông số sản phẩm:</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <span className="w-24 text-gray-500">Khối lượng:</span>
                  <span className="font-medium">{product.weight || "Không có dữ liệu"}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-24 text-gray-500">Xuất xứ:</span>
                  <span className="font-medium">{product.origin || "Không có dữ liệu"}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-24 text-gray-500">Độ giữ nếp:</span>
                  <span className="font-medium">{product.holdLevel || "Không có dữ liệu"}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-24 text-gray-500">Độ bóng:</span>
                  <span className="font-medium">{product.shineLevel || "Không có dữ liệu"}</span>
                </div>
              </div>
            </Card>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <Button
                    onClick={handleDecreaseQuantity}
                    variant="outline"
                    size="icon"
                    className="rounded-l-md rounded-r-none h-12 w-12 border-gray-300"
                  >
                    -
                  </Button>
                  <div className="h-12 w-16 flex items-center justify-center border-y border-gray-300">
                    {quantity}
                  </div>
                  <Button
                    onClick={handleIncreaseQuantity}
                    variant="outline"
                    size="icon"
                    className="rounded-r-md rounded-l-none h-12 w-12 border-gray-300"
                  >
                    +
                  </Button>
                </div>
                <Button className="h-12 flex-1 bg-[#FF9900] hover:bg-[#FF8800] text-white font-medium flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Thêm vào giỏ hàng
                </Button>
              </div>
              <Button variant="outline" className="w-full h-12 border-gray-300 hover:bg-gray-50 flex items-center justify-center gap-2">
                <Heart className="w-5 h-5" />
                Thêm vào yêu thích
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                <TruckIcon className="w-10 h-10 text-[#FF9900]" />
                <div>
                  <h4 className="font-medium">Giao hàng nhanh</h4>
                  <p className="text-sm text-gray-500">Giao hàng trong 24h</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                <Box className="w-10 h-10 text-[#FF9900]" />
                <div>
                  <h4 className="font-medium">Hoàn trả dễ dàng</h4>
                  <p className="text-sm text-gray-500">Đổi trả trong 7 ngày</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs chi tiết sản phẩm */}
        <div className="border-t border-gray-200 mt-8">
          <Tabs defaultValue="description" className="px-6 pb-8">
            <TabsList className="w-full justify-start border-b h-auto overflow-x-auto flex bg-transparent pt-4">
              <TabsTrigger value="description" className="data-[state=active]:border-b-2 data-[state=active]:border-[#FF9900] data-[state=active]:text-[#FF9900] rounded-none px-6 py-3 text-base font-medium">
                Mô tả
              </TabsTrigger>
              <TabsTrigger value="specifications" className="data-[state=active]:border-b-2 data-[state=active]:border-[#FF9900] data-[state=active]:text-[#FF9900] rounded-none px-6 py-3 text-base font-medium">
                Thông số kỹ thuật
              </TabsTrigger>
              <TabsTrigger value="usage" className="data-[state=active]:border-b-2 data-[state=active]:border-[#FF9900] data-[state=active]:text-[#FF9900] rounded-none px-6 py-3 text-base font-medium">
                Hướng dẫn sử dụng
              </TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6 px-2">
              <div className="space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed">{product.description}</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="text-lg font-medium mb-4 text-gray-900">Tính năng nổi bật:</h3>
                  {Array.isArray(product.features) && product.features.length > 0 ? (
                    <ul className="space-y-3">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="bg-[#FF9900] rounded-full p-1 mt-1 flex-shrink-0">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500">Không có tính năng nổi bật nào.</p>
                  )}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="specifications" className="mt-6 px-2">
              <div className="bg-white rounded-lg overflow-hidden">
                {product ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center py-3 border-b border-gray-200">
                        <span className="font-medium text-gray-500">Khối lượng</span>
                        <span className="font-medium text-gray-900">{product.weight || "Không có dữ liệu"}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-gray-200">
                        <span className="font-medium text-gray-500">Xuất xứ</span>
                        <span className="font-medium text-gray-900">{product.origin || "Không có dữ liệu"}</span>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center py-3 border-b border-gray-200">
                        <span className="font-medium text-gray-500">Độ giữ nếp</span>
                        <span className="font-medium text-gray-900">{product.holdLevel || "Không có dữ liệu"}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-gray-200">
                        <span className="font-medium text-gray-500">Độ bóng</span>
                        <span className="font-medium text-gray-900">{product.shineLevel || "Không có dữ liệu"}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500">Không có thông số kỹ thuật.</p>
                )}
              </div>
            </TabsContent>

            <TabsContent value="usage" className="mt-6 px-2">
              <div className="space-y-6">
                <h3 className="text-lg font-medium mb-4 text-gray-900">Các bước sử dụng:</h3>
                {product.usage ? (
                  <div className="text-gray-700">
                    {typeof product.usage === "string" ? (
                      <p dangerouslySetInnerHTML={{ __html: product.usage }} />
                    ) : (
                      <p>{product.usage}</p>
                    )}
                  </div>
                ) : (
                  <p className="text-gray-500">Chưa có hướng dẫn sử dụng.</p>
                )}
              </div>
            </TabsContent>

          </Tabs>
        </div>
      </div>
    </div>
  )
}