import Image from "next/image"
import Link from "next/link"

const newProducts = [
  {
    name: "Sáp Reuzel Red Pomade Phong Cách Cổ Điển",
    price: "228,000đ",
    image: "https://phongcachlamdep.com/wp-content/uploads/2021/11/kieu-toc-short-quiff-3.jpg",
  },
  {
    name: "Sáp Reuzel Clay Matte Pomade Không Bóng",
    price: "273,000đ",
    image:
      "https://liembarbershop.com/wp-content/uploads/2024/08/Side-Swept-Slicked-Back-01-e1723355798812-612x1024.jpg",
  },
  {
    name: "Sáp Reuzel Fiber Pomade Mềm Dẻo",
    price: "271,000đ",
    image:
      "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/472053635_1094789212168551_1596004206320758518_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG5tN2K6-CDqwL2qhX1SFpVjwd3Vi4m6IiPB3dWLiboiCPvMw-sWHDtyb40XpztKLbInfVlQWqTZDQLN63S7BxX&_nc_ohc=JcxhGWt_XeYQ7kNvgEimGz0&_nc_oc=AdgU2gJSaMNM8VltkzA11pAPUnUTV51X8A4iGbuZke0u_ZtgdnG91xO6sYGobcCN57M&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=AA8Z5f1KizSU32GeLFZYVwa&oh=00_AYAWsCXk8ku6neDI1KKYxgFWQG1OmxBTRhDlqSGdZW9dfA&oe=67AF4749",
  },
  {
    name: "Sáp Reuzel Blue Pomade Độ Bóng Cao",
    price: "243,000đ",
    image:
      "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/474462980_2621698464681615_7587878908924905374_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF397mAt_4sxB9EAPFKFt5NYLSPNy6ko39gtI83LqSjf5kQzpSFJFNIg7FEy-pnqT6jAcmmqIfrU8FacrT7cY4t&_nc_ohc=E7tAlRmvjv8Q7kNvgG6Fyw-&_nc_oc=AdgYpmsbKWIP2o0AmdKOynkUnnUa5Ti3VXl4RGZyaYB7IyRQQcUEnv5x_kvNMD-hb7k&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=AqhWq-qSuf9A4tJwK9ohJ9K&oh=00_AYCkq5Eoim67bV8e9VSJ7RMuVCLzauTZTBWgQUcfXYuefA&oe=67AF1A2A",
  },
  {
    name: "Sáp Reuzel Green Pomade Giữ Nếp Vừa",
    price: "228,000đ",
    image:
      "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/471950667_2608191226032339_5524682041515200944_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGfZYEEtaFuJxI6WW5S-XVG_uNVCFoeQ0D-41UIWh5DQAgDbnNKWNKHVAEh_OqB5Z3qCm7U2SGwkQZWDqbdjfN7&_nc_ohc=OxhJCbt4mSEQ7kNvgH0PZym&_nc_oc=Adgyt6vGerngUw4wM0tokBd7eJ3uKSpG6Cc20PKd-HW60UDUCkfVEwCOTR9ONy4ZtY0&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=AA4OLcE7OZpRCnlzC9-e_iM&oh=00_AYBL8u77hNy6gMU_9L82Ns5CpuefVqOdt-3lf1aqtCl_JQ&oe=67AF3C20",
  },
]

