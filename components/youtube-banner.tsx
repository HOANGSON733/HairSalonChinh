import { Youtube } from "lucide-react";

export default function YoutubeBanner() {
  return (
    <div className="bg-[#FF0000] text-white py-2">
      <div className="container mx-auto flex flex-col items-center gap-4 md:flex-row md:justify-between md:px-6">
        {/* Phần thông điệp */}
        <div className="flex items-center gap-2">
          <Youtube className="w-10 h-10 text-white animate-pulse" />
          <div>
            <div className="text-x font-bold uppercase">Subscribe</div>
            <div className="text-sm opacity-90">Để đẹp trai hơn mỗi ngày</div>
          </div>
        </div>

        {/* Nút đăng ký */}
        <a
          href="https://www.youtube.com/@AnhS%C6%A1nHayQu%C3%AAn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-2 bg-white text-[#FF0000] font-bold rounded-full shadow-md hover:bg-[#D70000] hover:text-white transition-all duration-300 transform hover:scale-105"
        >
          <Youtube className="w-5 h-5" />
          Đăng ký
        </a>
      </div>
    </div>
  );
}
