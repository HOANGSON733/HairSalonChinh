"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function CelebrityVisits() {
  const celebrities = [
    {
      name: "Chim Sẻ Đi Nắng",
      description: "Huyền Thoại Game Đế Chế Việt Nam",
      image: "http://thang1989.name.vn/web201933/wp-content/uploads/2020/07/saoviet1.jpg",
    },
    {
      name: "1977 Vlog",
      description: "Kênh Youtube Triệu View",
      image: "https://4rau.vn/upload/images/351794291_602951258480686_5044174670569423515_n.jpeg",
    },
    {
      name: "Độ Duy Nam",
      description: "Ngôi Sao Nhạc Chế Triệu View",
      image: "https://static-images.vnncdn.net/files/publish/2022/10/12/c5bd0c4d3a14fd4aa405-503.jpg",
    },
    {
      name: "Nguyễn Tiến Linh",
      description: "Tuyển Thủ ĐTQG Việt Nam",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-zinc-900 to-black text-white text-center">
      <h4 className="text-3xl font-extrabold mb-12 tracking-wide p-2">
        CÙNG SAO VIỆT ĐẾN{" "}
        <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">  HAIR SALON CHÍNH</span> TỎA SÁNG
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto px-4">
        {celebrities.map((celeb, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.1, rotate: 1 }}
          >
            <Card className="bg-zinc-800 rounded-2xl overflow-hidden shadow-xl transform transition duration-300 hover:shadow-2xl">
              <CardContent className="p-6">
                <motion.div
                  className="relative aspect-[4/3] mb-4 overflow-hidden rounded-xl"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={celeb.image}
                    alt={celeb.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-2 text-emerald-400">
                  {celeb.name}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  {celeb.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
