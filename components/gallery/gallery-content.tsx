"use client"

import { useState } from "react";
import Image from "next/image";
import { Tabs, Modal } from "antd";
import { type GalleryItem, type GalleryCategory, GALLERY_CATEGORIES } from "@/types/gallery";

const { TabPane } = Tabs;

const categories: GalleryCategory[] = GALLERY_CATEGORIES;

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Kiểu tóc Layer Nam",
    category: "hairstyles",
    image: "https://images.pexels.com/photos/3993441/pexels-photo-3993441.jpeg",
    date: ""
  },
  {
    id: 2,
    title: "Undercut Hiện Đại",
    category: "hairstyles",
    image: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/475761052_1115039756810163_4855753445220417015_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGBjZyaQe8c1ByaQ2XmEDzHyAKGC1qdrRvIAoYLWp2tG1IgRy1rZk8SVjoDnVL_PdxvYB0GTGV6X2lKbYnxMRxF&_nc_ohc=bFEZTyAaY88Q7kNvgHo_NwY&_nc_oc=Adjgw6PtdWMjDrSrkqjLukCtLxPlarerTV2U6XTNszldhQDz0sYSO5ANW2rEFudQ0qw&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=Ao-4sJ8-GJw7vSR2Z_pG5DQ&oh=00_AYAPDwCwRc3xT9suYZNJcuSzqPnZORDtIe9oJ1YNI-hdqQ&oe=67B1CA0B",
    date: ""
  },
  {
    id: 3,
    title: "Tóc duỗi",
    category: "services",
    image: "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/475859238_1116398826674256_5086978645693777769_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG5QJuGHT1GyVUzIQR1bPEQvRwdml9RsvK9HB2aX1Gy8oyYlCsWTM3W0En-WRKvKKFp6DKMs8MUqpCrNm6wvcGs&_nc_ohc=wQjjDAUb_PYQ7kNvgGiIDAI&_nc_oc=AdgpnjOnO8aclmmsfBV1HPyAcPrJ-R0lkzFssL4ZJCrbcRfI5EYdDbOksQfy1q6XqNc&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=AwkCboG5jETecz1SmSGMizH&oh=00_AYC9Kzc6iBAH8YMOd8yGrrczHvgxVEsJhCcaxt4HaTyEgQ&oe=67B10CFC",
    date: ""
  },
  {
    id: 4,
    title: "Salon Interior",
    category: "facility",
    image: "https://images.pexels.com/photos/3993440/pexels-photo-3993440.jpeg",
    date: ""
  },
  {
    id: 5,
    title: "Sự kiện khai trương",
    category: "events",
    image: "https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/476086317_1117073953273410_7761054473646250447_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFy36EdQRVbSZnfSBol6GC_KPL0vBTMT1Qo8vS8FMxPVB9p17Ph-DCjHmDOsbNWlXtHWoVZmhHF2J17_s2nDIXf&_nc_ohc=ug-I50kx0GIQ7kNvgEreKDn&_nc_oc=AdjG_ZDy5WpuWqVLOh3n4WUI5h63diS5ZT3YwOaMkxTC7ZWsPHy0zV-BtF06tDxWkt4&_nc_zt=23&_nc_ht=scontent.fsgn2-11.fna&_nc_gid=AAHvJryymL3nD_frTfU28Ss&oh=00_AYAWEnP2JNZxPJ9LAKBxCuGglRaqPAi9N6ym2jrowpypyw&oe=67B0CF22",
    date: ""
  },
  {
    id: 6,
    title: "Kiểu tóc Mohican",
    category: "hairstyles",
    image: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/475858953_1117050573275748_3819025569091862368_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGSyuMgOI_yaGnxMbB2Kn3SVeA0gHoIqzhV4DSAegirOEsAGWSkkxoX1djZzt73iTxqB2ToPj5mqHfFDimasoTM&_nc_ohc=HbCE7O1TAEQQ7kNvgGt1CbE&_nc_oc=Adhs_eVm1va9wkXs9XZVxsfA0rjsL-J81kNWp7s0h3dIoX5jI84E2hJYBW2rhBNLcAE&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=AJCCCsX6DFTq2jia9nXABWE&oh=00_AYC636dWK_1Le99b4g8WuMk9VB-UF5fas9r0nOttcKiOnQ&oe=67AF2610",
    date: ""
  },
  {
    id: 7,
    title: "Massage đầu",
    category: "services",
    image: "https://images.pexels.com/photos/3997997/pexels-photo-3997997.jpeg",
    date: ""
  },
  {
    id: 8,
    title: "Thiết bị hiện đại",
    category: "facility",
    image: "https://images.pexels.com/photos/1625833/pexels-photo-1625833.jpeg",
    date: ""
  },
  {
    id: 9,
    title: "Tóc uốn xoăn",
    category: "hairstyles",
    image: "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/475773890_1116391450008327_5212074522745214408_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFeRk3c86QSwywbDtFBEDIyU_qf4CN-UUVT-p_gI35RRR0GB3Bo-tFxpjAwEF0ISlyKrfYztSu5dybu7PNmsLS7&_nc_ohc=Omv1UWr_c7YQ7kNvgEdP2mw&_nc_oc=AdhCx0WL5SXNsAEu7f8VqYtlarEMWDHgudoNyQOOYGEEVpPNwSooVoe8N3cZuig76bU&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=AvKRjdO4jVDE1rDkaNUG0J8&oh=00_AYAabtGGWhfUlGeZLL-qUaX2SusC9m3b10Z7x-5osZ_oXw&oe=67B10B1C",
    date: ""
  },
  {
    id: 10,
    title: "Dịch vụ gội đầu thảo dược",
    category: "services",
    image: "https://images.pexels.com/photos/6621183/pexels-photo-6621183.jpeg",
    date: ""
  },
  {
    id: 11,
    title: "Sự kiện khuyến mãi",
    category: "events",
    image: "https://images.pexels.com/photos/3784307/pexels-photo-3784307.jpeg",
    date: ""
  },
  {
    id: 12,
    title: "Không gian sang trọng",
    category: "facility",
    image: "https://images.pexels.com/photos/3993244/pexels-photo-3993244.jpeg",
    date: ""
  },  
  {
    id: 12,
    title: "Quiff",
    category: "hairstyles",
    image: "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/471381351_1094097562237716_3253643860818613988_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHlFBHEu4Lk2wXLT0PDm4YJuhe1BpKTAaa6F7UGkpMBpr2geAuywV6V4Q9zENajnMo4hWKr_qXjFw8iuK9CvYhN&_nc_ohc=eRMH-ErVJS4Q7kNvgE0tZ3R&_nc_oc=AdhpxjswwUOd707ZrJXs41fGlfVz_PEZ020kRWG7mysaepbP8mSRyGK6Cks1kYgxZvE&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=A2U_md614vAqKckaugtB8hj&oh=00_AYCeEudgKKQhfs6tsX8DKcHIha5JikHr27IRoKRyxgFq0Q&oe=67B1E9A2",
    date: ""
  },  
];

export default function GalleryContent() {
  const [selectedTab, setSelectedTab] = useState("all");
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  const filteredItems = selectedTab === "all" ? galleryItems : galleryItems.filter((item) => item.category === selectedTab);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">GALLERY</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Khám phá không gian và dịch vụ của Min's Hair & Skin qua những hình ảnh ấn tượng.
        </p>
      </div>

      <Tabs activeKey={selectedTab} onChange={setSelectedTab} className="w-full">
        {categories.map((category) => (
          <TabPane tab={category.label} key={category.value} />
        ))}
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="cursor-pointer" onClick={() => setSelectedImage({ src: item.image, title: item.title })}>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
            </div>
            <h3 className="mt-2 text-sm font-medium text-center">{item.title}</h3>
          </div>
        ))}
      </div>

      <Modal visible={!!selectedImage} onCancel={() => setSelectedImage(null)} footer={null} centered>
        {selectedImage && (
          <div className="space-y-4 text-center">
            <Image src={selectedImage.src || "/placeholder.svg"} alt={selectedImage.title} width={500} height={350} />
            <h3 className="text-lg font-medium">{selectedImage.title}</h3>
          </div>
        )}
      </Modal>
    </div>
  );
}
