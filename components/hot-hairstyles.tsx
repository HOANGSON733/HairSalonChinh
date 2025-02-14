"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { TikTokEmbed } from "./tiktok/page";
import { TikTokThumbnail } from "./thumb/tiktokthumbnail";

export default function HotHairstyles() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  // Lưu title & likes từ API TikTok
  const [likesData, setLikesData] = useState<{ [key: string]: { likes: number, title: string } }>({});

  const updateLikes = (videoId: string, likes: number, title: string) => {
    setLikesData((prev) => ({
      ...prev,
      [videoId]: { likes, title },
    }));
  };

  const hairstyles = [
    { stylist: "Hair Salon Chính", idtiktok: "7469067520276778258" },
    { stylist: "Hair Salon Chính", idtiktok: "7092765258560916763" },
    { stylist: "Hair Salon Chính", idtiktok: "7366887566626262290" },
    { stylist: "Hair Salon Chính", idtiktok: "7459824141475024135" },
    { stylist: "Hair Salon Chính", idtiktok: "7444059899396427026" },
    { stylist: "Hair Salon Chính", idtiktok: "7470091900553317640" },
    { stylist: "Hair Salon Chính", idtiktok: "7456781608742391047" },
    { stylist: "Hair Salon Chính", idtiktok: "7092765258560916763" },
    { stylist: "Hair Salon Chính", idtiktok: "7427487984116649223" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-zinc-900 to-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold text-lg mb-1">
                    {likesData[style.idtiktok]?.title || "Đang tải..."}
                  </h3>
                  <p className="text-gray-300 text-sm mb-2">Stylist: {style.stylist}</p>
                  <div className="flex items-center text-white gap-2">
                    {likesData[style.idtiktok]?.likes?.toLocaleString() || "Đang tải..."}❤️ 
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl bg-black/95 border-zinc-800">
            <div className="relative flex items-center justify-center min-h-[300px] md:min-h-[600px]">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-50"
              >
                <X size={24} />
              </button>

              <div className="relative w-full h-full flex items-center justify-center">
                <TikTokEmbed videoId={selectedImage?.idtiktok} />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <h4 className="text-xl font-bold text-white mb-2">
                  {likesData[selectedImage?.idtiktok]?.title || selectedImage?.title}
                </h4>
                <div className="flex justify-between items-center">
                  <p className="text-gray-300">Stylist: {selectedImage?.stylist}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-white">
                      {likesData[selectedImage?.idtiktok]?.likes?.toLocaleString() || "Đang tải..."} ❤️
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
