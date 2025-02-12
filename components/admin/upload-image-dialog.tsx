"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload } from "lucide-react"

export default function UploadImageDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle image upload here
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>
          <Upload className="w-4 h-4 mr-2" />
          Tải lên hình ảnh
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tải lên hình ảnh mới</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Tiêu đề</Label>
              <Input id="title" placeholder="Nhập tiêu đề hình ảnh" />
            </div>

            <div>
              <Label htmlFor="category">Danh mục</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn danh mục" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hairstyles">Kiểu tóc</SelectItem>
                  <SelectItem value="services">Dịch vụ</SelectItem>
                  <SelectItem value="facility">Cơ sở vật chất</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="image">Hình ảnh</Label>
              <div className="mt-2">
                <div className="border-2 border-dashed rounded-lg p-4 text-center">
                  <input type="file" id="image" className="hidden" accept="image/*" onChange={handleFileChange} />
                  <label htmlFor="image" className="cursor-pointer block p-4 text-gray-500">
                    {preview ? (
                      <img src={preview || "/placeholder.svg"} alt="Preview" className="max-h-48 mx-auto" />
                    ) : (
                      <div>
                        <Upload className="w-8 h-8 mx-auto mb-2" />
                        <span>Click để chọn hoặc kéo thả hình ảnh vào đây</span>
                      </div>
                    )}
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
              Hủy
            </Button>
            <Button type="submit">Tải lên</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

