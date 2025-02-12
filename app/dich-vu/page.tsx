import ServiceContent from "@/components/services/service-content"
import AboutSidebar from "@/components/about/about-sidebar"
import Breadcrumb from "@/components/breadcrumb"

export default function ServicesPage() {
  return (
    <main className="bg-white py-8">
      <div className="container mx-auto">
        <Breadcrumb
          items={[
            { label: "Trang chủ", href: "/" },
            { label: "Dịch vụ", href: "/dich-vu" },
          ]}
        />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          <div className="lg:col-span-3">
            <ServiceContent />
          </div>
          <div className="lg:col-span-1">
            <AboutSidebar />
          </div>
        </div>
      </div>
    </main>
  )
}

