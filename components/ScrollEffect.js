// components/ScrollEffect.js
"use client"
import { useEffect } from 'react';

export default function ScrollEffect() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;

      // Tính tỷ lệ phần trăm cuộn
      const scrollPercentage = (scrollTop / maxScroll) * 100;

      // Cập nhật màu gradient của thanh cuộn dựa trên tỷ lệ cuộn
      const scrollbarThumb = document.querySelector('::-webkit-scrollbar-thumb');

      // Kiểm tra nếu có thanh cuộn và cập nhật gradient
      if (scrollbarThumb) {
        scrollbarThumb.style.backgroundImage = `linear-gradient(to bottom, #FF8C00 ${scrollPercentage}%, #FF4500 ${100 - scrollPercentage}%)`;
      }
    };

    // Lắng nghe sự kiện cuộn
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener khi component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null; // Component này không cần render gì cả
}
