import Image from "next/image"
import { Phone } from "lucide-react"

export default function MainFooter() {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Left Section */}
          <div>
            <h3 className="text-2xl font-extrabold text-[#FF9900] mb-4">CÔNG TY CỔ PHẦN TMDV HAIR SALON CHÍNH</h3>
            <div className="space-y-2 text-gray-400">
              <p>Khu Phố 6 Thị Trấn Huyện Giồng Riềng Tỉnh Kiên Giang.</p>
              {/* <p>Số giấy chứng nhận kinh doanh: 010.7487.993</p> */}
              {/* <p>Ngày cấp: 08/06/2016</p> */}
              {/* <p>Nơi cấp: Sở kế hoạch và đầu tư TP Hà Nội</p> */}
              <p className="text-white font-bold mt-4">Giờ phục vụ 8:30 – 20:00 (kể cả thứ 7, CN)</p>
              <div className="flex items-center gap-2 text-[#FF9900] font-bold">
                <Phone className="w-6 h-6" />
                <span>0967100552 - 0334563798</span>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-end justify-between">
            <div className="flex gap-6">
              <Image src="https://banner2.cleanpng.com/20180806/kqb/c07e137ddab1fb6edea7ba4a68373205.webp" alt="Verified" width={120} height={50} className="object-contain transition-transform transform hover:scale-105 duration-200" />
              <Image src="https://cloudoffice.com.vn/assetmanager/liveEditer/dfgh%20gfdf.png" alt="DMCA" width={120} height={50} className="object-contain transition-transform transform hover:scale-105 duration-200" />
            </div>
            <div className="flex gap-6 mt-4">
              <Image src="https://banner2.cleanpng.com/20180604/gra/aa9na3zzj.webp" alt="Visa" width={70} height={45} className="object-contain transition-transform transform hover:scale-105 duration-200" />
              <Image src="https://img.lovepik.com/photo/45017/2951.jpg_wh860.jpg" alt="Mastercard" width={70} height={45} className="object-contain transition-transform transform hover:scale-105 duration-200" />
            </div>
            <p className="text-gray-400 text-sm mt-6">Copyright 2024 Hair Salon Chính , Inc. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
