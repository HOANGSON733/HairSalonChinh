import Breadcrumb from "@/components/breadcrumb"
import ProductGrid from "@/components/stone/product-grid"
import ProductSidebar from "@/components/stone/product-sidebar"

interface StonePageProps {
  params: {
    category: string
  }
}

const categoryNames: { [key: string]: string } = {
  "san-pham": "Sản Phẩm",
  "kieu-toc": "Kiểu tóc",
  "cham-soc-toc": "Chăm sóc tóc",
  "cham-soc-da": "Chăm sóc da",
  "cham-soc-co-the": "Chăm sóc cơ thể",
  "cham-soc-rau": "Chăm sóc râu",
}

export default function StonePage({ params }: StonePageProps) {
  const categoryName = categoryNames[params.category] || "Sản phẩm"

  return (
    <main className="bg-white py-8 ">
      <div className="container mx-auto">
        <Breadcrumb
          items={[
            { label: "Trang chủ", href: "/" },
            { label: "Stone", href: "/stone" },
            { label: categoryName, href: `/stone/${params.category}` },
          ]}
        />

        <h1 className="text-3xl font-bold mt-8 mb-8">SẢN PHẨM</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <ProductGrid category={params.category} />
          </div>
          <div className="lg:col-span-1">
            <ProductSidebar />
          </div>
        </div>
      </div>
    </main>
  )
}

