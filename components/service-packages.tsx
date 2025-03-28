"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Crown } from "lucide-react"
import Link from "next/link"
const services = [
  {
    category: "uon",
    items: [
      {
        title: "Uốn Phông Tiêu Chuẩn",
        description: "TẠO KIỂU DỄ DÁNG VÀO NẾP NHANH CHÓNG",
        price: "260K",
        memberPrice: "234K",
        image: "/UỐNG PHỒNG.jpg",
      },
      {
        title: "Tạo Phông",
        description: "HIỆU QUẢ TRONG 15 NGÀY THAY ĐỔI KIỂU TÓC LINH HOẠT",
        price: "99K",
        image: "https://gatino.vn/wp-content/uploads/2021/10/tao-do-phong-giup-toc-dep-hon.jpg",
      },
      {
        title: "Uốn Cao Cấp",
        description: "BỔ SUNG COLLAGEN KERATIN SINH HỌC KHÔNG AMONIAC TÓC PHỒNG HÓA HẢO",
        price: "349K",
        memberPrice: "315K",
        image: "https://static.hotdeal.vn/images/1551/1550663/60x60/351226-combo-uonduoinhuomdap-phong-chan-tocphuc-hoi-keratinu-lua-nano-chuan-cao-cap-tai-hair-salon-chien-pro.jpg",
      },
      {
        title: "Premlock",
        description: "HOT TREND 2020 CĂN BẢN XU HƯỚNG VỚI KIỂU TÓC NHÀ VÔ ĐỊCH",
        price: "899K",
        memberPrice: "799K",
        image: "https://phongbvb.com/upload/premlock.jpg?v=1.0.1",
      },
    ],
  },
  {
    category: "nhuom",
    items: [
      {
        title: "Nhuộm Thời Trang",
        description: "MÀU NHUỘM HOT TREND, LÊN MÀU CHUẨN, KHÔNG HẠI TÓC",
        price: "500K",
        memberPrice: "450K",
        image: "https://lehair.com.vn/Uploads/Images/19-7.png",
      },
      {
        title: "Nhuộm Phủ Bạc",
        description: "CÔNG NGHỆ NHUỘM PHỦ BẠC AN TOÀN, KHÔNG GÂY HƯ TỔN",
        price: "400K",
        image: "https://chenglovehair.com.vn/wp-content/uploads/2023/03/FRAME-MAU-vuong-thuong-10.jpg",
      },
      {
        title: "Highlight",
        description: "NHUỘM ĐIỂM TẠO ĐỘ SÂU, TĂNG VẺ CÁ TÍNH",
        price: "600K",
        memberPrice: "540K",
        image: "https://ruza.vn/wp-content/uploads/2024/01/kieu-toc-nhuom-highlight.jpg",
      },
    ],
  },
  {
    category: "duoi",
    items: [
      {
        title: "Duỗi Tóc Cơ Bản",
        description: "ĐƯỢC DUỖI TÓC MỀM MẠI, DUỖI DÀI LÂU, KHÔNG HẠI TÓC",
        price: "500K",
        memberPrice: "450K",
        image: "https://jullienday.com/_next/image?url=https%3A%2F%2Fcdn.jullienday.com%2Fuploads%2Fall%2FoYLW0aVTJtsBcxu6uZsgUYmGkSUodhdPNQlsJODg.jpg&w=640&q=100",
      },
      {
        title: "Duỗi Tóc Công Nghệ Mới",
        description: "CÔNG NGHỆ DUỖI TÓC HIỆN ĐẠI, ĐẢM BẢO MÁI TÓC MƯỢT MÀ VÀ BỀN LÂU",
        price: "600K",
        memberPrice: "550K",
        image: "https://cdn.eva.vn/upload/1-2024/images/2024-01-18/ran-ran-cong-nghe-duoi-hoi-nuoc-cho-toc-bong-muot-mua-tet-chi-em-can-than-kheo-roi-bay-cua-salon-vv-1705596025-233-width780height780.png",
      },
      {
        title: "Duỗi Tóc Tạo Kiểu",
        description: "DUỖI TÓC KẾT HỢP VỚI KIỂU DÁNG MỚI, PHÙ HỢP VỚI MỌI DÁNG TÓC",
        price: "700K",
        memberPrice: "650K",
        image: "https://tiki.vn/blog/wp-content/uploads/2023/02/duoi-cup.jpg",
      },
    ],
  },
  {
    category: "khac",
    items: [
      {
        title: "Lấy Ráy Tai",
        description: "DỊCH VỤ LẤY RÁY TAI AN TOÀN, NHANH CHÓNG VÀ HIỆU QUẢ",
        price: "100K",
        image: "https://thanhnien.mediacdn.vn/Uploaded/tuyenld/2022_10_17/ray-tai-img-6352-4306.jpg",
      },
      {
        title: "Chăm Sóc Da Mặt",
        description: "DỊCH VỤ CHĂM SÓC DA MẶT ĐẢM BẢO DA SÁNG MỊN, MƯỢT MÀ",
        price: "300K",
        image: "https://medlatec.vn/media/13108/content/20201107_cach-cham-soc-da-mat-hang-ngay-1.jpg",
      },
      {
        title: "Phun Xăm Thẩm Mỹ",
        description: "DỊCH VỤ TẨY LÔNG AN TOÀN, HIỆU QUẢ, KHÔNG GÂY KÍCH ỨNG",
        price: "200K",
        image: "https://file.hstatic.net/200000579075/file/ly-thuyet-phun-xam-co-ban_c6af31e4fca649d6ba284963bb29ee29.jpg",
      },
      {
        title: "Chân Mày Phong Thủy",
        description: "DỊCH VỤ CHĂM SÓC TÓC TOÀN DIỆN, CUNG CẤP MỌI GIẢI PHÁP ĐỂ TÓC KHOẺ VÀ BÓNG MỊN",
        price: "350K",
        image: "https://happynuts.vn/wp-content/uploads/2023/03/I.-Dang-long-may-hop-phong-thuy-co-y-nghia-gi.jpg",
      },
      {
        title: "Gội Đầu",
        description: "DỊCH VỤ MASSAGE RELAX, GIÚP THƯ GIÃN CƠ THỂ VÀ TINH THẦN",
        price: "50K",
        image: "https://mediworld.vn/wp-content/uploads/2024/04/Goi-dau-massage-va-tac-dung-mang-lai-cho-co-the.jpg",
      }
    ]
  }


]

