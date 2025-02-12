"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function LookbookCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const lookbooks = [
    {
      title: "Hướng dẫn vuốt tóc layer tại nhà mà vẫn đẹp hoàn hảo",
      image: "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/473056233_1102216761425796_2856886105898076169_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=F-6SS0KFFBkQ7kNvgE-QY-h&_nc_oc=Adh6upLDp9rvrD6fPVerGE3GsRxenEZS9eOAslRp5TBQoH2rCHk3Aq3BF5paBrQGziQ&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=AEPUN_Es1f6v-wlUpFh1G_8&oh=00_AYABcnUtzRFcIJlL6I_s2OEJCkzqM0pkg2FWb4izRTiiyw&oe=67ACB80D",
    },
    {
      title: 'Bí quyết chăm sóc tóc Sport để anh em luôn "chuẩn men"',
      image: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/473028114_1102216748092464_6613441212207678512_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=qgMN4mmW4gcQ7kNvgER6Hn7&_nc_oc=Adjjnug2xUxUJQ4gg9xvLjSQiY7OGbp9W3sNs3nrayNadVt22A_ODc7DacYPm-Yo7-c&_nc_zt=23&_nc_ht=scontent.fsgn2-4.fna&_nc_gid=AeM-CJlVS_D31bN3nnssfdf&oh=00_AYB_Oipo94nA6F4XSmvj7HTGkTmXj5Zx1eJh_pbWrXk2Tw&oe=67ACECB6",
    },
    {
      title: "Quiff – Đối góc với chất hoài cổ",
      image: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/472667459_1102216751425797_893927868337013169_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=TH2ZJIykCl8Q7kNvgEtRc8Z&_nc_oc=AdjGjB6InGHbSrEF6AKloclCHpg8J-y2AzU53CLMC_hc5qZH7RmtsJRq3IXu29OWvTU&_nc_zt=23&_nc_ht=scontent.fsgn2-4.fna&_nc_gid=AB5ZaQyWzzkMSD9m4HKMlST&oh=00_AYBpxT5FCjxIlumV_kxXMiDLLwO03oWNrcytOWGqmKNBKQ&oe=67ACB7A5",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % lookbooks.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + lookbooks.length) % lookbooks.length);
  };

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Chuyển slide mỗi 5 giây
    return () => clearInterval(interval); // Clear khi unmount
  }, []);

  return (
    <section className="py-16 bg-zinc-900">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          LOOKBOOK THỜI TRANG{" "}
          <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">
            HAIR SALON CHÍNH
          </span>
        </h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {lookbooks.map((item, index) => (
                <div
                  key={index}
                  className={`w-full flex-shrink-0 px-4 ${
                    index === currentSlide
                      ? "scale-105 shadow-lg"
                      : "scale-100 opacity-75"
                  } transition-all duration-500`}
                >
                  <Card className="bg-zinc-800">
                    <CardContent className="p-0">
                      <div className="relative aspect-video">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover rounded-t"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-white font-bold text-xl">{item.title}</h3>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          {/* Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {lookbooks.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide
                    ? "bg-white scale-125"
                    : "bg-gray-500 opacity-75"
                } transition-all duration-300`}
                onClick={() => setCurrentSlide(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
