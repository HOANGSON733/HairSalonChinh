"use client";

import { useEffect, useState } from "react";
import { Image, Tabs, Modal } from "antd";
import { type GalleryCategory, GALLERY_CATEGORIES } from "@/types/gallery";
import { GetGallery } from "@/api/api";
import Masonry from "react-masonry-css";

const { TabPane } = Tabs;

type GalleryItem = {
  id: number;
  name: string;
  title: string;
  content: string;
  image: string;
  category: string;
  slug: string;
};

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default function GalleryContent() {
  const [selectedTab, setSelectedTab] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);
  const [GalleryPosts, setGalleryPosts] = useState<GalleryItem[]>([]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const data = await GetGallery();
        setGalleryPosts(data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu gallery:", error);
      }
    };
    fetchGallery();
  }, []);

  const filteredItems = selectedTab === "all" ? GalleryPosts : GalleryPosts.filter((item) => item.category === selectedTab);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">GALLERY</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Khám phá không gian và dịch vụ của Hair Salon Chính's qua những hình ảnh ấn tượng.
        </p>
      </div>

      <Tabs activeKey={selectedTab} onChange={setSelectedTab} className="w-full">
        <TabPane tab="Tất cả" key="all" />
        {GALLERY_CATEGORIES.map((category) => (
          <TabPane tab={capitalizeFirstLetter(category.label)} key={category.value} />
        ))}
      </Tabs>

      {/* Masonry Grid */}
      <Masonry
        breakpointCols={{ default: 4, 1100: 3, 768: 2, 480: 1 }}
        className="flex gap-4"
        columnClassName="masonry-column"
      >
        {filteredItems.map((item) => (
          <div key={item.id} className="mb-4 cursor-pointer" onClick={() => setSelectedImage({ src: item.image, title: item.title })}>
            <Image src={item.image || "/placeholder.svg"} alt={item.title} className="rounded-lg" />
            <h3 className="mt-2 text-sm font-medium text-center">{capitalizeFirstLetter(item.name)}</h3>
          </div>
        ))}
      </Masonry>
    </div>
  );
}
