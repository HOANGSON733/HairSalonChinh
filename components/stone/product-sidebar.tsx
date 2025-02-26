"use client";
import { GetProducts } from "@/api/api";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const categories = [
  { name: "Tất cả sản phẩm", href: "/stone/san-pham" },
  { name: "Kiểu tóc", href: "/stone/kieu-toc" },
  { name: "Chăm sóc tóc", href: "/stone/cham-soc-toc" },
  { name: "Chăm sóc da", href: "/stone/cham-soc-da" },
  { name: "Chăm sóc cơ thể", href: "/stone/cham-soc-co-the" },
];

type RelatedProduct = {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  slug: string;
};

export default function ProductSidebar() {
  const [getProducts, setGetProducts] = useState<RelatedProduct[]>([]);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const data = await GetProducts();
        if (isMounted) setGetProducts(data.slice(0, 5)); // Giới hạn 5 sản phẩm
        console.log("Data", data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-lg font-bold bg-black text-white p-2 mb-4">DANH MỤC SẢN PHẨM</h2>
        <div className="space-y-2">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="block px-4 py-2 hover:bg-gray-100 hover:text-[#FF9900] transition-colors rounded"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold bg-black text-white p-2 mb-4">SẢN PHẨM LIÊN QUAN</h2>
        <div className="space-y-4">
          {getProducts.map((product) => (
            <Link href={`/san-pham/${product.slug}`} key={product.id} className="flex gap-4 group">
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div>
                <h3 className="text-sm group-hover:text-[#FF9900] transition-colors line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-red-600 font-bold">{product.price}.000đ</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
