"use client"; // Đánh dấu là Client Component

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GetService } from "@/api/api";

type ServiceType = {
  id: number;
  title: string;
  content: string;
  images: string[]; // Chỉnh lại để chứa danh sách ảnh
  description: string;
  slug: string;
  excerpt?: string;
};

export default function DetailService() {
  const [services, setServices] = useState<ServiceType[]>([]);
  const { slug } = useParams(); // Lấy slug từ URL

  useEffect(() => {
    const fetchDataService = async () => {
      try {
        const data = await GetService();
        setServices(data); // 🛠️ Đảm bảo GetService() trả về đúng dữ liệu
        console.log("Data", data);
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
      <h1 className="text-3xl font-bold text-gray-900 mb-4 border-b pb-2">{service.title}</h1>

      <div className="flex flex-col gap-4">
        {service?.images && service.images.length > 0 ? (
          service.images.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden border">
              <Image
                src={image}
                alt={`${service.title} - Image ${index + 1}`}
                width={600}
                height={400}
                className="object-cover w-full cursor-pointer"
              />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Chưa có hình ảnh</p>
        )}
      </div>
      <p className="text-gray-700 text-lg mt-4">{service.description}</p>

      <Link href="/dich-vu">
        <button className="mt-6 bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600 transition">
          Quay lại danh sách dịch vụ
        </button>
      </Link>
    </div>
  );
}
