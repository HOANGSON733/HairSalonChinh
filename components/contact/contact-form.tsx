"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Scissors, Phone, Mail, Send, User } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })

  const [focused, setFocused] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulated submission delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log("Form submitted:", formData)
    setLoading(false)
  }

  const renderInputIcon = (field: string) => {
    const iconProps = {
      size: 18,
      className: `absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-200 ${
        focused === field ? "text-[#FF9900]" : "text-gray-400"
      }`
    }

    switch (field) {
      case "name":
        return <User {...iconProps} />
      case "phone":
        return <Phone {...iconProps} />
      case "email":
        return <Mail {...iconProps} />
      case "subject":
        return <Scissors {...iconProps} />
      default:
        return null
    }
  }

  return (
    <div className="bg-gradient-to-br from-white to-zinc-50 p-8 rounded-2xl shadow-lg border border-zinc-100">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Đặt Lịch Hẹn Làm Đẹp
        </h2>
        <p className="text-gray-500">
          Để lại thông tin, chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative group">
            {renderInputIcon("name")}
            <Input
              placeholder="Họ và tên *"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused("")}
              className="pl-10 h-12 border-gray-200 focus:border-[#FF9900] transition-all duration-200"
              required
            />
          </div>
          <div className="relative group">
            {renderInputIcon("phone")}
            <Input
              placeholder="Số điện thoại *"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              onFocus={() => setFocused("phone")}
              onBlur={() => setFocused("")}
              className="pl-10 h-12 border-gray-200 focus:border-[#FF9900] transition-all duration-200"
              required
            />
          </div>
        </div>

        <div className="relative group">
          {renderInputIcon("email")}
          <Input
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused("")}
            className="pl-10 h-12 border-gray-200 focus:border-[#FF9900] transition-all duration-200"
          />
        </div>

        <div className="relative group">
          {renderInputIcon("subject")}
          <Input
            placeholder="Dịch vụ quan tâm *"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            onFocus={() => setFocused("subject")}
            onBlur={() => setFocused("")}
            className="pl-10 h-12 border-gray-200 focus:border-[#FF9900] transition-all duration-200"
            required
          />
        </div>

        <Textarea
          placeholder="Ghi chú thêm về nhu cầu của bạn... *"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="min-h-[120px] border-gray-200 focus:border-[#FF9900] transition-all duration-200 resize-none"
          required
        />

        <div className="flex justify-center">
          <Button
            type="submit"
            disabled={loading}
            className="bg-[#FF9900] hover:bg-[#FF8800] text-white px-8 py-6 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-70 flex items-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ĐANG GỬI...
              </>
            ) : (
              <>
                <Send size={20} />
                ĐẶT LỊCH NGAY
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}