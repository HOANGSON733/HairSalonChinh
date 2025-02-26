import Breadcrumb from "@/components/breadcrumb"
import BlogContent from "@/components/blog/blog-content"
import AboutSidebar from "@/components/about/about-sidebar"

export default function BlogPage() {
  return (
    <main className="bg-white py-8">
      <div className="container mx-auto">
        <Breadcrumb
          items={[
            { label: "Trang chủ", href: "/" },
            { label: "Blog", href: "/blog" },
          ]}
        />

        <h1 className="text-3xl font-bold mt-8 mb-8">BLOG</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <BlogContent />
          </div>
          <div className="lg:col-span-1">
            <AboutSidebar />
          </div>
        </div>
      </div>
    </main>
  )
}

