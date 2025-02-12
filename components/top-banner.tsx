import Image from "next/image"
export default function TopBanner() {
  return (
    <div>
       <Image src="http://thang1989.name.vn/web201933/wp-content/uploads/2020/07/banner-top.jpg" alt="Min's Hair & Skin" width={90} height={90} className="w-full" />
      {/* <div className="bg-gradient-to-r from-[#FF9900] to-[#FFB700] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-bold">MUA GÓI</span>
            <span className="bg-white text-[#FF9900] px-2 py-1 rounded font-bold">
              30SHINE TOPUP
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-bold">LÃI NGAY TỚI 2,5 TRIỆU ĐỒNG</span>
            <button className="bg-[#FFD700] text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition flex items-center gap-2">
              XEM NGAY
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
}