const packages = [
  {
    image: "/banenr-dv1.jpg",
  },
  {
    image: "/banenr-dv2.jpg",
  },
  {
    image: "/banenr-dv3.jpg",
  },
  {
    image: "/banenr-dv4.jpg",
  },
  {
    image: "/banenr-dv5.jpg",
  },
  {
    image: "/banenr-dv6.jpg",
  },
]

export default function ServicePackages() {
  return (
    <section className="py-16 bg-zinc-900">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8 p-2">
          <h2 className="text-3xl font-bold text-white">DỊCH VỤ TẠI <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">
            HAIR SALON CHÍNH
          </span>
          </h2>
          <Link href="/dich-vu" className="text-[#FF9900] hover:underline">
            XEM TẤT CẢ →
          </Link>
        </div>

        <Tabs defaultValue="combo" className="w-full" >
          <TabsList className="w-full justify-start mb-8 bg-transparent border-b border-zinc-800 h-auto flex-wrap">
            <TabsTrigger value="combo" className="text-zinc-400 px-6 py-4 rounded-lg">Combo</TabsTrigger>
            <TabsTrigger value="uon" className="text-zinc-400 px-6 py-4">Uốn</TabsTrigger>
            <TabsTrigger value="nhuom" className="text-zinc-400 px-6 py-4">Nhuộm</TabsTrigger>
            <TabsTrigger value="duoi" className="text-zinc-400 px-6 py-4">Duỗi</TabsTrigger>
            <TabsTrigger value="khac" className="text-zinc-400 px-6 py-4">Khác</TabsTrigger>
          </TabsList>

          {/* Tab Combo */}
          <TabsContent value="combo">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-2">
              {packages.map((pkg, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={pkg.image}
                    alt={`Combo ${index + 1}`}
                    width={300}
                    height={200}
                    className="object-cover w-full h-auto rounded"
                  />
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Tab Uốn */}
          <TabsContent value="uon">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.find((s) => s.category === "uon")?.items.map((service, index) => (
                <Card key={index} className="bg-zinc-800 border-0 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3]">
                      <Image src={service.image} alt={service.title} fill className="object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-bold mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-400 mb-4">{service.description}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-[#FF9900]">{service.price}</span>
                        {service.memberPrice && (
                          <div className="bg-zinc-900 px-2 py-1 rounded flex items-center gap-1">
                            <Crown className="w-4 h-4 text-[#FFD700]" />
                            <span className="text-sm text-white">{service.memberPrice}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Tab Nhuộm */}
          <TabsContent value="nhuom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.find((s) => s.category === "nhuom")?.items.map((service, index) => (
                <Card key={index} className="bg-zinc-800 border-0 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3]">
                      <Image src={service.image} alt={service.title} fill className="object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-bold mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-400 mb-4">{service.description}</p>
                      <span className="text-2xl font-bold text-[#FF9900]">{service.price}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          {/* Tag Duỗi */}
          <TabsContent value="duoi">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.find((s) => s.category === "duoi")?.items.map((service, index) => (
                <Card key={index} className="bg-zinc-800 border-0 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3]">
                      <Image src={service.image} alt={service.title} fill className="object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-bold mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-400 mb-4">{service.description}</p>
                      <span className="text-2xl font-bold text-[#FF9900]">{service.price}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          {/* Tag Khác */}
          <TabsContent value="khac">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {services.find((s) => s.category === "khac")?.items.map((service, index) => (
                <Card key={index} className="bg-zinc-800 border-0 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3]">
                      <Image src={service.image} alt={service.title} fill className="object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-bold mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-400 mb-4">{service.description}</p>
                      <span className="text-2xl font-bold text-[#FF9900]">{service.price}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

        </Tabs>
      </div>
    </section>
  )
}
