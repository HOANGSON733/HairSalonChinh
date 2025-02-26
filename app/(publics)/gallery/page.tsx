import Breadcrumb from "@/components/breadcrumb"
import GalleryContent from "@/components/gallery/gallery-content"

export default function GalleryPage() {
  return (
    <main className="bg-white py-8">
      <div className="container mx-auto">
        <Breadcrumb
          items={[
            { label: "Trang chủ", href: "/" },
            { label: "Gallery", href: "/gallery" },
          ]}
        />

        <div className="mt-8">
          <GalleryContent />
        </div>
      </div>
    </main>
  )
}

