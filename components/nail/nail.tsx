"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Image } from "antd";
import { GetGallery } from "@/api/api";

interface Nail {
  id: number;
  name: string;
  image: string;
  category1: string;
}

interface NailGridProps {
  category1: string;
}

export default function NailGrid({ category1 }: NailGridProps) {
  const [filter, setFilter] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [nails, setNails] = useState<Nail[]>([]);
  const [sortBy, setSortBy] = useState("all");

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const data = await GetGallery();
        console.log("Dữ liệu từ API:", data);

        const filteredData = data.filter((product: Nail) => product.category1 === category1);
        console.log("Dữ liệu sau khi lọc:", filteredData);

        setNails(filteredData);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu gallery:", error);
      }
    };

    fetchGallery();
  }, [category1]);

  // Lọc dữ liệu dựa trên từ khóa tìm kiếm
  // const filteredProducts = nails.filter((product) =>
  //   product.name.toLowerCase().includes(filter.toLowerCase())
  // );
  const filteredProducts = nails.filter(
    (nails) =>
      (category1 === "nail" || nails.category1 === category1) &&
      (!filter || nails.name.toLowerCase().includes(filter.toLowerCase()))
  );

  // Sắp xếp dữ liệu
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "name-asc") return a.name.localeCompare(b.name);
    if (sortBy === "name-desc") return b.name.localeCompare(a.name);
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
      {/* Thanh tìm kiếm và sắp xếp */}
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
          </SelectContent>
        </Select>
      </div>

      {/* Grid hiển thị sản phẩm */}
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
