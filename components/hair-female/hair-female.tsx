"use client"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Image } from 'antd';
const products = [
    {
      id: 1,
      name: "Tóc uốn gợn sóng mềm mại, quyến rũ",
      image: "https://cdn.tgdd.vn/Files/2023/01/11/1502709/80-kieu-toc-uon-dep-quyen-ru-phu-hop-cho-moi-khuon-mat-202301112152044628.jpg",
      category: "toc-uon",
    },
    {
      id: 2,
      name: "Tóc uốn nhẹ dịu dàng, nữ tính",
      image: "https://cdn.tgdd.vn/Files/2023/01/11/1502709/80-kieu-toc-uon-dep-quyen-ru-phu-hop-cho-moi-khuon-mat-202301112152206488.jpg",
      category: "toc-uon",
    },
    {
      id: 3,
      name: "Tóc uốn layer phân tầng bồng bềnh",
      image: "https://cdn.tgdd.vn/Files/2023/01/11/1502709/80-kieu-toc-uon-dep-quyen-ru-phu-hop-cho-moi-khuon-mat-202301112152508919.jpg",
      category: "toc-uon",
    },
    {
      id: 4,
      name: "Tóc uốn xoăn đuôi tầng tầng ấn tượng",
      image: "/Tóc uốn phân tầng xoăn nhiều phần đuôi ấn tượng.jpg",
      category: "toc-uon",
    },
    {
      id: 5,
      name: "Tóc uốn gợn sóng mạnh, sang trọng",
      image: "https://cdn.tgdd.vn/Files/2023/01/11/1502709/80-kieu-toc-uon-dep-quyen-ru-phu-hop-cho-moi-khuon-mat-202301112154150288.jpg",
      category: "toc-uon",
    },
    {
      id: 6,
      name: "Tóc ngắn uốn cụp đuôi thanh lịch",
      image: "https://cdn.tgdd.vn/Files/2023/01/11/1502709/80-kieu-toc-uon-dep-quyen-ru-phu-hop-cho-moi-khuon-mat-202301112155455857.jpg",
      category: "toc-uon",
    },
    {
      id: 7,
      name: "Tóc uốn hippie trẻ trung, cá tính",
      image: "https://cdn.tgdd.vn/Files/2023/01/11/1502709/80-kieu-toc-uon-dep-quyen-ru-phu-hop-cho-moi-khuon-mat-202301112156165467.jpg",
      category: "toc-uon",
    },
    {
      id: 8,
      name: "Tóc dài xoăn sóng mạnh đầy sức hút",
      image: "https://cdn.tgdd.vn/Files/2023/01/11/1502709/80-kieu-toc-uon-dep-quyen-ru-phu-hop-cho-moi-khuon-mat-202301120030102778.jpg",
      category: "toc-uon",
    },
    {
      id: 9,
      name: "Tóc layer duỗi tự nhiên thanh thoát",
      image: "https://file.hstatic.net/1000284478/file/duoi-toc-tu-nhien-5_8122ca3b7ea54f25be15f0f656c0a0e3.png",
      category: "toc-duoi",
    },
    {
      id: 10,
      name: "Mái duỗi tự nhiên nhẹ nhàng",
      image: "https://file.hstatic.net/1000284478/file/duoi-toc-tu-nhien-9_74c2508b7ad544ae979f14540de137c3.png",
      category: "toc-duoi",
    },
    {
      id: 11,
      name: "Tóc duỗi tự nhiên chuẩn salon",
      image: "https://file.hstatic.net/1000284478/file/duoi-toc-tu-nhien-6_00949ce5fa374a6daa4c3935e60a227f.png",
      category: "toc-duoi",
    },
    {
      id: 12,
      name: "Tóc duỗi bóng mượt kiêu sa",
      image: "https://storage.googleapis.com/ops-shopee-files-live/live/shopee-blog/2023/07/9a4b0d05-toc-duoi2.png",
      category: "toc-duoi",
    },
    {
      id: 13,
      name: "Tóc xoăn nhẹ phong cách Hàn Quốc",
      image: "https://media.comem.vn/uploads/2024/01/toc-xoan-han-quoc-nu-24.webp",
      category: "toc-uon",
    },
    {
      id: 14,
      name: "Tóc nhuộm nâu tây sang trọng",
      image: "/nhuom-1.jpg",
      category: "toc-nhuom",
    },
    {
      id: 15,
      name: "Tóc uốn kết hợp nhuộm thời thượng",
      image: "/uon-nhuom-1.jpg",
      category: "toc-nhuom",
    },
    {
      id: 16,
      name: "Tóc nhuộm móc light độc đáo",
      image: "/nhuom-moc-light-1.jpg",
      category: "toc-nhuom",
    },
    {
      id: 17,
      name: "Tóc nhuộm highlight tinh tế",
      image: "/nhuom-moc-light.jpg",
      category: "toc-duoi",
    },
    {
      id: 18,
      name: "Tóc nhuộm tông màu nổi bật",
      image: "/nhuom-2.jpg",
      category: "toc-nhuom",
    },
    {
      id: 19,
      name: "Tóc nhuộm màu ánh rêu sành điệu",
      image: "/nhuom-3.jpg",
      category: "toc-nhuom",
    },
  ];
  
interface ProductGridProps {
    category: string
  }
  
  export default function ProductGrid({ category }: ProductGridProps) {
    const [filter, setFilter] = useState("")
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [selectedImage, setSelectedImage] = useState("")
    const [sortBy, setSortBy] = useState("all")
  
    // Combined filtering logic for search and category
    const filteredProducts = products.filter(product => {
      const matchesSearch = !filter || product.name.toLowerCase().includes(filter.toLowerCase());
      const matchesCategory = category === "all" || product.category === category;
      const matchesSortCategory = sortBy === "all" || 
                                 (sortBy === "name-asc" || sortBy === "name-desc") || 
                                 product.category === sortBy;
      
      return matchesSearch && matchesCategory && matchesSortCategory;
    });
  
    // Sort the filtered products
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (sortBy === "name-asc") {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === "name-desc") {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });
  
    const handleImageClick = (image: string) => {
      setSelectedImage(image)
      setIsModalVisible(true)
    }
  
    const handleModalClose = () => {
      setIsModalVisible(false)
      setSelectedImage("")
    }
  
    return (
      <div>
        <div className="flex justify-between mb-6 px-2">
          <input 
            type="text" 
            placeholder="Tìm kiếm kiểu tóc..." 
            className="border px-2 py-1 rounded" 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
          />
          
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sắp xếp theo" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="all">Tất cả</SelectItem>
              <SelectItem value="name-asc">Tên A-Z</SelectItem>
              <SelectItem value="name-desc">Tên Z-A</SelectItem>
              <SelectItem value="toc-uon">Tóc uốn</SelectItem>
              <SelectItem value="toc-duoi">Tóc duỗi</SelectItem>
              <SelectItem value="toc-nhuom">Tóc nhuộm</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedProducts.map(product => (
            <Card className="group hover:shadow-lg transition-shadow duration-300" key={product.id}>
              <CardContent className="p-0">
                <div className="relative aspect-square mb-4">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="object-contain transition-transform"
                    onClick={() => handleImageClick(product.image)}
                  />
                </div>
                <h3 className="font-medium text-center mb-2 group-hover:text-[#FF9900] transition-colors">
                  {product.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }