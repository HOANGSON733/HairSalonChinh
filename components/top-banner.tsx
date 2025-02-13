import Image from "next/image"
export default function TopBanner() {
  return (
    // <div>
    //    <Image src="/banner-top.jpg" alt="Hair Salon Chinhs" width={90} height={90} className="w-full" />
    //   {/* <div className="bg-gradient-to-r from-[#FF9900] to-[#FFB700] text-white py-2 px-4">
    //     <div className="container mx-auto flex justify-between items-center">
    //       <div className="flex items-center gap-2">
    //         <span className="font-bold">MUA GÓI</span>
    //         <span className="bg-white text-[#FF9900] px-2 py-1 rounded font-bold">
    //           30SHINE TOPUP
    //         </span>
    //       </div>
    //       <div className="flex items-center gap-4">
    //         <span className="font-bold">LÃI NGAY TỚI 2,5 TRIỆU ĐỒNG</span>
    //         <button className="bg-[#FFD700] text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition flex items-center gap-2">
    //           XEM NGAY
    //           <span className="text-xl">→</span>
    //         </button>
    //       </div>
    //     </div>
    //   </div> */}
    // </div>
    <div className="flex flex-wrap items-center justify-between bg-gradient-to-r from-yellow-500 to-black text-white px-4 py-2 rounded-lg w-full">
    {/* Nút mua gói */}
    <div className="flex items-center bg-yellow-500 px-3 md:px-4 py-2 rounded-full text-black font-bold text-sm md:text-lg">
      MUA GÓI <span className="ml-1">30SHINE TOPUP</span>
    </div>

    {/* Nội dung chính */}
    <div className="text-sm md:text-lg font-semibold text-center w-full md:w-auto mt-2 md:mt-0">
      LÃI NGAY <span className="text-yellow-400">TỚI 2,5 TRIỆU ĐỒNG</span>
    </div>

    {/* Nút kêu gọi hành động */}
    <button className="bg-gradient-to-r from-yellow-500 to-orange-500 px-3 md:px-4 py-2 rounded-full font-bold text-black flex items-center mt-2 md:mt-0">
      XEM NGAY <span className="ml-2">»»</span>
    </button>
  </div>
  );
}
