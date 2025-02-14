"use client"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Image } from 'antd';
const products = [
  {
    id: 1,
    name: "Mohican – Gọn gàng, nam tính",
    image: "https://beautyx.vn/blog/wp-content/uploads/2023/08/cat-toc-mohican-ngan-dep.jpeg",
    category: "kieu-toc",
  },
  {
    id: 2,
    name: "Layer – Tự nhiên, thư sinh",
    image: "https://file.hstatic.net/1000284478/file/uon-toc-layer-nam-1_516938ec6af04fbf8ce010cf45de2ddc.png",
    category: "kieu-toc",
  },
  {
    id: 3,
    name: "Undercut – Lịch lãm, mạnh mẽ",
    image: "https://i.ytimg.com/vi/WsCek0JwMW8/maxresdefault.jpg",
    category: "kieu-toc",
  },
  {
    id: 4,
    name: "Pompadour – Phong cách quý ông",
    image: "https://file.hstatic.net/200000053174/file/pompadour_la_gi_dc0c8e7184b94786b22353aa4a92a79d.png",
    category: "kieu-toc",
  },
  {
    id: 5,
    name: "Side Part – Cổ điển, lịch lãm",
    image: "https://storage.googleapis.com/ops-shopee-files-live/live/shopee-blog/2023/09/a1af1b9d-toc-side-part-ru-2.jpg",
    category: "kieu-toc",
  },
  {
    id: 13,
    name: "Side Swept – Bay bổng, lãng tử",
    image: "https://barbershopvutri.com/wp-content/uploads/2020/10/quiff-side-swept.jpg",
    category: "kieu-toc",
  },
  {
    id: 6,
    name: "Mullet – Cá tính, nổi bật",
    image: "https://phongbvb.com/upload/447213463-849910497181559-4959832784633140710-n.jpg?v=1.0.0",
    category: "kieu-toc",
  },
  {
    id: 7,
    name: "Buzz Cut – Ngắn gọn, nam tính",
    image: "https://tiki.vn/blog/wp-content/uploads/2023/01/GhO-9UpoeY6RLH1kV5tyml0BFKLI7yI_peejsyFbBUlOXZguWhZDDKfesXt51eBJMnm0a5ytskbnE8j4WIZXD554q934OBf4VBRe1UO02L3QmZiwq22RQamHRgfhdJlFotxPuNZN8Gi-Ue8wjuc9nOCJdZ8NRoR-ckKG8fH2-yAgcwBiIAeRdktv7LVUzA.png",
    category: "kieu-toc",
  },
  {
    id: 8,
    name: "French Crop – Cổ điển, trẻ trung",
    image: "https://cdn.diemnhangroup.com/2022/11/toc-crop-11.jpg",
    category: "kieu-toc",
  },
  {
    id: 9,
    name: "Crew Cut – Đơn giản, mạnh mẽ",
    image: "https://www.elleman.vn/wp-content/uploads/2018/10/17/kieu-toc-crew-cut-3-elle-man.jpg",
    category: "kieu-toc",
  },
  {
    id: 10,
    name: "Quiff – Hiện đại, cuốn hút",
    image: "https://file.hstatic.net/200000053174/file/mat_vuong_db1fe6a2a7a14bdfb553ad119dfe2992.png",
    category: "kieu-toc",
  },
  {
    id: 11,
    name: "Caesar – Cổ điển, nam tính",
    image: "https://mcdn.coolmate.me/image/July2023/kieu-toc-caesar-1.jpg",
    category: "kieu-toc",
  },
  {
    id: 12,
    name: "Faux Hawk – Phá cách, ấn tượng",
    image: "https://i.pinimg.com/550x/c7/b9/b1/c7b9b11c46999c1e4d8859b278ca664a.jpg",
    category: "kieu-toc",
  }
];


interface ProductGridProps {
  category: string
}

export default function ProductGrid({ category }: ProductGridProps) {
  const [sortBy, setSortBy] = useState("newest")
  const [filter, setFilter] = useState("")
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState("")

  const filteredProducts = products.filter(product => 
    (category === "all" || product.category === category) && 
    (!filter || product.name.toLowerCase().includes(filter.toLowerCase()))
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortBy === "newest") {
      return b.id - a.id; // Sort by id for newest first
    } else if (sortBy === "name-asc") {
      return a.name.localeCompare(b.name); // Sort by name ascending
    } else if (sortBy === "name-desc") {
      return b.name.localeCompare(a.name); // Sort by name descending
    }
    return 0; // No sorting if no option selected
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
            <SelectItem value="newest">Mới nhất</SelectItem>
            <SelectItem value="name-asc">Tên A-Z</SelectItem>
            <SelectItem value="name-desc">Tên Z-A</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sortedProducts.map(product => (
          <Card className="group hover:shadow-lg transition-shadow duration-300" key={product.id}>
            <CardContent className="p-0">
              <div className="relative aspect-square mb-4 ">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="object-contain transition-transform "
                  onClick={() => handleImageClick(product.image)} // Mở Modal khi nhấn vào hình ảnh
                />
              </div>
              <h3 className="font-medium text-center mb-2 group-hover:text-[#FF9900] transition-colors">
                {product.name}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal để hiển thị hình ảnh lớn */}
      
      
    </div>
  )
}
