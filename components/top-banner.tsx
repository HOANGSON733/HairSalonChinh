import Image from "next/image";
import Link from "next/link";

export default function TopBanner() {
  return (
    <div className="flex flex-wrap-reverse items-center justify-between bg-gradient-to-r from-yellow-500 to-black text-white px-4 md:px-8 py-3 rounded-lg w-full shadow-lg">
      {/* Tiêu đề Salon */}
      <div className="flex items-center px-2 md:px-4 py-2 font-bold text-xl md:text-2xl lg:text-5xl title">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-orange-500">
          HAIR SALON
        </span>
      </div>

      {/* Logo */}
      <div className="flex-shrink-0">
        <Link href={"/"}>
          <Image
            src="/Logo-1.png"
            width={100}
            height={100}
            className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
            alt="Hair Salon Academy Logo"
            priority
          />
        </Link>
      </div>

      {/* Tiêu đề Academy */}
      <div className="flex items-center px-2 md:px-4 py-2 font-bold text-xl md:text-2xl lg:text-5xl title">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-500">
          ACADEMY
        </span>
      </div>
    </div>
  );
}
