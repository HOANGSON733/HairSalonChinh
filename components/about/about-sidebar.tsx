"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GetBlogs, GetProducts } from "@/api/api";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface News {
  id: number;
  title: string;
  image: string;
}

export default function AboutSidebar() {
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsData, newsData] = await Promise.all([
          GetProducts(),
          GetBlogs(),
        ]);

        console.log("Sản phẩm mới:", productsData);
        console.log("Bài viết mới:", newsData);

        setNewProducts(productsData);
        setNews(newsData);
      } catch (err) {
        setError("Không thể tải dữ liệu!");
        console.error("Lỗi khi lấy dữ liệu:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>⏳ Đang tải dữ liệu...</p>;
  if (error) return <p className="text-red-600">❌ {error}</p>;

  return (
    <div className="space-y-8">
      {/* SẢN PHẨM NỔI BẬT */}
      <section>
        <h2 className="text-lg font-bold bg-black text-white p-2 mb-4">
          SẢN PHẨM NỔI BẬT
        </h2>
        <div className="space-y-4">
          {newProducts.map((product) => (
            <Link
              href={`/stone/san-pham/${product.id}`}
              key={product.id}
              className="flex gap-4 group"
            >
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-sm group-hover:text-[#FF9900] transition-colors">
                  {product.name}
                </h3>
                <p className="text-red-600 font-bold">{product.price}đ</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* BÀI VIẾT LIÊN QUAN */}
      <section>
        <h2 className="text-lg font-bold bg-black text-white p-2 mb-4">
          BÀI VIẾT LIÊN QUAN
        </h2>
        <div className="space-y-4">
          {news.slice(0, 6).map((item) => (
            <Link
              href={`/blog/${item.id}`}
              key={item.id}
              className="flex gap-4 group"
            >
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-sm group-hover:text-[#FF9900] transition-colors">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
