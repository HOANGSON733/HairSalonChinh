import { MapPin, Phone, Mail, Instagram, Clock, ExternalLink } from "lucide-react"
import { FaTiktok,FaFacebookF } from "react-icons/fa"


export default function ContactInfo() {
  const socialLinks = [
    {
      icon: <FaFacebookF  className="w-5 h-5" />,
      href: "https://www.facebook.com/hairchinhsalon",
      color: "bg-blue-600 hover:bg-blue-700",
      label: "Facebook"
    },
    {
      icon: <FaTiktok className="w-5 h-5" />,
      href: "https://www.tiktok.com/@hair_salon_chinh",
      color: "bg-black hover:bg-gray-800",
      label: "TikTok"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "#",
      color: "bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-700 hover:opacity-90",
      label: "Instagram"
    }
  ]

  return (
    <div className="space-y-12">
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-zinc-100">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-gray-900">
          THÔNG TIN LIÊN HỆ
          <div className="h-1 flex-1 bg-gradient-to-r from-[#FF9900] to-transparent ml-4" />
        </h2>
        
        <div className="space-y-6">
          <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-50 transition-all duration-200">
            <MapPin className="w-6 h-6 text-[#FF9900] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-200" />
            <div>
              <p className="font-semibold text-gray-900 mb-1">Trụ sở chính:</p>
              <p className="text-gray-600 leading-relaxed">
                Khu Phố 6, Thị Trấn Giồng Riềng, Tỉnh Kiên Giang
              </p>
            </div>
          </div>

          <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-50 transition-all duration-200">
            <Phone className="w-6 h-6 text-[#FF9900] flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
            <div>
              <p className="font-semibold text-gray-900 mb-1">Hotline:</p>
              <a 
                href="tel:0967100552"
                className="text-gray-600 hover:text-[#FF9900] transition-colors"
              >
                0967.100.552
              </a>
            </div>
          </div>

          <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-50 transition-all duration-200">
            <Mail className="w-6 h-6 text-[#FF9900] flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
            <div>
              <p className="font-semibold text-gray-900 mb-1">Email:</p>
              <a 
                href="mailto:yen22071992@gmail.com"
                className="text-gray-600 hover:text-[#FF9900] transition-colors"
              >
                yen22071992@gmail.com
              </a>
            </div>
          </div>

          <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-50 transition-all duration-200">
            <Clock className="w-6 h-6 text-[#FF9900] flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
            <div>
              <p className="font-semibold text-gray-900 mb-1">Giờ làm việc:</p>
              <p className="text-gray-600">
                Thứ 2 - Chủ nhật: 8:00 - 20:00
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg border border-zinc-100">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-gray-900">
          THEO DÕI CHÚNG TÔI
          <div className="h-1 flex-1 bg-gradient-to-r from-[#FF9900] to-transparent ml-4" />
        </h2>
        
        <div className="flex gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group w-12 h-12 ${social.color} text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg`}
              aria-label={social.label}
            >
              {social.icon}
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 absolute -top-1 -right-1 transition-opacity duration-200" />
            </a>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg border border-zinc-100">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-gray-900">
          BẢN ĐỒ CỬA HÀNG
          <div className="h-1 flex-1 bg-gradient-to-r from-[#FF9900] to-transparent ml-4" />
        </h2>
        
        <div className="aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.64370657593125!2d105.32109609058334!3d9.909011020626574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0bf5376740b8d%3A0x1cfff090f93003ad!2sHair%20Salon%20Ch%C3%ADnh!5e0!3m2!1svi!2s!4v1739243606742!5m2!1svi!2s"
            width="100%" 
            height="100%" 
            style={{ border: 0 }}
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Hair Salon Chính Location"
            className="filter contrast-125"
          />
        </div>
      </div>
    </div>
  )
}