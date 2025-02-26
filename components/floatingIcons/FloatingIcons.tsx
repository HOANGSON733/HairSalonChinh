import React from "react";
import { FaFacebookMessenger, FaPhone } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
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
    <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50">
      {/* Facebook Messenger */}
      <Link
        href={`https://m.me/${facebookPage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <div className="flex items-center gap-3 bg-white rounded-xl shadow-md p-3 hover:shadow-lg transition-all">
          <div className="flex items-center justify-center w-10 h-10 ">
          <Image
                  src={"/messenger.png"}
                  alt={"Messenger"}
                  width={50}
                  height={50}
                  className="object-cover"
                />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">Chat Facebook</p>
            <p className="text-xs text-gray-500">(8h-22h)</p>
          </div>
        </div>
      </Link>

      {/* Zalo */}
      <Link
        href={`https://zalo.me/${zaloNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <div className="flex items-center gap-3 bg-white rounded-xl shadow-md p-3 hover:shadow-lg transition-all">
          <div className="flex items-center justify-center w-10 h-10 ">
          <Image
                  src={"/Zalo.png"}
                  alt={"Zalo"}
                  height={50}
                  width={50}
                  className="object-cover"
                />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">Chat Zalo</p>
            <p className="text-xs text-gray-500">(8h-22h)</p>
          </div>
        </div>
      </Link>

      {/* Phone */}
      <Link href={`tel:${phoneNumber}`} className="group">
        <div className="flex items-center gap-3 bg-white rounded-xl shadow-md p-3 hover:shadow-lg transition-all">
          <div className="flex items-center justify-center w-10 h-10 ">
          <Image
                  src={"/phone1.png"}
                  alt={"Messenger"}
                  width={60}
                  height={60}
                  className="object-cover"
                />
          </div>
          <div>
            <p className="text-sm font-medium text-blue-600">{phoneNumber}</p>
            <p className="text-xs text-gray-500">(8h-22h)</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FloatingIcons;
