"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Minus, Plus, Star } from "lucide-react"

// This would typically come from an API or database
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
    rating: 4.8,
    reviews: 124,
    isNew: false,
    isBestSeller: true,
  },
  ["2"]: {
    id: 2,
    name: "Sáp vuốt tóc Blumaan Cavalier Clay",
    price: "320,000đ",
    originalPrice: "350,000đ",
    image: "https://product.hstatic.net/1000246396/product/ngua_master.jpg",
    gallery: [
      "https://myphamtocnam.com/images/attachment/5432sap-vuot-toc-hai-phong.jpg", 
      "https://bizweb.dktcdn.net/thumb/grande/100/113/970/files/blumaan-cavalier-jpg.jpg?v=1530780901311", 
      "https://down-vn.img.susercontent.com/file/c6b46d4e822bea7eb4cbc145609b4213"],
    category: "san-pham",
    description:
      "Blumaan Cavalier Clay là sản phẩm tạo kiểu tóc cao cấp với độ giữ nếp mạnh mẽ, giúp tạo kiểu linh hoạt và duy trì suốt cả ngày.",
    features: ["Giữ nếp mạnh", "Tạo độ phồng tự nhiên", "Không gây bết dính", "Thành phần dưỡng tóc"],
    specifications: {
      weight: "74g",
      origin: "Mỹ",
      holdLevel: "Cao",
      shineLevel: "Thấp",
      ingredients: "Beeswax, Kaolin, Bentonite, Castor Oil, etc.",
      expiry: "24 tháng kể từ ngày sản xuất",
    },
    usage: [
      "Lấy một lượng sáp nhỏ, xoa đều trong lòng bàn tay",
      "Vuốt đều lên tóc từ gốc đến ngọn",
      "Tạo kiểu theo ý muốn",
      "Có thể kết hợp với máy sấy để tối ưu hiệu quả",
    ],
    inStock: true,
    rating: 4.9,
    reviews: 150,
    isNew: true,
    isBestSeller: false,
  },
  ["3"]: {
    id: 3,
    name: "Sáp vuốt tóc By Vilain Gold Digger",
    price: "450,000đ",
    originalPrice: "490,000đ",
    image: "https://product.hstatic.net/1000246396/product/reuzel-fiber-pomade_945067b3694e41e992dde2e50eb2df82_master.jpg",
    gallery: [
      "https://product.hstatic.net/1000246396/product/reuzel-fiber-pomade_945067b3694e41e992dde2e50eb2df82_master.jpg", 
      "https://saptoc.vn/images/pomade-goc-nuoc/reuzel-fiber-2.jpg", 
      "https://tuongbarber.com/wp-content/uploads/Reuzel-Fiber-Pomade-4.jpg"],
    category: "san-pham",
    description:
      "By Vilain Gold Digger là dòng sáp cao cấp của Đan Mạch với khả năng giữ nếp cực tốt, giúp tạo kiểu sắc nét và linh hoạt.",
    features: ["Giữ nếp cực mạnh", "Không bóng", "Dễ dàng tạo texture", "Phù hợp mọi loại tóc"],
    specifications: {
      weight: "65g",
      origin: "Đan Mạch",
      holdLevel: "Cực cao",
      shineLevel: "Không bóng",
      ingredients: "Aqua, Ceteareth-25, PEG-7 Glyceryl Cocoate, etc.",
      expiry: "36 tháng kể từ ngày sản xuất",
    },
    usage: [
      "Lấy một lượng nhỏ và làm nóng trong lòng bàn tay",
      "Vuốt đều lên tóc khô hoặc hơi ẩm",
      "Tạo kiểu bằng tay hoặc lược",
      "Dùng thêm gôm xịt để giữ kiểu lâu hơn",
    ],
    inStock: true,
    rating: 4.7,
    reviews: 200,
    isNew: false,
    isBestSeller: true,
  },
  ["4"]: {
    id: 4,
    name: "Sáp vuốt tóc Loreal chính hãng",
    price: "450,000đ",
    originalPrice: "490,000đ",
    image: "https://product.hstatic.net/200000168861/product/1550461800-1075701924-sap-vu-t-toc-nam-loreal_a3dbab94182b43f081f70bd7e172127a.jpg",
    gallery: [
      "https://product.hstatic.net/200000168861/product/1550461800-1075701924-sap-vu-t-toc-nam-loreal_a3dbab94182b43f081f70bd7e172127a.jpg", 
      "https://vn-test-11.slatic.net/p/536a478e02d52d4e37a7261bddc6433d.jpg",
       "https://vonmart.vn/wp-content/uploads/2017/09/sap-loreal-mem.jpg"],
    category: "san-pham",
    description:
      "By Vilain Gold Digger là dòng sáp cao cấp của Đan Mạch với khả năng giữ nếp cực tốt, giúp tạo kiểu sắc nét và linh hoạt.",
    features: ["Giữ nếp cực mạnh", "Không bóng", "Dễ dàng tạo texture", "Phù hợp mọi loại tóc"],
    specifications: {
      weight: "65g",
      origin: "Đan Mạch",
      holdLevel: "Cực cao",
      shineLevel: "Không bóng",
      ingredients: "Aqua, Ceteareth-25, PEG-7 Glyceryl Cocoate, etc.",
      expiry: "36 tháng kể từ ngày sản xuất",
    },
    usage: [
      "Lấy một lượng nhỏ và làm nóng trong lòng bàn tay",
      "Vuốt đều lên tóc khô hoặc hơi ẩm",
      "Tạo kiểu bằng tay hoặc lược",
      "Dùng thêm gôm xịt để giữ kiểu lâu hơn",
    ],
    inStock: true,
    rating: 4.7,
    reviews: 200,
    isNew: false,
    isBestSeller: true,
  },
  ["5"]: {
    id: 5,
    name: "Gôm xịt tóc Butterfly Shadow 600ml",
    price: "89.000đ",
    originalPrice: "120.000đ",
    image: "https://waxforman.com/public/manipulate/800x800/shopping-product-images/1695059811-gom-xit-toc-butterfly-shadow-600ml-01.jpg",
    gallery: [
      "https://waxforman.com/public/manipulate/800x800/shopping-product-images/1695059811-gom-xit-toc-butterfly-shadow-600ml-01.jpg",
      "https://waxforman.com/public/manipulate/800x800/shopping-product-images/1695059813-gom-xit-toc-butterfly-shadow-600ml-02.jpg",
      "https://waxforman.com/public/manipulate/800x800/shopping-product-images/1695059813-gom-xit-toc-butterfly-shadow-600ml-03.jpg"
    ],
    category: "san-pham",
    description: "Gôm xịt tóc Butterfly Shadow 600ml cho hiệu năng giữ nếp cực mạnh, không bóng, dễ tạo kiểu, phù hợp với mọi loại tóc.",
    features: [
      "Giữ nếp cực mạnh",
      "Không bóng",
      "Dễ dàng tạo texture",
      "Phù hợp mọi loại tóc"
    ],
    specifications: {
      weight: "600ml",
      holdLevel: "Cực cao",
      shineLevel: "Không bóng"
    },
    usage: [
      "Lắc đều trước khi sử dụng",
      "Xịt lên tóc từ khoảng cách 20-30cm",
      "Dùng tay hoặc lược để tạo kiểu theo ý muốn"
    ],
    inStock: true,
    rating: 4.7,
    reviews: 200,
    isBestSeller: true
  },
  ["6"]: {
    id: 6,
    name: "Tinh Dầu Dưỡng Tóc Hư Tổn Aurane Softliss Fantastic Repair Hair Oil 125ml",
    price: "120.000đ",
    originalPrice: "150.000đ",
    image: "https://down-vn.img.susercontent.com/file/6a5ac1d3efc5434f30f304c28b737818",
    gallery: [
      "https://down-vn.img.susercontent.com/file/6a5ac1d3efc5434f30f304c28b737818",
      "https://vn-live-01.slatic.net/p/9eb6effbbc2519994341fb7c841f4a9e.jpg",
      "https://product.hstatic.net/200000875945/product/16250f12b66277a95cdea88b77ced8f1_19666797c84945e5b87ade289d1b8179_master.jpg",
      "https://sg-live-01.slatic.net/p/964cc9ab70767958b050a1be96136110.jpg_525x525q80.jpg"
    ],
    category: "san-pham",
    description: "Tinh dầu dưỡng tóc giúp phục hồi tóc hư tổn, cung cấp độ ẩm và bảo vệ tóc khỏi tác động của nhiệt.",
    features: [
      "Dưỡng ẩm chuyên sâu",
      "Phục hồi tóc hư tổn",
      "Bảo vệ khỏi nhiệt và môi trường",
      "Không gây bết tóc"
    ],
    specifications: {
      weight: "125ml",
      origin: "Pháp",
      usageType: "Dưỡng tóc hằng ngày",
      ingredients: "Dầu Argan, Vitamin E, Keratin, Protein thực vật",
      expiry: "36 tháng kể từ ngày sản xuất"
    },
    usage: [
      "Lấy một lượng nhỏ ra tay",
      "Xoa đều lên tóc ẩm hoặc khô",
      "Dùng lược hoặc tay để phân bố đều",
      "Không cần xả lại với nước"
    ],
    inStock: true,
    rating: 4.8,
    reviews: 150,
    isBestSeller: true
  }
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
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  {product.rating} ({product.reviews} đánh giá)
                </span>
              </div>
            </div>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl font-bold text-red-600">{product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-100"
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 border-x">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:bg-gray-100">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <Button className="flex-1 bg-[#FF9900] hover:bg-[#FF8800]">THÊM VÀO GIỎ HÀNG</Button>
            </div>

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

