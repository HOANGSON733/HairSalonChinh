import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Bí mật đằng sau những cánh cửa luôn chật ních người của Hair Salon Chính",
    excerpt:
      "Đó có thể là 5 cửa hàng rộng khắp toàn quốc song 5 khi người ta không biết giải cánh hàng loạt xe máy, ô tô",
    image: "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/474462980_2621698464681615_7587878908924905374_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF397mAt_4sxB9EAPFKFt5NYLSPNy6ko39gtI83LqSjf5kQzpSFJFNIg7FEy-pnqT6jAcmmqIfrU8FacrT7cY4t&_nc_ohc=E7tAlRmvjv8Q7kNvgG6Fyw-&_nc_oc=AdgYpmsbKWIP2o0AmdKOynkUnnUa5Ti3VXl4RGZyaYB7IyRQQcUEnv5x_kvNMD-hb7k&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=AqhWq-qSuf9A4tJwK9ohJ9K&oh=00_AYCkq5Eoim67bV8e9VSJ7RMuVCLzauTZTBWgQUcfXYuefA&oe=67AF1A2A",
    slug: "bi-mat-dang-sau-nhung-canh-cua",
  },
  {
    id: 2,
    title: "Là đàn ông, đừng bỏ lỡ 3 kiểu tóc nam Hot Trend nhất 2020 này",
    excerpt:
      "Không cứ đàn ông xấu, chỉ có đàn ông chưa lựa chọn đúng kiểu tóc mà thôi. Chọn được kiểu tóc phù hợp với khuôn",
    image: "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/471950667_2608191226032339_5524682041515200944_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGfZYEEtaFuJxI6WW5S-XVG_uNVCFoeQ0D-41UIWh5DQAgDbnNKWNKHVAEh_OqB5Z3qCm7U2SGwkQZWDqbdjfN7&_nc_ohc=OxhJCbt4mSEQ7kNvgH0PZym&_nc_oc=Adgyt6vGerngUw4wM0tokBd7eJ3uKSpG6Cc20PKd-HW60UDUCkfVEwCOTR9ONy4ZtY0&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=AA4OLcE7OZpRCnlzC9-e_iM&oh=00_AYBL8u77hNy6gMU_9L82Ns5CpuefVqOdt-3lf1aqtCl_JQ&oe=67AF3C20",
    slug: "3-kieu-toc-nam-hot-trend",
  },
  {
    id: 3,
    title:
      'Không nằm ngoài cơn sốt "Tóc uốn con sâu," Đình Trọng cùng Duy Mạnh đến Hair Salon Chính để bắt Trend cho bằng được',
    excerpt:
      "Các tóc nam không chỉ là dấu chấm làm đẹp cho bản thân mà còn thể hiện cá tính của mỗi người. Bởi vậy, các",
    image: "https://scontent.fsgn2-7.fna.fbcdn.net/v/t1.6435-9/172217883_268459884801492_8193938572206678154_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEXhHRxV-wi08yvO7G87FozTM_4hc5ynWBMz_iFznKdYI5orRv6Y7ZjiukSTvQ-fuxjG0yszB6dipTzpLWghEYA&_nc_ohc=UQMM6woPL9gQ7kNvgG5OG4Z&_nc_oc=AdhTi5NzpvLT3qrPpLJkYMihHYPaQbKrQBRikhiR12ojVBeHg-42jlkzpBQgxsVQxEo&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=A4ANbHulMQJWai-euUfIhSC&oh=00_AYBWYMeFV6UIUGfWJJR9unYwt5ZMUUZqqWqlbHYuNF446w&oe=67D0E8CC",
    slug: "toc-uon-con-sau",
  },
  {
    id: 4,
    title: "Hướng dẫn vuốt tóc layer tại nhà mà vẫn đẹp hoàn hảo",
    excerpt:
      "Layer là cứu cánh cho những anh em thuộc đội trán cao, trán dô thông minh. Và muốn tạo kiểu layer tại nhà hoàn toàn",
    image: "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/471050096_1088299622817510_6824473289497747779_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHNu7NGpwv8TvcMDL-JdY7YyvHKmDJE4qbK8cqYMkTiprW_WnpNdEsnVQOCmnHSQ-ZL3IkTU_QbvuAyAesG5TNH&_nc_ohc=obvK90dao2EQ7kNvgGpwdu_&_nc_oc=AdiDWD9h5UVwCmtV-v3AgQwFGh5JNYHf9tsRCr3bsvvHPsFxhj3QHXYWwzYUdGoOW2c&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=AWmBQLcuOqTqfAAoaJZs4Kt&oh=00_AYA--1MmB-wQih4nLc606Ahm2Csi6JdF1dkViijQtTKyEA&oe=67AF37C2",
    slug: "huong-dan-vuot-toc-layer",
  },
  {
    id: 5,
    title: 'Bí quyết chăm sóc tóc Sport để anh em luôn "chuẩn men"',
    excerpt: "Sport là kiểu tóc ngắn, với phần mái chỉ dài từ 5 đến 6cm và được úa đổ về phía trước. Sporty là mẫu tóc",
    image: "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/471714652_1094650615515744_3970646513260527748_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEjC3ihmTQ-hLTBBEGUPutaHROoKxZsn4kdE6grFmyfifejgRef7cuEqC6DlgIDAmpeTlg6BCjckH9NeYd9YggB&_nc_ohc=o-ohY9C83U0Q7kNvgEIh_3i&_nc_oc=AdiKhNH9_jUGroP86IoIZ2Mn3kuIcU-1gxBVMGGivwi5PP7vcv-3zdoVhbznCdloLLg&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=AQWdtvlnIHYnD69WOD7ywBf&oh=00_AYBE1gcPqJHuhtJKR706owatyjH-UwliyapsnExghOxJmQ&oe=67AF470A",
    slug: "cham-soc-toc-sport",
  },
  {
    id: 6,
    title: "Quiff – Đổi gió với chất hoài cổ",
    excerpt:
      "Ra đời từ những năm 50 của thập kỷ trước, Quiff từng là kiểu tóc được ưa chuộng bởi những tài tử đời đầu ở",
    image: "https://phongcachlamdep.com/wp-content/uploads/2021/11/kieu-toc-short-quiff-3.jpg",
    slug: "quiff-doi-gio-voi-chat-hoai-co",
  },
  {
    id: 7,
    title: "Side Swept Nam: Làm thế nào để duy trì vẻ lãng tử dài lâu?",
    excerpt:
      "Với những anh em yêu thích vẻ cá tính, bảnh bao thương mại từ các dáng mày râu phương tây, side swept sẽ là một",
    image: "https://liembarbershop.com/wp-content/uploads/2024/08/Side-Swept-Slicked-Back-01-e1723355798812-612x1024.jpg",
    slug: "side-swept-nam",
  },
  {
    id: 8,
    title: "Sidepart kiểu tóc cứ để là đẹp của hàng triệu anh em nam giới.",
    excerpt:
      "Chắc chắn rằng có lần bạn đã từng nghe ở đâu đó về kiểu tóc side part vuốt rũ, uốn xoăn, 3/7, 7/3, 4/6, 2/8, undercut,",
    image: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/472053635_1094789212168551_1596004206320758518_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG5tN2K6-CDqwL2qhX1SFpVjwd3Vi4m6IiPB3dWLiboiCPvMw-sWHDtyb40XpztKLbInfVlQWqTZDQLN63S7BxX&_nc_ohc=JcxhGWt_XeYQ7kNvgEimGz0&_nc_oc=AdgU2gJSaMNM8VltkzA11pAPUnUTV51X8A4iGbuZke0u_ZtgdnG91xO6sYGobcCN57M&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=AA8Z5f1KizSU32GeLFZYVwa&oh=00_AYAWsCXk8ku6neDI1KKYxgFWQG1OmxBTRhDlqSGdZW9dfA&oe=67AF4749",
    slug: "sidepart-kieu-toc",
  },
]

export default function BlogContent() {
  return (
    <div className="space-y-8 px-2">
      {blogPosts.map((post) => (
        <article key={post.id} className="group relative">
          <Link href={`/blog/${post.slug}`} className="flex gap-6">
            <div className="w-1/3">
              <div className="relative aspect-[4/3]">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                />
              </div>
            </div>
            <div className="w-2/3">
              <h2 className="text-xl font-semibold mb-2 group-hover:text-[#FF9900] transition-colors">{post.title}</h2>
              <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
            </div>
          </Link>
          <div className="border-b border-dotted border-gray-300 mt-8" />
        </article>
      ))}
    </div>
  )
}

