import Breadcrumb from "@/components/breadcrumb"
import RecruitmentContent from "@/components/recruitment/recruitment-content"
import ApplicationForm from "@/components/recruitment/application-form"

export default function RecruitmentPage() {
  return (
    <main className="bg-white py-8">
      <div className="container mx-auto">
        <Breadcrumb
          items={[
            { label: "Trang chủ", href: "/" },
            { label: "Tuyển dụng", href: "/tuyen-dung" },
          ]}
        />

        <div className="mt-8 space-y-12">
          <RecruitmentContent />
          <ApplicationForm />
        </div>
      </div>
    </main>
  )
}

