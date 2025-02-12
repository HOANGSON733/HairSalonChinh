import Image from "next/image"
import Link from "next/link"

const services = [
  {
    id: 1,
    title: "Cắt & Tạo Kiểu Layer Premium",
    description: "Trải nghiệm dịch vụ cắt tóc layer đẳng cấp với các chuyên gia tạo mẫu tóc hàng đầu. Chúng tôi sẽ tư vấn và thiết kế kiểu tóc phù hợp nhất với khuôn mặt và phong cách của bạn.",
    images: ["https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/cach-cat-toc-layer-tai-nha-3.jpg", 
      "https://beautyx.vn/blog/wp-content/uploads/2022/09/cat-toc-layer-9.jpg"],
    slug: "cat-tao-kieu-layer-premium",
  },
  {
    id: 2,
    title: "Nhuộm Màu Nghệ Thuật",
    description: "Khám phá bộ sưu tập màu nhuộm cao cấp từ các thương hiệu hàng đầu thế giới. Đội ngũ chuyên viên màu của chúng tôi sẽ tư vấn tông màu hoàn hảo, phù hợp với làn da và phong cách của bạn.",
    images: ["https://ladystars.vn/wp-content/uploads/2017/11/toc-highlight-cau-vong.jpg", 
      "https://yt.cdnxbvn.com/medias/hervietnam.com.vn/36/36738/co-gai-mac-ao-xam-toc-nhuom-nau-den-highlight-tim.jpg"],
    slug: "nhuom-mau-nghe-thuat",
  },
  {
    id: 3,
    title: "Uốn & Duỗi Công Nghệ Nhật Bản",
    description: "Sử dụng công nghệ uốn duỗi tiên tiến từ Nhật Bản cùng các sản phẩm dưỡng tóc cao cấp, giúp tóc bạn vừa đẹp vừa khỏe mạnh. Bảo hành kết quả trong 30 ngày.",
    images: ["https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/473155301_1101478578166281_2533876719543076479_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=kTqqLXSieZcQ7kNvgEXUP2W&_nc_oc=AdjGSlZjdmb8D3uUtHI9GzVIKmhUbKyXaITnMixauhNK4bQp9EiFyCfFDVJrZDaeXLs&_nc_zt=23&_nc_ht=scontent.fsgn2-4.fna&_nc_gid=AhtgSmpDP8wpWTR2Mwao7WU&oh=00_AYDPf0bn8TJhFbWLp6g-tizKzBNDnnHUqACsXXA7vpvxuw&oe=67ADF35D", "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/473081255_1101478624832943_6823252744369707253_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ERkNWh_clxIQ7kNvgEsjQH8&_nc_oc=AdjaoDywOTIqipq5Vf_D-kLs-fYUJxCStoxlix1mBfz4uXZgaIC5PmrxEqs1UJuHS4s&_nc_zt=23&_nc_ht=scontent.fsgn2-4.fna&_nc_gid=A9pTA5t2FsGptLvLJ8jAiA4&oh=00_AYCsbtXBciL-BlGuaeaDJ4Z89CXwOF1PYjdsx1p9OSVsEQ&oe=67ADEA22"],
    slug: "uon-duoi-cong-nghe-nhat",
  },
  {
    id: 4,
    title: "Phun Xăm Thẩm Mỹ 6D",
    description: "Công nghệ phun xăm chân mày, môi, mí 6D hiện đại với máy móc và mực xăm nhập khẩu cao cấp. Cam kết an toàn và tự nhiên với thời gian duy trì màu lên đến 24 tháng.",
    images: ["https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/465745128_1062906268690179_668339296769631980_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=n-Pse82WPP0Q7kNvgEt9nkL&_nc_oc=AdgsAl4f2VG-kjWlqacHDx4-_yLW9vIIIH32VfG0-X_cqmnnjcNt0-q0KhdRKFz-A20&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=A1oSyd_b8U-le-3Qqu3CsIn&oh=00_AYA9NBdq3V0tSwClo74T7ehLOX7uMbbvfdHY81v2M4LRYA&oe=67ADEBDE", "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/468702487_1074215950892544_2576472355769558970_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=RCX7XMuYnmQQ7kNvgFpMtor&_nc_oc=AdhQ6gcupuGYx7o-vT6VJPAIRjqxqJLhM5t8OxNzW5VLLkjQny52pzaalMZ5fTHeES8&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=AHwc39RWdPD5ts70JxeVtcg&oh=00_AYBLQGNK7qONOqtppQt3TsrLSQ0CqOM0SlFfYHf5ppiQeQ&oe=67AE00B2"],
    slug: "phun-xam-tham-my-6d",
  },
  {
    id: 5,
    title: "Lấy Ráy Tai Chuyên Sâu",
    description: "Dịch vụ vệ sinh tai chuyên nghiệp với dụng cụ y tế tiệt trùng và đèn soi tai cao cấp. Massage và chăm sóc đặc biệt giúp tai thông thoáng, sảng khoái.",
    images: ["https://thanhnien.mediacdn.vn/Uploaded/tuyenld/2022_10_17/ray-tai-img-6352-4306.jpg",
       "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/321049922_2326374974205456_5961055332626502546_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEpRu07nEKX-tnIhgo5X5MhO_ZI6E-_pJQ79kjoT7-klIg5u9OOwGiYOaRpdb5gBXsDsbRRUb3msgCW_ulI_sU1&_nc_ohc=q8dwuLC50KYQ7kNvgG2_htl&_nc_oc=Adhs45gt1YNxBsjUyNHQag7YCZ2k8hwhywLHZVxL6Xu0iHFL4My0X6QrSL97YKucoFQ&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=AQuwwL4gYWQvUYkJA4cPhvQ&oh=00_AYADLwjwYS8s44v5vnbDUWCdpYcXb-aVVKuPDpS-nvFlBg&oe=67AF41B8"],
    slug: "lay-ray-tai-chuyen-sau",
  },
  {
    id: 6,
    title: "Gội Đầu Thư Giãn Premium",
    description: "Trải nghiệm 60 phút thư giãn với dịch vụ gội đầu kết hợp massage vai gáy, sử dụng các sản phẩm dưỡng tóc cao cấp và tinh dầu thiên nhiên.",
    images: ["https://www.mintspa.vn/wp-content/uploads/2024/07/z5426805741497_a3b15f6285ef37985bdfb7ec7c73a6ac.jpg",
       "https://cdn.dealtoday.vn/img/s800x400/faaf3b570ad24a91bb8fef2a79045af8.png?sign=dUwhFFXo5X6N69RZ3uiY-Q"],
    slug: "goi-dau-thu-gian-premium",
  },
  {
    id: 7,
    title: "Quiff Style Signature",
    description: "Kiểu tóc Quiff đẳng cấp được thiết kế riêng cho từng khách hàng, kết hợp với các sản phẩm tạo kiểu cao cấp để duy trì form tóc suốt ngày dài.",
    images: ["/placeholder.svg", "/placeholder.svg"],
    slug: "quiff-style-signature",
  },
  {
    id: 8,
    title: "Side Swept Premium",
    description: "Tạo kiểu tóc Side Swept thanh lịch với kỹ thuật cắt layer tiên tiến, phù hợp với mọi môi trường từ công sở đến tiệc tùng.",
    images: ["/placeholder.svg", "/placeholder.svg"],
    slug: "side-swept-premium",
  }
]

export default function ServiceContent() {
  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold text-gray-900">DỊCH VỤ CAO CẤP</h1>

      <div className="grid grid-cols-1 gap-12">
        {services.map((service) => (
          <article 
            key={service.id} 
            className="border-b border-gray-200 pb-12 hover:shadow-lg transition-shadow duration-300 rounded-xl p-6"
          >
            <Link href={`/dich-vu/${service.slug}`} className="group">
              <div className="grid grid-cols-2 gap-6 mb-6">
                {service.images.map((image, index) => (
                  <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${service.title} - Image ${index + 1}`}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#FF9900] transition-colors">
                {service.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {service.description}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}