import Breadcrumb from "@/components/breadcrumb"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
// import StoreLocations from "@/components/store-locations"

export default function ContactPage() {
  return (
    <main className="bg-white py-8">
      <div className="container mx-auto">
        <div className="px-2">
        <Breadcrumb 
          items={[
            { label: "Trang chủ", href: "/" },
            { label: "Liên hệ", href: "/lien-he" },
          ]}
        /></div>

        <h1 className="text-3xl font-bold mt-8 mb-12 px-2">LIÊN HỆ</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <ContactForm />
          <ContactInfo />
        </div>

        {/* <StoreLocations /> */}
      </div>
    </main>
  )
}

