"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";
export default function ProductShowcase() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      name: "Sáp Reuzel Clay Matte Pomade Không Bóng",
      price: "273,000đ",
      image:
        "https://bizweb.dktcdn.net/thumb/grande/100/141/195/products/26-6201b801-2d82-4b5f-a239-b9de6b61b367.jpg?v=1680093979630",
    },
    {
      name: "Sáp Reuzel Fiber Pomade Mềm Dẻo",
      price: "271,000đ",
      image:
        "https://down-vn.img.susercontent.com/file/sg-11134201-7qvdc-lhmzliftum0e00",
    },
    {
      name: "Sáp Reuzel Green Pomade Giữ Nếp Vừa",
      price: "228,000đ",
      image:
        "https://www.myphamtocnhapkhau.com/upload/products/b06131487b6d26800c9e7b172bdd9fc5.jpg",
    },
    {
      name: "Sáp Reuzel Blue Pomade Độ Bóng Cao",
      price: "243,000đ",
      image:
        "https://down-vn.img.susercontent.com/file/sg-11134201-7rdx8-lzj5mj5n6j7b3d",
    },
    {
      name: "Sáp vuốt tóc Loreal chính hãng",
      price: "79.000",
      image: "https://gatino.vn/wp-content/uploads/2020/10/sap-loreal.jpg",
    },
    {
      name: "Tinh dầu Aurane Softliss Fantastic Repair Hair Oil",
      price: "189.000đ",
      image:
        "https://gatino.vn/wp-content/uploads/2021/06/tinh-dau-aurane-softliss-fantastic-repair-hair-oil.jpg",
    },
    {
      name: "Gôm xịt tóc Tigi Bed Head 385ml chính hãng",
      price: "243.000đ",
      image: "https://tiendichshop.vn/wp-content/uploads/2020/03/gom-tigi-bed-head-1.jpg",
    },
  ];

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
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4"
          >
            {products.map((product, index) => (
              <Card
                key={index}
                className="bg-white border border-gray-200 flex-shrink-0 w-[280px] snap-start rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-4">
                  <div className="aspect-square relative mb-4 flex items-center justify-center rounded-lg overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-center text-gray-800 mb-3 h-12 line-clamp-2 hover:text-orange-500 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <div className="flex justify-center">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-1 rounded-full font-bold shadow-md">
                      {product.price}
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
