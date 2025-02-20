"use client"; // Đánh dấu là Client Component

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Cắt & Tạo Kiểu Layer Premium",
    description: "Trải nghiệm dịch vụ cắt tóc layer đẳng cấp, mang đến phong cách hiện đại và phù hợp với khuôn mặt của bạn.",
    images: [
      "https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/cach-cat-toc-layer-tai-nha-3.jpg",
      "https://beautyx.vn/blog/wp-content/uploads/2022/09/cat-toc-layer-9.jpg",
      "https://example.com/image3.jpg",
    ],
    slug: "cat-tao-kieu-layer-premium",
  },
  {
    id: 2,
    title: "Nhuộm Màu Nghệ Thuật",
    description: "Khám phá bộ sưu tập màu nhuộm cao cấp, giúp bạn thể hiện phong cách riêng biệt và nổi bật.",
    images: [
      "https://ladystars.vn/wp-content/uploads/2017/11/toc-highlight-cau-vong.jpg",
      "https://yt.cdnxbvn.com/medias/hervietnam.com.vn/36/36738/co-gai-mac-ao-xam-toc-nhuom-nau-den-highlight-tim.jpg",
      "https://example.com/image4.jpg",
    ],
    slug: "nhuom-mau-nghe-thuat",
  },
  {
    id: 3,
    title: "Uốn Tóc Bồng Bềnh",
    description: "Mang đến mái tóc xoăn tự nhiên, bồng bềnh, tạo nét mềm mại và quyến rũ.",
    images: [
      "https://example.com/image5.jpg",
      "https://example.com/image6.jpg",
    ],
    slug: "uon-toc-bong-benh",
  },
];

export default function DetailService() {
  const { slug } = useParams(); // Dùng useParams thay cho useRouter

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return <p className="text-center text-red-500 text-xl">Dịch vụ không tồn tại</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 border-b pb-2">{service.title}</h1>

      <div className="flex flex-col gap-4">
        {service.images.map((image, index) => (
          <div key={index} className="rounded-lg overflow-hidden border">
              <Image
                src={image}
                alt={`${service.title} - Image ${index + 1}`}
                width={600}
                height={400}
                className="object-cover w-full cursor-pointer"
              />
          </div>
        ))}
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
