import React from "react";
import { FaFacebook, FaFacebookMessenger, FaPhone } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import Link from "next/link";

type FloatingIconsProps = {
  facebookPage: string;
  zaloNumber: string;
  phoneNumber: string;
  facebook: string;
};

const FloatingIcons: React.FC<FloatingIconsProps> = ({
  facebookPage,
  zaloNumber,
  phoneNumber,
  facebook,
}) => {
  return (
    <div className="fixed bottom-2 right-2 md:bottom-4 md:right-4 flex flex-col gap-2 md:gap-3 z-50">
      {/* Facebook */}
      <Link
        href={`https://www.facebook.com/${facebook}`}
        rel="noopener noreferrer"
        target="_blank"
        className="group"
      >
        <div className="relative bg-white p-1.5 md:p-2.5 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-200 flex items-center justify-center w-10 h-10 md:w-14 md:h-14 border border-gray-200 group-active:scale-95">
          <FaFacebook className="text-blue-600 w-6 h-6 md:w-8 md:h-8" />
        </div>
      </Link>

      {/* Messenger */}
      <Link
        href={`https://m.me/${facebookPage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <div className="relative p-1.5 md:p-2.5 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-200 flex items-center justify-center w-10 h-10 md:w-14 md:h-14 border border-gray-200 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 group-active:scale-95">
          <FaFacebookMessenger className="text-white w-6 h-6 md:w-8 md:h-8" />
        </div>
      </Link>

      {/* Zalo */}
      <Link
        href={`https://zalo.me/${zaloNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <div className="relative bg-[#0573ff] p-1.5 md:p-2.5 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-200 flex items-center justify-center w-10 h-10 md:w-14 md:h-14 border border-gray-200 group-active:scale-95">
          <SiZalo className="text-white w-6 h-6 md:w-8 md:h-8" />
        </div>
      </Link>

      {/* Phone */}
      <Link
        href={`tel:${phoneNumber}`}
        className="group"
      >
        <div className="relative bg-white p-1.5 md:p-2.5 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-200 flex items-center justify-center w-10 h-10 md:w-14 md:h-14 border border-gray-200 group-active:scale-95">
          <div className="absolute inset-0 animate-ping bg-green-500 opacity-20 rounded-full" />
          <FaPhone className="text-green-500 w-6 h-6 md:w-8 md:h-8" />
        </div>
      </Link>
    </div>
  );
};

export default FloatingIcons;