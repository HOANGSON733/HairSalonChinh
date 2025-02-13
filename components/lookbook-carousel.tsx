"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function LookbookCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const lookbooks = [
    {
      title: "Mừng khai trương",
      image: "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/462726658_2537131199805009_5756542208114390156_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFcwcgHLkui3Z6y7x1Z-_qbNaCHjLBDO7w1oIeMsEM7vPrTrzo4-eYfrmMo0IY0NjcCZT-NDWBG52WiFUyYJehY&_nc_ohc=4cmjy4NfsV0Q7kNvgHayoxS&_nc_oc=AdirgHywCo2zTvTInDicpx56CcvqJRCzxyqpkoKuq1WB1dI6pAqc3_2do07s-vDq5Ik&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=ANiv2DnDzxiDPcO2qPWkx1r&oh=00_AYDk4gAm2yDqgFh3FPqnsMFjV1qo8_lopwFKYPvamGf3Pg&oe=67B3D34A",
    },
    {
      title: 'Hỗ trợ khách hàng',
      image: "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/472750434_1102216701425802_1364118139467052191_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGbrcRTRY2fk75HES4y5vBq-ntB-9pJ4Sb6e0H72knhJqXLaco4tO2THPkr5iYH3CMUUqP0fKtjW_dl38nQC9xk&_nc_ohc=zDqTX6Kht2wQ7kNvgHPrgEw&_nc_oc=AdjmEH-ammQAdwWSAoQouVdz9atv98yNfdN28DUL99EMUJr3-Upa1ek1VrfMeozkZhk&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=AGPyrB8Wriww3M8qk-nZL5w&oh=00_AYDHQsqcHOacoC7-tdpaVpEeucN0P0qTfM80YNz87b8YWA&oe=67B3E4EF",
    },
    {
      title: "Liên hệ em để có nhiều tóc đẹp nha",
      image: "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/475745415_1116398923340913_6283978096070396617_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEeNGOusMEPu5z7ipy1UkKOV8mZq04ZkOVXyZmrThmQ5bEjmRBqJbfkumP-64flPYB3QX7fRQsnn62ENK4udZ9i&_nc_ohc=IisrdHWym3QQ7kNvgGTT_UY&_nc_oc=AdgalPLhYxdk_xB4PWaq7n-PtBgBmI9qNOeM5Q88V1pyH6-MxQ2k1WynEtJe34Ty614&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=AQl15lZZtO9JJN2sb4mLrLE&oh=00_AYDc23fZmUEauf7VjeLEhs_kcG9D409OTU-Obssjq79jLw&oe=67B4002C",
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
