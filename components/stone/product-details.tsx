"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
// import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
// import { Minus, Plus, Star } from "lucide-react"

// This would typically come from an API or database
type Products = {
  id: number
  name: string
  price: number
  originalPrice: string
  image: string
  gallery:string
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

const products:any = {
  ["1"]: {
    id: 1,
    name: "Sáp Reuzel Red Pomade Phong Cách Cổ Điển",
    price: "228,000đ",
    originalPrice: "250,000đ",
    image: "https://clmensstore.com/wp-content/uploads/2020/03/Reuzel-Red-Pomade-2.png",
    gallery: [
      "https://clmensstore.com/wp-content/uploads/2020/03/Reuzel-Red-Pomade-2.png", 
      "https://down-vn.img.susercontent.com/file/051c705151482421842bc68ceef55f23", 
      "https://clmensstore.com/wp-content/uploads/2020/03/DSC_0031-1-1024x683.jpg.webp"],
    category: "san-pham",
    description:
      "Sáp vuốt tóc Reuzel Red Pomade với độ bóng cao, giữ nếp cực tốt, mang đến phong cách cổ điển sang trọng.",
    features: ["Độ bóng cao", "Giữ nếp mạnh", "Dễ gội rửa", "Hương thơm nam tính"],
    specifications: {
      weight: "113g",
      origin: "Hà Lan",
      holdLevel: "Cao",
      shineLevel: "Cao",
      ingredients: "Water (Aqua), Petrolatum, Beeswax, PVP, etc.",
      expiry: "36 tháng kể từ ngày sản xuất",
    },
    usage: [
      "Lấy một lượng sáp vừa đủ, xoa đều trong lòng bàn tay",
      "Vuốt từ gốc đến ngọn tóc",
      "Có thể sử dụng với tóc ẩm hoặc khô",
      "Tạo kiểu theo ý muốn",
    ],
    inStock: true,
    isNew: false,
    isBestSeller: true,
  },
  
}

interface ProductDetailsProps {
  category: string
  slug: string
}

export default function ProductDetails({ category, slug }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const product = products[String(slug)]

  if (!product) {
    return <div>Sản phẩm không tồn tại</div>
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square">
            <Image
              src={product.gallery[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-contain"
            />
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              {product.isNew && <Badge className="bg-red-500 hover:bg-red-600">NEW</Badge>}
              {product.isBestSeller && <Badge className="bg-yellow-500 hover:bg-yellow-600">BEST SELLER</Badge>}
            </div>
          </div>
          <div className="flex gap-4 overflow-x-auto">
            {product.gallery.map((image:any, index:any) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative w-20 aspect-square flex-shrink-0 border-2 rounded-lg overflow-hidden ${
                  selectedImage === index ? "border-[#FF9900]" : "border-transparent"
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

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
            </div>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl font-bold text-red-600">{product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <Card className="p-4">
              <h3 className="font-medium mb-2">Thông số sản phẩm:</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Khối lượng:</span> {product.specifications.weight}
                </div>
                <div>
                  <span className="font-medium">Xuất xứ:</span> {product.specifications.origin}
                </div>
                <div>
                  <span className="font-medium">Độ giữ nếp:</span> {product.specifications.holdLevel}
                </div>
                <div>
                  <span className="font-medium">Độ bóng:</span> {product.specifications.shineLevel}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
     <Tabs defaultValue="description" className="mt-8">
        <TabsList className="w-full justify-start border-b h-auto overflow-x-auto flex">
          <TabsTrigger value="description" className="px-4 text-sm sm:px-8">
            Mô tả
          </TabsTrigger>
          <TabsTrigger value="specifications" className="px-4 text-sm sm:px-8">
            Thông số kỹ thuật
          </TabsTrigger>
          <TabsTrigger value="usage" className="px-4 text-sm sm:px-8">
            Hướng dẫn sử dụng
          </TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="mt-4">
          <div className="space-y-4">
            <p className="text-gray-700">{product.description}</p>
            <div>
              <h3 className="font-medium mb-2">Tính năng nổi bật:</h3>
              <ul className="list-disc list-inside space-y-1">
                {product.features.map((feature: any, index: any) => (
                  <li key={index} className="text-gray-700">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="specifications" className="mt-4">
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="border-b pb-2">
                  <span className="font-medium capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}:
                  </span>{" "}
                  {value as any}
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="usage" className="mt-4">
          <div className="space-y-4">
            <h3 className="font-medium mb-2">Các bước sử dụng:</h3>
            <ol className="list-decimal list-inside space-y-2">
              {product.usage.map((step: any, index: any) => (
                <li key={index} className="text-gray-700">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </TabsContent>
      </Tabs>

    </div>
  )
}

