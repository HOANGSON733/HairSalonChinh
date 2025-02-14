"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function CelebrityVisits() {
  const celebrities = [
    {
      name: "Tóc Nữ",
      description: "Mang đến vẻ đẹp cuốn hút với các kiểu tóc thời thượng.",
      image: "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/476926913_1124345879212884_8626003232237052462_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHE-GgpAiXmFloWMMFx1rnybOe_Q607g6xs579DrTuDrFedYwsCrcjHGbcHZy4NLc6Fu4Tr6aLSI0P0Is-cmEJc&_nc_ohc=ggnLp6MDYIIQ7kNvgFlL6qI&_nc_oc=AdgSj1IrHjsgX0s5SmO51Gak_6u9tB35WKQ6Dn9ew0QCfDEyRztw5TNZXiLMXFmC260&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=AUqIYiswoFncrmQpOAqE9PP&oh=00_AYBuVmNiDK38LXJoxLEqRLO6Nk-Xeby6J_Y-8_Eqb1utnQ&oe=67B3E346",
    },
    {
      name: "Phun Xăm Thẩm Mỹ",
      description: "Định hình chân mày, môi, mí sắc nét, tự nhiên và bền đẹp.",
      image: "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/476835433_1123827205931418_8909236111141903259_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeERCLEXTq2Twmff9-_KYu-oMX1D4nK_RkAxfUPicr9GQM7XyU0WFQXUc8Gb0-M_MJPQTdERrXqB60-qCUXpWU6G&_nc_ohc=N92b67-vv6EQ7kNvgHsZ-PT&_nc_oc=AdjPWZNDT4On-WAqtUlgFXLhkwQzQYpIbVPSS9SmBKTjtPcCTh_nUcdOF6CQh6DG_hA&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=Ao7mJwJ2IdTYJpYwKXlNgsL&oh=00_AYDeWpgXWFYeFDW7rKJSt5k5Un3ogVl4bx4a4PlDy8xGQg&oe=67B3EB88",
    },
    {
      name: "Nail",
      description: "Dịch vụ làm nail chuyên nghiệp, thiết kế độc đáo và sáng tạo.",
      image: "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/474465607_1110457633935042_2354852797725533707_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE_Eo-Jk_qiZKTZT0Mjz8KcHGMl3KIJ8w0cYyXcognzDS7Bm2pBh2vOgQdMJfdtDiJgqDolvBQ4epw2eWYHSBTt&_nc_ohc=hVv1RP1ovvEQ7kNvgFT_JDg&_nc_oc=AdjJQrNniTPdSn5a_3Tx-RldmV3u0htG5PLnT6ut9s1044h_nzFZDRjQE6NDaLfaEw0&_nc_zt=23&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=ApMY_RSdjX9DWQvOnmVXent&oh=00_AYBOpn4PbdNkYHY83CREfVNWEMZ4fD77h9kAC4XZIMBDXg&oe=67B3DBEB",
    },
    {
      name: "Tóc Nam",
      description: "Tạo kiểu tóc nam đẹp, phong cách và phù hợp với xu hướng.",
      image: "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/475858953_1117050573275748_3819025569091862368_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGSyuMgOI_yaGnxMbB2Kn3SVeA0gHoIqzhV4DSAegirOEsAGWSkkxoX1djZzt73iTxqB2ToPj5mqHfFDimasoTM&_nc_ohc=pF1NTFbu9XYQ7kNvgGndIio&_nc_oc=AdjEYgu4RWyaDXyd1av2r2qEGjQHboSX6iOhO52KkuFDT13gnDRtPuaTnrqN1jxBq08&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=As_9UZr-WtBw1A-bBDsnHOb&oh=00_AYBaaScdfporYnn4YlwB1HUY_nNmZq7NjiK6YwWXa8HZGw&oe=67B3FB90",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-zinc-900 to-black text-white text-center">
      <h4 className="text-3xl font-extrabold mb-12 tracking-wide p-2">
        DỊCH VỤ CỦA{" "}
        <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">  HAIR SALON CHÍNH</span> TỎA SÁNG\\
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
