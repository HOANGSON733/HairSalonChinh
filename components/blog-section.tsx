import Image from "next/image";

export default function BlogSection() {
  const posts = [
    {
      title:
        "BÍ MẬT ĐẰNG SAU NHỮNG CÁNH CỬA LUÔN CHẬT NÍCH NGƯỜI CỦA SALON TÓC NAM MIN SHAIR SKIN",
      excerpt:
        "Dù có tới 85 cửa hàng rộng khắp toàn quốc song ít khi người ta không bắt gặp cảnh hàng loạt xe máy, ô tô xếp hàng dài trước các cửa tiệm salon cắt tóc nam Min Shair Skin. Chưa kể mỗi dịp lễ tết đến nhu cầu cắt tóc.",
      image:
        "https://newspaceconcept.vn/wp-content/uploads/2023/03/thiet-ke-salon-toc-son-hair-sai-gon-6.webp",
    },
    {
      title: "LÀ ĐÀN ÔNG, ĐỪNG BỎ LỠ 3 KIỂU TÓC NAM HOT TREND NHẤT 2020 NÀY",
      excerpt:
        "Không có đàn ông xấu, chỉ có đàn ông chưa lựa chọn đúng kiểu tóc mà thôi. Chọn được kiểu tóc phù hợp với khuôn mặt, phong cách thời trang nhưng vẫn phải hợp với xu hướng luôn là bài toán đau đầu của mỗi anh em.",
      image:
        "https://newspaceconcept.vn/wp-content/uploads/2023/03/thiet-ke-salon-toc-son-hair-sai-gon-7.webp",
    },
    {
      title:
        "KHÔNG NẰM NGOÀI CƠN SỐT 'TÓC UỐN CON SẤU', ĐÌNH TRỌNG CÙNG DUY MẠNH ĐẾN MIN SHAIR SKIN ĐỂ BẮT TREND CHO BẰNG ĐƯỢC",
      excerpt:
        "Cắt tóc nam không chỉ là nhu cầu làm đẹp mà còn thể hiện cá tính của mỗi người. Bởi vậy, các cầu thủ bóng đá không ngừng rèn luyện, liên tục tìm kiếm những kiểu tóc mới thể hiện bản lĩnh thói quen của bản thân.",
      image:
        "https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/478870RVq/anh-mo-ta.png",
    },
    {
      title:
        "KHÔNG NẰM NGOÀI CƠN SỐT 'TÓC UỐN CON SẤU', ĐÌNH TRỌNG CÙNG DUY MẠNH ĐẾN MIN SHAIR SKIN ĐỂ BẮT TREND CHO BẰNG ĐƯỢC",
      excerpt:
        "Cắt tóc nam không chỉ là nhu cầu làm đẹp mà còn thể hiện cá tính của mỗi người. Bởi vậy, các cầu thủ bóng đá không ngừng rèn luyện, liên tục tìm kiếm những kiểu tóc mới thể hiện bản lĩnh thói quen của bản thân.",
      image:
        "https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/478870RVq/anh-mo-ta.png",
    },
    {
      title:
        "KHÔNG NẰM NGOÀI CƠN SỐT 'TÓC UỐN CON SẤU', ĐÌNH TRỌNG CÙNG DUY MẠNH ĐẾN MIN SHAIR SKIN ĐỂ BẮT TREND CHO BẰNG ĐƯỢC",
      excerpt:
        "Cắt tóc nam không chỉ là nhu cầu làm đẹp mà còn thể hiện cá tính của mỗi người. Bởi vậy, các cầu thủ bóng đá không ngừng rèn luyện, liên tục tìm kiếm những kiểu tóc mới thể hiện bản lĩnh thói quen của bản thân.",
      image:
        "https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/478870RVq/anh-mo-ta.png",
    },
  ];

  return (
    <section className="py-16 bg-zinc-900">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h4 className="text-3xl font-bold text-white text-center md:text-left">
            BÍ QUYẾT ĐẸP TRAI TỪ{" "}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">
              HAIR SALON CHÍNH
            </span>
          </h4>
          <a
            href="#"
            className="mt-4 md:mt-0 text-[#FF9900] font-medium hover:underline"
          >
            XEM TẤT CẢ →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative w-full aspect-video">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                <a
                  href="#"
                  className="text-[#FF9900] font-medium hover:underline"
                >
                  Xem thêm →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div> 
    </section>
  );
}
