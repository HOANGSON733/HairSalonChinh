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
    name: "Nail đính đá sang trọng",
    image: "/nail-3.png",
    category: "mong-tay",
  },
  {
    id: 2,
    name: "Nail màu pastel nhẹ nhàng",
    image: "/nail-1.jpg",
    category: "mong-tay",
  },
  {
    id: 3,
    name: "Nail họa tiết tối giản",
    image: "/nail-2.jpg",
    category: "mong-tay",
  },
  {
    id: 4,
    name: "Nail ombre thời thượng",
    image: "/nail-4.jpg",
    category: "mong-tay",
  },
  {
    id: 5,
    name: "Nail chân classic",
    image: "/nail-5.webp",
    category: "mong-chan",
  },
  {
    id: 6,
    name: "Nail chân đính đá quý phái",
    image: "/nail-6.jpg",
    category: "mong-chan",
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
            <SelectItem value="mong-tay">Nail Móng Tay</SelectItem>
            <SelectItem value="mong-chan">Nail Móng Chân</SelectItem>
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
