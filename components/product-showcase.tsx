"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { GetProducts } from "@/api/api";
import { useRouter } from "next/navigation";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function ProductShowcase() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [getProducts, setGetProducts] = useState<Product[]>([]);
  const router = useRouter();

  // Fetch API
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const data = await GetProducts();
        if (isMounted) setGetProducts(data.slice(0, 10));
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  // Scroll function
  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-extrabold bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 text-transparent 
             tracking-wide drop-shadow-lg shadow-xl font-poppins">
  HAIR SALON CHÍNH STORE - SỐ 1 VỀ MỸ PHẨM NAM
</h2>

          <Link
            href="#"
            className="text-orange-500 hover:underline font-medium transition-colors duration-300"
          >
            XEM TẤT CẢ →
          </Link>
        </div>
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4 transition-all duration-500"
          >
            {getProducts.map((product) => (
              <Card
                key={product.id}
                className="bg-white border border-gray-200 flex-shrink-0 w-[280px] snap-start rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <CardContent className="p-4">
                  <div className="aspect-square relative mb-4 flex items-center justify-center rounded-lg overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="object-cover transition-all duration-300 hover:scale-110"
                    />
                  </div>
                  <h3 className="font-semibold text-center text-gray-800 mb-3 h-12 line-clamp-2 hover:text-orange-500 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <div className="flex justify-center">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-1 rounded-full font-bold shadow-md">
                      {product.price}.000₫
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
