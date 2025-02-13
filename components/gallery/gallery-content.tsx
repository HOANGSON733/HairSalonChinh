"use client"

import { useState } from "react";
import { Image } from 'antd';
import { Tabs, Modal } from "antd";
import { type GalleryItem, type GalleryCategory, GALLERY_CATEGORIES } from "@/types/gallery";

const { TabPane } = Tabs;

const categories: GalleryCategory[] = GALLERY_CATEGORIES;

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Kiểu tóc Layer Nam",
    category: "hairstyles",
    image: "https://file.hstatic.net/1000284478/file/uon-toc-layer-nam-1_516938ec6af04fbf8ce010cf45de2ddc.png",
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
    image: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/476771196_1123830425931096_453136717137559003_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEyaEX0GzjtlrdR5G8sQxFayrxh3gws_X3KvGHeDCz9fW5egvsym4T2XywzxR0UlFafFy9hKUBcewoNuQRgjmEx&_nc_ohc=lXVSrlSMd2QQ7kNvgFbd-50&_nc_oc=Adj7zrHFqpCd-hF10JfH2lvuRQJs2sHcB7JK6ji4o3Q4OVVUfno8ZPJWi6n2zW_rOhk&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=ADeQOCQ83CxWfbdwOlOuW7K&oh=00_AYCffL3O3iPl-6g0KT9bLdzGmiWJ_sRUNp8Lv9Y2orwjXg&oe=67B21602",
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
    image: "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/449498247_2447596182091845_4354571207738612105_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHLOg9F36_I00ZKbt0jdwkCw15q_WNmNgLDXmr9Y2Y2AskOXgudXnsP5WMAqi1YgXIkbOw_LskkxYEYUTEoJWDt&_nc_ohc=HdYlCXoE1egQ7kNvgHLM5Wp&_nc_oc=AdgFGvRHXEzZXLEPeMvJO5_Zj4ItKjK0UGDBBp8BpVNY4Tr-KB3MrMpvTY6NPXjgwhI&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=A5rDx_8E0m9y9nRIgswCq7k&oh=00_AYAD_eajdLSptjFzWAJ0SRGMmO7Vvx2YQyMF_iDQml0Xsg&oe=67B21AAF",
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
    image: "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/402092930_2296625740522224_6205989509358852740_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHeHzoudyOP0V0hbQrbmHnlcinSTPV5uQJyKdJM9Xm5As8LxHGRTLnKC6LjiUvD3wC2d78wpYkquwT18GTIXznd&_nc_ohc=j-0MAqP-NsMQ7kNvgGX6BsP&_nc_oc=AdiJIpJs8Kc2xKIX0yResDL6UEs3-eF3a7j250v1P1yPYfk5tvoSZbpnnNanYn77ZkE&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=AvQ1w3vwz6qeyCWYslVII_o&oh=00_AYAK-xrTQvnG3qKHLikYhjCMz-sCoCNp_x59r56Hjp46dw&oe=67B24788",
    date: ""
  },
  {
    id: 12,
    title: "Không gian sang trọng",
    category: "facility",
    image: "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/478577436_1123819039265568_6352970398484582848_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHnAnBzPgwwQ__e4EC0zDmHBPf6YJznBgsE9_pgnOcGCwyfXwo-9GFLJ4-nizdweLqPqd0qWPN9ipSO1w-LRjUO&_nc_ohc=MEDxfz0vTA0Q7kNvgHnokmH&_nc_oc=AdjufFeqdLJoHqV6JfRVcDP-rzV34juuA87gnvmGZ8QKTcdOiOhwJZnvHp9t5DEsDJg&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=AA2__JottHeh6CyNwy5AYFl&oh=00_AYBylYpKdV7D_Q1OrzQ7TcHoQm7Zp2cbeyu9hVMVKGpqYQ&oe=67B21A3B",
    date: ""
  },  
  {
    id: 12,
    title: "Quiff",
    category: "hairstyles",
    image: "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/471381351_1094097562237716_3253643860818613988_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHlFBHEu4Lk2wXLT0PDm4YJuhe1BpKTAaa6F7UGkpMBpr2geAuywV6V4Q9zENajnMo4hWKr_qXjFw8iuK9CvYhN&_nc_ohc=eRMH-ErVJS4Q7kNvgE0tZ3R&_nc_oc=AdhpxjswwUOd707ZrJXs41fGlfVz_PEZ020kRWG7mysaepbP8mSRyGK6Cks1kYgxZvE&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=A2U_md614vAqKckaugtB8hj&oh=00_AYCeEudgKKQhfs6tsX8DKcHIha5JikHr27IRoKRyxgFq0Q&oe=67B1E9A2",
    date: ""
  }, 
  {
    id: 13,
    title: "Sự kiện salon",
    category: "events",
    image: "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/475756993_1116657373315068_7382452410193667728_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGipuUELW8LELHeFyuicGFWpbXXHxyXDkmltdcfHJcOSYobG-bL06EpvA3AbCQkdl816aj9Dp0kXj9WYYBk3pYw&_nc_ohc=GnE02wuch6AQ7kNvgENVIwy&_nc_oc=AdhEuF0wsUbEvLvpWoZfvycyxya_ImfDuuTWW8TTIx2vgocbunqaq-EQqwC1K5641OQ&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=AqFtvFYmFXHpTCkyGU6CQZ9&oh=00_AYCRWYFipGwq71rZzH5WRrkjEgdsg0uF3qHmiV02Z8a37Q&oe=67B22D7B",
    date: ""
  }, 
  {
    id:14,
    title: "Tóc uốn xoăn",
    category: "hair",
    image: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/475669603_1115567516757387_1627835635595175727_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE1-Cqxj8Zq9ql2uxnFuvFCHMPYtgxAQUMcw9i2DEBBQ5qusKq6twvD9qwuxg-M5bKwaNNWfzIczxas5Jpuazv5&_nc_ohc=NWsl5ZuM0skQ7kNvgFJjnX_&_nc_oc=AdhmDcSS7z58kAiaACmix4qWnsPCOT1fD3XMa2bO8lhnh5ZK7dnmj-V62__FPmI3BYQ&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=AHf4sZe35Q1sLUh5J7ZLons&oh=00_AYBwjMIHSna-RITv0vEIJzYKTKQatin4W8Ldj1HnCbEUvw&oe=67B21CDE",
    date: ""
    },
  {
    id:15,
    title: "Tóc uốn xoăn",
    category: "hair",
    image: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/475365358_1115567183424087_3253213399835614457_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHL8KHObujixI11B8gZce9pDtbR2-qJ06MO1tHb6onTo6UL_LBIb2MWYrfi4EprQ3H_xYhEB_FPdZcUXgTGB52O&_nc_ohc=wPyDoNpYr6wQ7kNvgHpkngY&_nc_oc=AdhILs4lNZKJ8knq-oKpIIs7ebEheE-wARb70BOxnsYzwn1j9NMOb9SRDe26RBku2Gg&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=AP1K4CmGo3KQgWO-1jp8rCG&oh=00_AYCvy55DMC8Fk2CmqShvabef3bn6wIfyCQ3g-9dySShQUw&oe=67B233FA",
    date: ""
  },
    {
    id:16,
    title: "Tóc uốn xoăn",
    category: "hair",
    image: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/475761484_1115567220090750_4425599133334812749_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeElFetARza74MiD_qq5OJkXatueptffTAZq256m199MBu429qhc34PBWzGTBpBGjNCTUltN-ZPS5pKNSIIDSC69&_nc_ohc=d0MIt43xZw4Q7kNvgENsAtl&_nc_oc=AdjvUBSbg7iGEZWMHm9yvmAarbaQstgAcUmGyQUzSkU9SfQOWZti2zMhF0sUNwwwlQc&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=Abj4a2nheNAhoSHKikKLK4_&oh=00_AYDMgGhvueaj9WZbikcAJenvzbp1Q3SY-v-o9A6z1ueRhw&oe=67B2329B",
    date: ""
    },
    {
      id:17,
      title: "Tóc uốn xoăn",
      category: "academy",
      image: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/476804205_1123818355932303_1993021348578528107_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGi3syapamy8PDp3dTphuu9fwnDFDbhb6d_CcMUNuFvp4jpsBwhOTeBn8rhfB0nXXayeRZVuwFm5vff1Y-IuBY9&_nc_ohc=YZT0CO0EsrQQ7kNvgFcRjVC&_nc_oc=AdiwxWZ1ksvOvzeysOWEBYq4zrDU2zyiMAmf5g8J2bLKwZixENlndjt670o_WDp9Rk0&_nc_zt=23&_nc_ht=scontent.fsgn2-4.fna&_nc_gid=AEj-wYOo3H-ZvFSf08USUpw&oh=00_AYCFEPCc9xCvV3ZiWNIVVcIyoVVdEUyvAL2Ch5p5wlTIwA&oe=67B23076",
      date: ""
      },
    {
      id: 18,
      title: "Sự kiện khai trương",
      category: "events",
      image: "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/462843707_2537131133138349_8036296803202593588_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEMKmZWTHElq3rwIAVqGEp1HQYxXQVTehcdBjFdBVN6Fwv7S1AJ993WCBiCoDMXzrT-9BtBFF6_0jFFEj6PedFP&_nc_ohc=E-APyD5Umy4Q7kNvgH3wKKz&_nc_oc=Adj4XGeAHMOdMTV4r0MtPN8GKhZu7AUSDr50Fi5deOGSNasA-s4RGJkXN6ll5_2H_jg&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=AK9IBKoWScngBsW8hlvmEfz&oh=00_AYAcBXzIoDdA2chaYazjPASGhI_7U7fkOLYyGbrLKI_v2g&oe=67B24283",
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
          Khám phá không gian và dịch vụ của Hair Salon Chính's qua những hình ảnh ấn tượng.
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

    </div>
  );
}