const news = [
  {
    title: "Bí mật đằng sau những cánh cửa luôn chật ních người của Salon tóc nam Min Shair Skin",
    image:
      "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/474462980_2621698464681615_7587878908924905374_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF397mAt_4sxB9EAPFKFt5NYLSPNy6ko39gtI83LqSjf5kQzpSFJFNIg7FEy-pnqT6jAcmmqIfrU8FacrT7cY4t&_nc_ohc=E7tAlRmvjv8Q7kNvgG6Fyw-&_nc_oc=AdgYpmsbKWIP2o0AmdKOynkUnnUa5Ti3VXl4RGZyaYB7IyRQQcUEnv5x_kvNMD-hb7k&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=AqhWq-qSuf9A4tJwK9ohJ9K&oh=00_AYCkq5Eoim67bV8e9VSJ7RMuVCLzauTZTBWgQUcfXYuefA&oe=67AF1A2A",
    slug: "bi-mat-dang-sau-nhung-canh-cua",
  },
  {
    title: "Là đàn ông, đừng bỏ lỡ 3 kiểu tóc nam Hot Trend nhất 2020 này",
    image:
      "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/471950667_2608191226032339_5524682041515200944_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGfZYEEtaFuJxI6WW5S-XVG_uNVCFoeQ0D-41UIWh5DQAgDbnNKWNKHVAEh_OqB5Z3qCm7U2SGwkQZWDqbdjfN7&_nc_ohc=OxhJCbt4mSEQ7kNvgH0PZym&_nc_oc=Adgyt6vGerngUw4wM0tokBd7eJ3uKSpG6Cc20PKd-HW60UDUCkfVEwCOTR9ONy4ZtY0&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=AA4OLcE7OZpRCnlzC9-e_iM&oh=00_AYBL8u77hNy6gMU_9L82Ns5CpuefVqOdt-3lf1aqtCl_JQ&oe=67AF3C20",
    slug: "3-kieu-toc-nam-hot-trend",
  },
  {
    title:
      'Không nằm ngoài cơn sốt "Tóc uốn con sâu," Đình Trọng cùng Duy Mạnh đến Min Shair Skin để bắt Trend cho bằng được',
    image:
      "https://scontent.fsgn2-7.fna.fbcdn.net/v/t1.6435-9/172217883_268459884801492_8193938572206678154_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEXhHRxV-wi08yvO7G87FozTM_4hc5ynWBMz_iFznKdYI5orRv6Y7ZjiukSTvQ-fuxjG0yszB6dipTzpLWghEYA&_nc_ohc=UQMM6woPL9gQ7kNvgG5OG4Z&_nc_oc=AdhTi5NzpvLT3qrPpLJkYMihHYPaQbKrQBRikhiR12ojVBeHg-42jlkzpBQgxsVQxEo&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=A4ANbHulMQJWai-euUfIhSC&oh=00_AYBWYMeFV6UIUGfWJJR9unYwt5ZMUUZqqWqlbHYuNF446w&oe=67D0E8CC",
    slug: "toc-uon-con-sau",
  },
  {
    title: "Hướng dẫn vuốt tóc layer tại nhà mà vẫn đẹp hoàn hảo",
    image:
      "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/471050096_1088299622817510_6824473289497747779_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHNu7NGpwv8TvcMDL-JdY7YyvHKmDJE4qbK8cqYMkTiprW_WnpNdEsnVQOCmnHSQ-ZL3IkTU_QbvuAyAesG5TNH&_nc_ohc=obvK90dao2EQ7kNvgGpwdu_&_nc_oc=AdiDWD9h5UVwCmtV-v3AgQwFGh5JNYHf9tsRCr3bsvvHPsFxhj3QHXYWwzYUdGoOW2c&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=AWmBQLcuOqTqfAAoaJZs4Kt&oh=00_AYA--1MmB-wQih4nLc606Ahm2Csi6JdF1dkViijQtTKyEA&oe=67AF37C2",
    slug: "huong-dan-vuot-toc-layer",
  },
  {
    title: 'Bí quyết chăm sóc tóc Sport để anh em luôn "chuẩn men"',
    image:
      "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/471714652_1094650615515744_3970646513260527748_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEjC3ihmTQ-hLTBBEGUPutaHROoKxZsn4kdE6grFmyfifejgRef7cuEqC6DlgIDAmpeTlg6BCjckH9NeYd9YggB&_nc_ohc=o-ohY9C83U0Q7kNvgEIh_3i&_nc_oc=AdiKhNH9_jUGroP86IoIZ2Mn3kuIcU-1gxBVMGGivwi5PP7vcv-3zdoVhbznCdloLLg&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=AQWdtvlnIHYnD69WOD7ywBf&oh=00_AYBE1gcPqJHuhtJKR706owatyjH-UwliyapsnExghOxJmQ&oe=67AF470A",
    slug: "cham-soc-toc-sport",
  },
]

export default function AboutSidebar() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-lg font-bold bg-black text-white p-2 mb-4">SẢN PHẨM NỔI BẬT</h2>
        <div className="space-y-4">
          {newProducts.map((product, index) => (
            <Link href={`/stone/tao-kieu-toc/${index + 1}`} key={index} className="flex gap-4 group">
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-sm group-hover:text-[#FF9900] transition-colors">{product.name}</h3>
                <p className="text-red-600 font-bold">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold bg-black text-white p-2 mb-4">BÀI VIẾT LIÊN QUAN</h2>
        <div className="space-y-4">
          {news.map((item, index) => (
            <Link href={`/blog/${item.slug}`} key={index} className="flex gap-4 group">
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              </div>
              <h3 className="text-sm group-hover:text-[#FF9900] transition-colors">{item.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

