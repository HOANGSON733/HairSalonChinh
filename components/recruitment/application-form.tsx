"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Phone, Mail, MapPin, Briefcase, Star } from "lucide-react"

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    position: "",
    location: "",
    experience: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  const handleSubmit = async (e:any) => {
    e.preventDefault();
  
    if (!formData.name || !formData.phone || !formData.position || !formData.location) {
      setError("Vui lòng điền đầy đủ thông tin bắt buộc.");
      return;
    }
  
    setIsLoading(true);
    setError("");
  
    try {
      const response = await fetch("/api/send-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json(); // Đọc phản hồi từ API
      console.log("Response từ API:", data);
  
      if (!response.ok) {
        throw new Error(data.message || "Gửi đơn thất bại, vui lòng thử lại.");
      }
  
      alert("Đơn ứng tuyển đã được gửi thành công!");
      setFormData({ name: "", phone: "", email: "", position: "", location: "", experience: "", message: "" });
    } catch (error) {
      setError((error as any).message);
      console.error("Lỗi gửi email:", error);
    } finally {
      setIsLoading(false);
    }
  };
  
  

  return (
    <section className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8">
      <motion.h2
        className="text-3xl font-bold mb-6 text-center text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        ỨNG TUYỂN NGAY
      </motion.h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={18} />
            <Input
              className="pl-10 rounded-lg border-gray-300 focus:ring-2 focus:ring-[#FF9900] transition"
              placeholder="Họ và tên *"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="relative">
            <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
            <Input
              className="pl-10 rounded-lg border-gray-300 focus:ring-2 focus:ring-[#FF9900] transition"
              placeholder="Số điện thoại *"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
            <Input
              className="pl-10 rounded-lg border-gray-300 focus:ring-2 focus:ring-[#FF9900] transition"
              placeholder="Email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="relative">
            <Briefcase className="absolute left-3 top-3 text-gray-400" size={18} />
            <Select value={formData.position} onValueChange={(value) => setFormData({ ...formData, position: value })}>
              <SelectTrigger className="pl-10 rounded-lg border-gray-300 focus:ring-2 focus:ring-[#FF9900] transition">
                <SelectValue placeholder="Vị trí ứng tuyển *" />
              </SelectTrigger>
              <SelectContent className="bg-white shadow-lg rounded-lg p-2 animate-fade-in">
                <SelectItem value="stylist">Nhân Viên Tạo Mẫu Tóc Nam</SelectItem>
                <SelectItem value="washer">Nhân Viên Gội Đầu</SelectItem>
                <SelectItem value="manager">Quản Lý Cửa Hàng</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
            <Select value={formData.location} onValueChange={(value) => setFormData({ ...formData, location: value })}>
              <SelectTrigger className="pl-10 rounded-lg border-gray-300 focus:ring-2 focus:ring-[#FF9900] transition">
                <SelectValue placeholder="Địa điểm làm việc *" />
              </SelectTrigger>
              <SelectContent className="bg-white shadow-lg rounded-lg p-2 animate-fade-in">
                <SelectItem value="hanoi">Hà Nội</SelectItem>
                <SelectItem value="hcm">Hồ Chí Minh</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="relative">
            <Star className="absolute left-3 top-3 text-gray-400" size={18} />
            <Input
              className="pl-10 rounded-lg border-gray-300 focus:ring-2 focus:ring-[#FF9900] transition"
              placeholder="Kinh nghiệm làm việc"
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
            />
          </div>
        </div>
        <Textarea
          className="rounded-lg border-gray-300 focus:ring-2 focus:ring-[#FF9900] transition min-h-[120px]"
          placeholder="Giới thiệu bản thân"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
        <div className="flex justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button type="submit" className="bg-[#FF9900] hover:bg-[#FF8800] text-white px-8 py-3 rounded-lg shadow-md">
              GỬI ĐƠN ỨNG TUYỂN
            </Button>
          </motion.div>
        </div>
      </form>
    </section>
  )
}
