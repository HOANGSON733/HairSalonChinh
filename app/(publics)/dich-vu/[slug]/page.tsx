"use client"; // Đánh dấu là Client Component

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GetService } from "@/api/api";

type ServiceType = {
  id: number;
  title: string;
  content1: string;
  image: string[]; // Danh sách ảnh
  description1: string;
  slug: string;
  excerpt?: string;
};

const MAX_LENGTH = 150; // Giới hạn số ký tự hiển thị của mô tả

export default function DetailService() {
  const [expanded, setExpanded] = useState(false);
  const [services, setServices] = useState<ServiceType[]>([]);
  const { slug } = useParams(); // Lấy slug từ URL

  useEffect(() => {
    const fetchDataService = async () => {
      try {
        const data = await GetService();
        setServices(data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu dịch vụ:", error);
      }
    };
    fetchDataService();
  }, []);

  // Tìm dịch vụ theo slug
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return <p className="text-center text-red-500 text-xl mt-10">Dịch vụ không tồn tại</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Tiêu đề dịch vụ */}
      <h1 className="text-3xl font-bold text-gray-900 mb-4 border-b pb-2">{service.title}</h1>

      {/* Hình ảnh dịch vụ */}
      <div className="flex flex-col gap-4">
        {service.image && service.image.length > 0 ? (
          service.image.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden border">
              <Image
                src={image}
                alt={`${service.title} - Image ${index + 1}`}
                width={600}
                height={400}
                className="object-cover w-full"
              />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Chưa có hình ảnh</p>
        )}
      </div>

      {/* Mô tả dịch vụ */}
      {service.description1 && (
        <p className="text-gray-700 text-lg mt-4 text-justify break-words">
          {expanded ? service.description1 : service.description1.substring(0, MAX_LENGTH) + "... "}
          {service.description1.length > MAX_LENGTH && (
            <button
              className="text-blue-500 hover:underline ml-2"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Thu gọn" : "Xem thêm"}
            </button>
          )}
        </p>
      )}

      {/* Nút quay lại danh sách dịch vụ */}
      <Link href="/dich-vu">
        <button className="mt-6 bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600 transition">
          Quay lại danh sách dịch vụ
        </button>
      </Link>
    </div>
  );
}
