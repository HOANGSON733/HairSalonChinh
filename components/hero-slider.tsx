"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    type: "hairstyle",
    content: {
      title: "TÓC UỐN CON SÂU",
      hashtags: "#TEXTURE #LAYER #MOHICAN",
      subtitle: "KIỂU TÓC DẪN ĐẦU",
      year: "XU HƯỚNG 2020",
      image: "slide-30s1.jpg",
    },
  },
  {
    id: 2,
    type: "promotion",
    content: {
      title: "SALON 30SHINE",
      subtitle: "MỞ CỬA TRỞ LẠI",
      description: "Để đẹp trai ngay khi hết dịch, anh hãy mua ngay",
      promotion: "GÓI TRẢ TRƯỚC TOPUP",
      subPromotion: "SIÊU ƯU ĐÃI CỦA 30SHINE NHÉ!",
      image: "slide-30s2.jpg",
    },
  },
  {
    id: 3,
    type: "secret",
    content: {
      mainText: "MUỐN ĐẸP TRAI",
      highlight: "ĐẾN 30SHINE",
      subtitle: "BÍ QUYẾT ĐẸP TRAI",
      description: "của Duy Mạnh và Đình Trọng\nTuyển thủ ĐTQG Việt Nam",
      image: "slide-30s3.jpg",
    },
  },
  {
    id: 3,
    type: "secret",
    content: {
      mainText: "MUỐN ĐẸP TRAI",
      highlight: "ĐẾN 30SHINE",
      subtitle: "BÍ QUYẾT ĐẸP TRAI",
      description: "của Duy Mạnh và Đình Trọng\nTuyển thủ ĐTQG Việt Nam",
      image: "slide-30s4.jpg",
    },
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden">
      <div
        className="h-full flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="relative w-full h-full flex-shrink-0">
            <Image
              src={slide.content.image || "/placeholder.svg"}
              alt={slide.type}
              fill
              className="object-cover"
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              currentSlide === index ? "w-8 sm:w-10 bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
