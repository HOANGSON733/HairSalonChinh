import { Card, CardContent } from "@/components/ui/card"

export default function VideoSection() {
  const videos = [
    {
      title: '"DARE TO SHINE" - BST 4 KIỂU TÓC NAM ĐẸP',
      videoEmbed: "https://www.youtube.com/embed/example1", // Thay `example1` bằng ID video thực tế
    },
    {
      title: 'Bí Troll Cắt Tóc, Vĩnh Và Vũ Được "Biến Hình" Thành Hot Boy',
      videoEmbed: "https://www.youtube.com/embed/example2",
    },
    {
      title: "Laydy Cùng Thành Viên Mới Đi Cắt Tóc Đẹp Trai",
      videoEmbed: "https://www.youtube.com/embed/example3",
    },
    {
      title: "Sẽ NTN Khi Lou Hoàng Để Tóc Mullet?",
      videoEmbed: "https://www.youtube.com/embed/example4",
    },
  ]

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-2">
        <h2 className="text-3xl font-bold text-white mb-8">
          <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">
            HAIR SALON CHÍNH
          </span>{" "}
          TV
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <Card key={index} className="bg-zinc-800">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <iframe
                    src={video.videoEmbed}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-t w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-medium line-clamp-2">{video.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
