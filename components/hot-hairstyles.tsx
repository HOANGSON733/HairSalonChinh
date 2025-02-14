"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { TikTokEmbed } from "./tiktok/page";
import { TikTokThumbnail } from "./thumb/tiktokthumbnail";

export default function HotHairstyles() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [likesData, setLikesData] = useState<{ [key: string]: { likes: number; title: string } }>({});

  const updateLikes = (videoId: string, likes: number, title: string) => {
    setLikesData((prev) => ({
      ...prev,
      [videoId]: { likes, title },
    }));
  };

  const truncateTitle = (title: string, maxLength = 50) => {
    return title.length > maxLength ? `${title.slice(0, maxLength)}...` : title;
  };

  const hairstyles = [
    { stylist: "Hair Salon Chính", idtiktok: "7469067520276778258" },
    { stylist: "Hair Salon Chính", idtiktok: "7092765258560916763" },
    { stylist: "Hair Salon Chính", idtiktok: "7366887566626262290" },
    { stylist: "Hair Salon Chính", idtiktok: "7459824141475024135" },
    { stylist: "Hair Salon Chính", idtiktok: "7444059899396427026" },
    { stylist: "Hair Salon Chính", idtiktok: "7470091900553317640" },
    { stylist: "Hair Salon Chính", idtiktok: "7456781608742391047" },
    { stylist: "Hair Salon Chính", idtiktok: "7427487984116649223" },
  ];

  return (
    <section className="py-10 bg-gradient-to-b from-zinc-900 to-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {hairstyles.map((style, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedImage(style)}
            >
              <div className="relative overflow-hidden rounded-xl">
                <TikTokThumbnail
                  videoId={style.idtiktok}
                  onDataFetched={(likes, title) => updateLikes(style.idtiktok, likes, title)}
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/80 transition-opacity duration-300 flex flex-col justify-end p-3">
                  <h3
                    className="text-white font-semibold text-base md:text-lg mb-1 truncate"
                    title={likesData[style.idtiktok]?.title || "Đang tải..."} // Tooltip hiển thị tiêu đề đầy đủ
                  >
                    {truncateTitle(likesData[style.idtiktok]?.title || "Đang tải...")}
                  </h3>
                  <p className="text-gray-300 text-xs md:text-sm mb-2">Stylist: {style.stylist}</p>
                  <div className="flex items-center text-white gap-2 text-sm md:text-base">
                    {likesData[style.idtiktok]?.likes?.toLocaleString() || "Đang tải..."} ❤️
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-3xl w-full bg-black/95 border-zinc-800 p-6">
            <div className="relative flex flex-col items-center justify-center">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition"
              >
                <X size={24} />
              </button>
              <div className="w-full flex justify-center">
                <TikTokEmbed videoId={selectedImage?.idtiktok} />
              </div>
              <div className="mt-4 w-full text-center">
                <h4
                  className="text-lg font-bold text-white truncate"
                  title={likesData[selectedImage?.idtiktok]?.title || "Đang tải..."}
                >
                  {truncateTitle(likesData[selectedImage?.idtiktok]?.title || "Đang tải...")}
                </h4>
                <p className="text-gray-300 text-sm">Stylist: {selectedImage?.stylist}</p>
                <p className="text-white mt-2 text-sm md:text-base">
                  {likesData[selectedImage?.idtiktok]?.likes?.toLocaleString() || "Đang tải..."} ❤️
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
