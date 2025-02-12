import Breadcrumb from "@/components/breadcrumb"
import ProductGrid from "@/components/stone/product-grid"
import ProductSidebar from "@/components/stone/product-sidebar"

export default function ProductsPage() {
  return (
    <main className="bg-white py-8">
      <div className="container mx-auto px-1">
        <Breadcrumb
          items={[
            { label: "Trang chủ", href: "/" },
            { label: "Stone", href: "/stone" },
            { label: "Sản phẩm", href: "/stone/san-pham" },
          ]}
        />

        <h1 className="text-3xl font-bold mt-8 mb-8 ">SẢN PHẨM</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <ProductGrid category="all" />
          </div>
          <div className="lg:col-span-1">
            <ProductSidebar />
          </div>
        </div>
      </div>
    </main>
  )
}

