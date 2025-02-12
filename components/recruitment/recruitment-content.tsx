import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { BadgeCheck } from "lucide-react"

const positions = [
  {
    title: "Nhân Viên Tạo Mẫu Tóc Nam",
    requirements: [
      "Nam/Nữ từ 18-35 tuổi",
      "Có kinh nghiệm cắt tóc nam tối thiểu 1 năm",
      "Có tinh thần học hỏi, cầu tiến",
      "Có kỹ năng giao tiếp tốt",
    ],
    benefits: [
      "Thu nhập từ 8-20 triệu/tháng",
      "Được đào tạo chuyên sâu",
      "Môi trường làm việc chuyên nghiệp",
      "Cơ hội thăng tiến rõ ràng",
    ],
    locations: ["Hà Nội", "Hồ Chí Minh"],
  },
  {
    title: "Nhân Viên Tạo Mẫu Tóc Nữ",
    requirements: ["Nam/Nữ từ 18-35 tuổi", "Không yêu cầu kinh nghiệm", "Ngoại hình ưa nhìn", "Thái độ phục vụ tốt"],
    benefits: [
      "Thu nhập từ 5-10 triệu/tháng",
      "Được đào tạo kỹ năng",
      "Phụ cấp, thưởng theo doanh số",
      "Bảo hiểm đầy đủ",
    ],
    locations: ["Hà Nội"],
  },
  {
    title: "Đào Tạo Học Viên",
    requirements: [
      "Nam/Nữ từ 16-40 tuổi",
      "Kinh nghiệm đào tạo tối thiểu 2 năm",
      "Kỹ năng giảng dạy tốt",
      "Có khả năng xây dựng chương trình đào tạo",
    ],
    benefits: [
      "Thu nhập từ 15-25 triệu/tháng",
      "Thưởng theo KPI",
      "Chế độ phúc lợi hấp dẫn",
      "Cơ hội phát triển sự nghiệp",
    ],
    locations: ["Hà Nội", "Hồ Chí Minh"],
  }
  
]

const culture = [
  {
    title: "Môi Trường Chuyên Nghiệp",
    description: "Làm việc trong không gian hiện đại, quy trình chuẩn quốc tế",
    image: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/358376680_2212820942236038_2730788026495657600_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGyappj5rrXIXLx1m3srOL1tIuerFMHqs60i56sUweqzp0sbL5-cv08IOmhQi4P6i1mux_wWkjMYBj5fRrlANea&_nc_ohc=iTqvNzPiWY8Q7kNvgEvEp3Q&_nc_oc=AdgdW1banc-CBfL3bhavF0B7YpVT_QYblrkyyDk9ELmMfayAyI7K_Z_Pj2KxzL9s7GU&_nc_zt=23&_nc_ht=scontent.fsgn2-4.fna&_nc_gid=AqQyqRrrx5UWG33OvO0igYE&oh=00_AYCJOTNbCapiE9-YABXuxs3BhrF0b3XqU6xmj6rjdl2rWg&oe=67AFA186",
  },
  {
    title: "Đào Tạo Liên Tục",
    description: "Cập nhật xu hướng mới nhất, nâng cao tay nghề thường xuyên",
    image: "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/448262286_3389982304632623_2923285118621630346_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFC4WMiRTchHAwhK5X3XYBL_lC7Lg7DF4_-ULsuDsMXj3UcW7c5xV10T0n5r5K2VJn-FSfU3A4752krmEx5aMi-&_nc_ohc=EiZlyJtc39UQ7kNvgF4X0TH&_nc_oc=Adgn0uCHCjmUxc0LhANpsc69A3bVoK82vGJHWXmO3LgO24V-HypL8QoUdrzx_LgncCM&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=AoWoecA-StLGDviIpXkDj6B&oh=00_AYDht8w6c6NT_Gt3CMdYui-tjpASo-D4swQ-AmpGPDIFFA&oe=67AF77F1",
  },
  {
    title: "Cơ Hội Thăng Tiến",
    description: "Lộ trình thăng tiến rõ ràng, đãi ngộ theo năng lực",
    image: "https://scontent.fsgn2-11.fna.fbcdn.net/v/t1.6435-9/122832288_191496199106208_5814575371657805496_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF2EV5vY0U3-9q2QCPN-IFiPs9mAvJJAQA-z2YC8kkBAO_ujkN3dLGSeOg-0Dutb22WJxo4c_HfEfRiHElWiVzC&_nc_ohc=RmbsecfZpjsQ7kNvgFfIvT0&_nc_oc=AdimyiwFBh3UXK1Y8vFuSNsGLJc3fzEaH0T_S9OckEroxe3R9tTPb--4ChQgG7xzEpw&_nc_zt=23&_nc_ht=scontent.fsgn2-11.fna&_nc_gid=AyiEBtgYAjKSXIQoPUPb09T&oh=00_AYCNATudW7BbhYuZ45nvZt6uA2yvLieCOwx5LMC5M4NmnQ&oe=67D117A8",
  },
]

export default function RecruitmentContent() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-3xl font-bold mb-8">TUYỂN DỤNG</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {positions.map((position) => (
            <Card key={position.title} className="bg-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">{position.title}</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Yêu cầu:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req) => (
                        <li key={req} className="flex items-start gap-2 text-gray-600">
                          <BadgeCheck className="w-5 h-5 text-[#FF9900] flex-shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Quyền lợi:</h4>
                    <ul className="space-y-2">
                      {position.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-gray-600">
                          <BadgeCheck className="w-5 h-5 text-[#FF9900] flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Địa điểm:</h4>
                    <p className="text-gray-600">{position.locations.join(", ")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-zinc-900 text-white py-12 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">VĂN HÓA HAIR SALON CHÍNH</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {culture.map((item) => (
              <div key={item.title} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

