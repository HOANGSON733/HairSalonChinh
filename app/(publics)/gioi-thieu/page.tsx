import AboutContent from "@/components/about/about-content"
import AboutSidebar from "@/components/about/about-sidebar"
import Breadcrumb from "@/components/breadcrumb"

export default function AboutPage() {
  return (
    <main className="bg-white py-8">
      <div className="container mx-auto">
        <Breadcrumb
          items={[
            { label: "Trang chủ", href: "/" },
            { label: "Giới thiệu", href: "/gioi-thieu" },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          <div className="lg:col-span-3">
            <AboutContent />
          </div>
          <div className="lg:col-span-1">
            <AboutSidebar />
          </div>
        </div>
      </div>
    </main>
  )
}

