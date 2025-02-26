import Breadcrumb from "@/components/breadcrumb"
import ProductDetails from "@/components/stone/product-details"
import ProductSidebar from "@/components/stone/product-sidebar"

interface ProductPageProps {
  params: {
    category: string
    slug: string
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

export default function ProductPage({ params }: ProductPageProps) {
  const categoryName = categoryNames[params.category] || "Sản phẩm"

  return (
    <main className="bg-white py-8">
      <div className="container mx-auto">
        <Breadcrumb
          items={[
            { label: "Trang chủ", href: "/" },
            { label: "STONE", href: "/stone" },
            { label: categoryName, href: `/stone/${params.category}` },
            { label: "Chi tiết sản phẩm", href: `#` },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          <div className="lg:col-span-3">
            <ProductDetails slug={params.slug} />
          </div>
          <div className="lg:col-span-1">
            <ProductSidebar slug={params.slug}/>
          </div>
        </div>
      </div>
    </main>
  )
}

