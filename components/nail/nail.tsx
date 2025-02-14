"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Image } from "antd";

const products = [
  {
    id: 1,
    name: "Phòng phun xăm chuyên nghiệp",
    image: "/phun-xam.jpg",
    category: "phong-phun-xam",
  },
  {
    id: 2,
    name: "Chân mày phong thủy - Tài lộc & May mắn",
    image: "/phun-may.jpg",
    category: "phun-may",
  },
  {
    id: 3,
    name: "Chân mày - Trước & Sau khi phun xăm",
    image: "/phun-may-1.jpg",
    category: "phun-may",
  },
  {
    id: 4,
    name: "Chân mày sắc nét tự nhiên",
    image: "/phun-may-2.jpg",
    category: "phun-may",
  },
  {
    id: 5,
    name: "Chân mày thanh tú - Định hình khuôn mặt",
    image: "/phun-may-0.jpg",
    category: "phun-may",
  },
  {
    id: 6,
    name: "Chân mày Ombre - Công nghệ hiện đại",
    image: "/phun-may-3.jpg",
    category: "phun-may",
  },
  {
    id: 7,
    name: "Chân mày Shading - Mềm mại như sương",
    image: "/phun-may-4.jpg",
    category: "phun-may",
  },
  {
    id: 8,
    name: "Chân mày Phẩy sợi 9D siêu thực",
    image: "/phun-may-5.jpg",
    category: "phun-may",
  },
  {
    id: 9,
    name: "Chân mày Nữ hoàng - Tôn lên thần thái",
    image: "/phun-may-6.jpg",
    category: "phun-may",
  },
  {
    id: 10,
    name: "Chân mày Định vị chân dung",
    image: "/phun-may-7.jpg",
    category: "phun-may",
  },
  {
    id: 11,
    name: "Chân mày Châu Âu - Thanh lịch & Sang trọng",
    image: "/phun-may-8.jpg",
    category: "phun-may",
  },
  {
    id: 12,
    name: "Chân mày Nam thần - Phong cách mạnh mẽ",
    image: "/phun-may-9.jpg",
    category: "phun-may",
  },
  {
    id: 13,
    name: "Chân mày Lụa mịn - Tinh tế và quyến rũ",
    image: "/phun-may-10.jpg",
    category: "phun-may",
  },
  {
    id: 14,
    name: "Xăm môi Collagen - Mềm mịn tự nhiên",
    image: "/phun-moi.jpg",
    category: "phun-moi",
  },
  {
    id: 15,
    name: "Xăm môi Baby Lip - Hồng hào, căng mọng",
    image: "/phun-moi-1.jpg",
    category: "phun-moi",
  },
  {
    id: 16,
    name: "Xăm môi Candy Lips - Ngọt ngào quyến rũ",
    image: "/phun-moi-2.jpg",
    category: "phun-moi",
  },
  {
    id: 17,
    name: "Xăm môi Pha lê - Trong trẻo & Lấp lánh",
    image: "/phun-moi-3.jpg",
    category: "phun-moi",
  },
  {
    id: 18,
    name: "Xăm môi Tự nhiên - Nét đẹp không phai",
    image: "/phun-moi-4.jpg",
    category: "phun-moi",
  },
  {
    id: 19,
    name: "Xăm môi Tế bào gốc - Phục hồi & Dưỡng sâu",
    image: "/phun-moi-5.jpg",
    category: "phun-moi",
  },
];

interface ProductGridProps {
  category: string;
}

export default function ProductGrid({ category }: ProductGridProps) {
  const [filter, setFilter] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [sortBy, setSortBy] = useState("all");

  // Combined filtering logic for search and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      !filter || product.name.toLowerCase().includes(filter.toLowerCase());
    const matchesCategory = category === "all" || product.category === category;
    const matchesSortCategory =
      sortBy === "all" ||
      sortBy === "name-asc" ||
      sortBy === "name-desc" ||
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
    setSelectedImage(image);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedImage("");
  };

  return (
    <div>
      <div className="flex justify-between mb-6 px-2">
        <input
          type="text"
          placeholder="Tìm kiếm..."
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
            <SelectItem value="phong-phun-xam">Phòng phun xăm</SelectItem>
            <SelectItem value="phun-may">Phun mày</SelectItem>
            <SelectItem value="phun-moi">Phun môi</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <Card
            className="group hover:shadow-lg transition-shadow duration-300"
            key={product.id}
          >
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
  );
}
