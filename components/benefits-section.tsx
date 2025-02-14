import { Wifi, Coffee, SmilePlus, Music, Phone, Clock, Calendar } from "lucide-react"

export default function BenefitsSection() {
  const benefits = [
    { icon: Coffee, text: "Giải khát miễn phí" },
    { icon: Wifi, text: "Wifi miễn phí" },
    { icon: SmilePlus, text: "Điều hòa mát lạnh" },
    { icon: Music, text: "Khẩu trang miễn phí" },
    { icon: Phone, text: "Sạc điện thoại" },
    { icon: Clock, text: "Tự giới đủ cá nhân" },
    { icon: Calendar, text: "Thanh toán đa dạng" },
    { icon: Music, text: "Nghe nhạc bản quyền" },
  ]

  return (
    <section className="py-16 bg-zinc-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4 p-2">TIỆN ÍCH <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">  HAIR SALON CHÍNH</span></h2>
        <p className="text-gray-400 mb-8 p-2">
          Anh sẽ được tận hưởng những tiện ích chăm sóc khác biệt này tại Hair Salon Chinh
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mb-4">
                <benefit.icon className="w-8 h-8 text-[#FF9900]" />
              </div>
              <span className="text-white text-sm">{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

