import React from "react";
import Link from "next/link";
import Image from "next/image";

type FloatingIconsProps = {
  facebookPage: string;
  zaloNumber: string;
  phoneNumber: string;
};

const FloatingIcons: React.FC<FloatingIconsProps> = ({
  facebookPage,
  zaloNumber,
  phoneNumber,
}) => {
  return (
    <div className="fixed bottom-2 right-2 md:bottom-4 md:right-4 flex flex-col gap-2 md:gap-3 z-50">
      {/* Facebook Messenger */}
      <Link
        href={`https://m.me/${facebookPage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
        <div className="flex items-center gap-2 bg-white rounded-full md:rounded-xl shadow-md p-2 md:p-3 hover:shadow-lg transition-all">
          <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10">
            <Image
              src="/messenger.png"
              alt="Messenger"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-gray-700">Chat Facebook</p>
            <p className="text-xs text-gray-500">(8h-22h)</p>
          </div>
        </div>
        <span className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity md:hidden">
          Chat Facebook
        </span>
      </Link>

      {/* Zalo */}
      <Link
        href={`https://zalo.me/${zaloNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
        <div className="flex items-center gap-2 bg-white rounded-full md:rounded-xl shadow-md p-2 md:p-3 hover:shadow-lg transition-all">
          <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10">
            <Image
              src="/Zalo.png"
              alt="Zalo"
              height={40}
              width={40}
              className="object-cover"
            />
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-gray-700">Chat Zalo</p>
            <p className="text-xs text-gray-500">(8h-22h)</p>
          </div>
        </div>
        <span className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity md:hidden">
          Chat Zalo
        </span>
      </Link>

      {/* Phone */}
      <Link href={`tel:${phoneNumber}`} className="group relative">
        <div className="flex items-center gap-2 bg-white rounded-full md:rounded-xl shadow-md p-2 md:p-3 hover:shadow-lg transition-all">
          <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10">
            <Image
              src="/phone1.png"
              alt="Phone"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-blue-600">{phoneNumber}</p>
            <p className="text-xs text-gray-500">(8h-22h)</p>
          </div>
        </div>
        <span className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity md:hidden">
          Gọi {phoneNumber}
        </span>
      </Link>
    </div>
  );
};

export default FloatingIcons;