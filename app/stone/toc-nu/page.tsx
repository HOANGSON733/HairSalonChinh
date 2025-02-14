import React from "react"
import Breadcrumb from "@/components/breadcrumb"
import ProductGrid from "@/components/hair-female/hair-female"

// import ProductSidebar from "@/components/stone/product-sidebar"

export default function ProductsPage() {
  return (
    <main className="bg-white py-8">
      <div className="container mx-auto px-1">
        <Breadcrumb
          items={[
            { label: "Trang chủ", href: "/" },
            { label: "Stone", href: "/stone" },
            { label: "Kiểu tóc", href: "/stone/toc-nu" },
          ]}
        />

        <h1 className="text-3xl font-bold mt-8 mb-8 ">TÓC NỮ</h1>

        <div>
          <div className="lg:col-span-3">
            <ProductGrid category="all" />
          </div>
          <div className="lg:col-span-1">
            {/* <ProductSidebar /> */}
          </div>
        </div>
      </div>
    </main>
  )
}

