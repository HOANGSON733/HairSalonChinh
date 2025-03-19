"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Breadcrumb from "@/components/breadcrumb";
import AboutSidebar from "@/components/about/about-sidebar";
import { GetDetailProduct } from "@/api/api";

interface Product {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  price: number;
  slug: string;
}

export default function ProductPostPage() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("params:", params);

    const fetchProduct = async () => {
      try {
        const productId = Number(params.id);
        console.log("Product ID đã parse:", productId);

        if (isNaN(productId)) {
          setError("ID sản phẩm không hợp lệ!");
          setLoading(false);
          return;
        }

        const data = await GetDetailProduct(productId);
        console.log("Dữ liệu sản phẩm:", data);
        setProduct(data);
      } catch (err) {
        setError("Không thể tải sản phẩm!");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  if (loading) {
    return <div className="container mx-auto py-8">⏳ Đang tải sản phẩm...</div>;
  }

  if (error || !product) {
    return <div className="container mx-auto py-8 text-red-500">❌ {error || "Sản phẩm không tồn tại!"}</div>;
  }

  return (
    <main className="bg-white py-8">
      <div className="container mx-auto">
        <Breadcrumb
          items={[
            { label: "Trang chủ", href: "/" },
            { label: "Sản phẩm", href: "/products" },
            { label: product.title, href: `/products/${product.slug}` },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          <div className="lg:col-span-3">
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-600 mb-2">
              Nhà sản xuất: <strong>{product.name}</strong>
            </p>
            <p className="text-green-600 font-bold mb-2">Giá: {product.price} VND</p>
            <img src={product.image} alt={product.title} width={640} className="mt-4 rounded-lg shadow-md text-center" />
            <div dangerouslySetInnerHTML={{ __html: product.description }} />
          </div>
          <div className="lg:col-span-1">
            <AboutSidebar />
          </div>
        </div>
      </div>
    </main>
  );
}
