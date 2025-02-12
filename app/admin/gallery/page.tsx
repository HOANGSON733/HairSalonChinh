import UploadImageDialog from "@/components/admin/upload-image-dialog"
import GalleryGrid from "@/components/admin/gallery-grid"

export default function GalleryPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Quản lý Gallery</h1>
          <p className="text-gray-500 mt-2">Quản lý hình ảnh của salon</p>
        </div>
        <UploadImageDialog />
      </div>

      <GalleryGrid />
    </div>
  )
}

