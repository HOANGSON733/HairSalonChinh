"use client"

import { useState } from "react";
import Image from "next/image";
import { Heart, TrendingUp, Clock, X } from 'lucide-react';
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { IconType } from "recharts/types/component/DefaultLegendContent";
type FilterButtonProps = {
  label: string;
  value: string;
  icon: IconType;
};
export default function HotHairstyles() {
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState("all");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const hairstyles = [
    {
      image: "https://phongbvb.com/upload/anh-cu/z3414115788539-8881bf359dda96d98d7d6f9552688e00.jpg?v=1.0.0",
      likes: 2239,
      title: "Layer Hàn Quốc",
      stylist: "Tony Đặng"
    },
    {
      image: "https://ecolchi.com/wp-content/uploads/2024/10/image10-2.png",
      likes: 1957,
      title: "Side Part Cổ Điển",
      stylist: "David Vũ"
    },
    {
      image: "https://barber-shop.vn/wp-content/uploads/2021/12/toc-nam-dep-2022-69.jpg",
      likes: 881,
      title: "Undercut Hiện Đại",
      stylist: "Ken Nguyễn"
    },
    {
      image: "https://phongbvb.com/upload/z5559656476115-fd7d2feff599e229ca02ac385d882f63.jpg?v=1.0.0",
      likes: 565,
      title: "Mohawk Cách Điệu",
      stylist: "Alex Trần"
    },
    {
      image: "https://ecolchi.com/wp-content/uploads/2024/10/image13-2.png",
      likes: 3000,
      title: "Two-Block Cut",
      stylist: "Henry Phạm"
    },
    {
      image: "https://hagona.com/upload/images/Tin%20t%E1%BB%A9c/kieu-toc-uon-nam-3.jpg",
      likes: 250,
      title: "Uốn Xoăn Nhẹ",
      stylist: "Tommy Hoàng"
    },
    {
      image: "https://image-us.24h.com.vn/upload/1-2021/images/2021-03-26/Nhung-kieu-toc-side-part-ru-dep-phong-cach-hot-nhat-hien-nay-toc-side-part-ru-1-1616724021-411-width600height461.jpg",
      likes: 600,
      title: "Side Part Vuốt Rũ",
      stylist: "Kevin Lê"
    },
    {
      image: "https://yt.cdnxbvn.com/medias/hervietnam.com.vn/36/36961/kieu-toc-side-part-vuot-ru-truyen-thong.jpg",
      likes: 1000,
      title: "Classic Pompadour",
      stylist: "Ryan Trương"
    },
  ];

  const filteredHairstyles = hairstyles.filter((style) => {
    if (filter === "popular") return style.likes > 1000;
    if (filter === "recent") return style.likes <= 1000;
    return true;
  });

  const FilterButton = ({label, value, icon :Icon }:any) => (
    <button
      className={`py-2 px-6 rounded-full flex items-center gap-2 transition-all duration-300 ${
        filter === value 
          ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg" 
          : "bg-zinc-800 text-gray-400 hover:bg-zinc-700"
      }`}
      onClick={() => setFilter(value)}
    >
      <Icon size={18} />
      {label}
    </button>
  );

  return (
    <section className="py-16 bg-gradient-to-b from-zinc-900 to-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold text-white bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            {showAll ? "Bộ Sưu Tập Kiểu Tóc" : "BXH Tóc Hot Tháng Này"}
          </h2>
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-2 text-yellow-500 hover:text-orange-500 transition-colors duration-300"
          >
            <span>{showAll ? "Trở Lại" : "Xem Tất Cả"}</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </button>
        </div>

        {showAll && (
          <div className="flex gap-4 mb-10 flex-wrap">
            <FilterButton label="Tất cả" value="all" icon={TrendingUp} />
            <FilterButton label="Nổi bật" value="popular" icon={Heart} />
            <FilterButton label="Gần đây" value="recent" icon={Clock} />
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredHairstyles.map((style, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index as any)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedImage(style as any)}
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={style.image}
                  alt={style.title}
                  width={400}
                  height={500}
                  className="h-auto w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 ${hoveredIndex === index ? 'opacity-100' : ''}`}>
                  <h3 className="text-white font-bold text-lg mb-1">{style.title}</h3>
                  <p className="text-gray-300 text-sm mb-2">Stylist: {style.stylist}</p>
                  <div className="flex items-center gap-2">
                    <Heart className="text-red-500" size={16} />
                    <span className="text-white text-sm">
                      {style.likes.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl bg-black/95 border-zinc-800">
            <div className="relative flex items-center justify-center min-h-[300px] md:min-h-[600px]">
              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-50"
              >
                <X size={24} />
              </button>

              {/* Main image */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={selectedImage?.image}
                  alt={selectedImage?.title}
                  width={800}
                  height={1000}
                  className="object-contain max-h-[80vh] animate-in fade-in zoom-in duration-200"
                />
              </div>

              {/* Image info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedImage?.title}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-gray-300">Stylist: {selectedImage?.stylist}</p>
                  <div className="flex items-center gap-2">
                    <Heart className="text-red-500" size={20} />
                    <span className="text-white">
                      {selectedImage?.likes.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}