"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Check } from "lucide-react"

interface BookingModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function BookingModal({ open, onOpenChange }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    staff: "",
    date: "",
    time: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setShowSuccess(true)
    
    // Reset form and close modal after 2 seconds
    setTimeout(() => {
      setShowSuccess(false)
      setFormData({
        name: "",
        phone: "",
        service: "",
        staff: "",
        date: "",
        time: "",
      })
      onOpenChange(false)
    }, 2000)
  }

  if (showSuccess) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="bg-gradient-to-br from-black via-gray-900 to-black text-white border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)] p-0 overflow-hidden rounded-2xl max-w-2xl backdrop-blur-sm">
          <div className="p-8 flex flex-col items-center justify-center min-h-[400px] animate-in zoom-in duration-300">
            <div className="relative mb-6">
              <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center animate-pulse">
                <Check className="w-10 h-10 text-green-500 animate-in zoom-in duration-300" />
              </div>
              <div className="absolute -inset-1 rounded-full bg-green-500/20 animate-ping" />
            </div>
            
            <h3 className="text-2xl font-bold text-green-500 mb-4 animate-in slide-in-from-bottom duration-300">
              Đặt Lịch Thành Công!
            </h3>
            <p className="text-gray-300 text-center animate-in slide-in-from-bottom duration-300 delay-100">
              Cảm ơn bạn đã đặt lịch. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gradient-to-br from-black via-gray-900 to-black text-white border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)] p-0 overflow-hidden rounded-2xl max-w-2xl backdrop-blur-sm animate-in fade-in-0 zoom-in-95 duration-300">
        <div className="p-8 relative">
          <div className="absolute top-2 right-2">
            <button 
              onClick={() => onOpenChange(false)} 
              className="p-2 hover:bg-white/5 rounded-full transition-all duration-300 hover:rotate-90"
            >
             
            </button>
          </div>

          <div className="text-center mb-8 animate-in slide-in-from-top duration-500">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-500 ">
              ĐẶT LỊCH GIỮ CHỖ
            </h2>
            <p className="text-gray-300 mt-4">
              Quý khách vui lòng nhập đủ thông tin, chúng tôi sẽ gọi lại ngay khi nhận được email
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group animate-in slide-in-from-left duration-500">
                <Input
                  placeholder="Họ và tên"
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-yellow-500 hover:border-yellow-500/50 transition-all duration-300 h-12 rounded-xl group-hover:shadow-[0_0_10px_rgba(234,179,8,0.1)]"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="group animate-in slide-in-from-right duration-500">
                <Input
                  placeholder="Số điện thoại"
                  type="tel"
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-yellow-500 hover:border-yellow-500/50 transition-all duration-300 h-12 rounded-xl group-hover:shadow-[0_0_10px_rgba(234,179,8,0.1)]"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div className="group animate-in slide-in-from-left duration-500 delay-150">
                <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                  <SelectTrigger className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-yellow-500 hover:border-yellow-500/50 transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(234,179,8,0.1)]">
                    <SelectValue placeholder="Chọn dịch vụ" />
                  </SelectTrigger>
                  <SelectContent className="text-white bg-gray-900/95 border-white/10 backdrop-blur-xl animate-in zoom-in-95 duration-200">
                    <SelectItem value="cat-toc" className="hover:bg-white/5 transition-colors duration-200">Cắt tóc</SelectItem>
                    <SelectItem value="uon" className="hover:bg-white/5 transition-colors duration-200">Uốn</SelectItem>
                    <SelectItem value="nhuom" className="hover:bg-white/5 transition-colors duration-200">Nhuộm</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="group animate-in slide-in-from-right duration-500 delay-150">
                <Select value={formData.staff} onValueChange={(value) => setFormData({ ...formData, staff: value })}>
                  <SelectTrigger className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-yellow-500 hover:border-yellow-500/50 transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(234,179,8,0.1)]">
                    <SelectValue placeholder="Chọn nhân viên" />
                  </SelectTrigger>
                  <SelectContent className="text-white bg-gray-900/95 border-white/10 backdrop-blur-xl animate-in zoom-in-95 duration-200">
                    <SelectItem value="staff-1" className="hover:bg-white/5 transition-colors duration-200">Nhân viên 1</SelectItem>
                    <SelectItem value="staff-2" className="hover:bg-white/5 transition-colors duration-200">Nhân viên 2</SelectItem>
                    <SelectItem value="staff-3" className="hover:bg-white/5 transition-colors duration-200">Nhân viên 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="group animate-in slide-in-from-left duration-500 delay-300">
                <Input
                  type="date"
                  className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-yellow-500 hover:border-yellow-500/50 transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(234,179,8,0.1)]"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                />
              </div>

              <div className="group animate-in slide-in-from-right duration-500 delay-300">
                <Input
                  type="time"
                  className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-yellow-500 hover:border-yellow-500/50 transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(234,179,8,0.1)]"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="flex justify-center mt-8 animate-in slide-in-from-bottom duration-500 delay-500">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 hover:from-yellow-500 hover:via-yellow-400 hover:to-yellow-500 text-black font-bold px-12 py-6 rounded-full text-lg transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:rotate-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'ĐANG GỬI...' : 'GỬI ĐI'}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}