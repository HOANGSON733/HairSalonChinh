"use client"
import { GetService } from "@/api/api";
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

type getService = {
  id: number;
  title: string;
  content1: string;
  image: string[]; // 🛠️ Mảng chứa nhiều ảnh
  description1: string;
  slug: string;
  excerpt?: string;
};

const MAX_LENGTH = 250; // Giới hạn ký tự mô tả

export default function ServiceContent() {
  const [getServices, setGetServices] = useState<getService[]>([]);

  useEffect(() => {
    const fetchDataService = async () => {
      try {
        const data = await GetService();
        setGetServices(data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu dịch vụ:", error);
      }
    };
    fetchDataService();
  }, []);

  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold text-gray-900">DỊCH VỤ CAO CẤP</h1>

      <div className="grid grid-cols-1 gap-12">
        {getServices.map((service) => (
          <article
            key={service.id}
            className="border-b border-gray-200 pb-12 hover:shadow-lg transition-shadow duration-300 rounded-xl p-6"
          >
            <Link href={`/dich-vu/${service.slug}`} className="group">
              <div className="grid grid-cols-2 gap-6 mb-6">
                {/* 🛠️ Hiển thị tối đa 2 ảnh từ mảng */}
                {service.image.slice(0, 2).map((img, index) => (
                  <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`${service.title} - Image ${index + 1}`}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FF9900] transition-colors">
                {service.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg text-justify break-words whitespace-pre-wrap">
                {service.content1.length > MAX_LENGTH
                  ? service.content1.substring(0, MAX_LENGTH) + "... "
                  : service.content1}
              </p>

            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
