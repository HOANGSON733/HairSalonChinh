"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Breadcrumb from "@/components/breadcrumb";
import BlogPostContent from "@/components/blog/blog-post-content";
import AboutSidebar from "@/components/about/about-sidebar";
import { GetDetailBlog } from "@/api/api";

interface Blog {
  id: number;
  name: string;
  title: string;
  content: string;
  image: string;
  slug: string;
}

export default function BlogPostPage() {
  const params = useParams(); // Dùng useParams để lấy params từ router
  const [post, setPost] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("params:", params); // 🛠 Kiểm tra giá trị params
  
    const fetchPost = async () => {
      try {
        const blogId = Number(params.id);
        console.log("Blog ID đã parse:", blogId); // 🛠 Kiểm tra ID sau khi parse
  
        if (isNaN(blogId)) {
          setError("ID bài viết không hợp lệ!");
          setLoading(false);
          return;
        }
  
        const data = await GetDetailBlog(blogId);
        console.log("Dữ liệu bài viết:", data); // 🛠 Kiểm tra API trả về gì
        setPost(data);
      } catch (err) {
        setError("Không thể tải bài viết!");
      } finally {
        setLoading(false);
      }
    };
  
    fetchPost();
  }, [params.id]);
  
  

  if (loading) {
    return <div className="container mx-auto py-8">⏳ Đang tải bài viết...</div>;
  }

  if (error || !post) {
    return <div className="container mx-auto py-8 text-red-500">❌ {error || "Bài viết không tồn tại!"}</div>;
  }

  return (
    <main className="bg-white py-8">
      <div className="container mx-auto">
        <Breadcrumb
          items={[
            { label: "Trang chủ", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title, href: `/blogs/${post.slug}` },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          <div className="lg:col-span-3">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-600 mb-2">
              Tác giả: <strong>{post.name}</strong>
            </p>
            <img src={post.image} alt={post.title} width={640} className="mt-4 rounded-lg shadow-md text-center" />
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          <div className="lg:col-span-1">
            <AboutSidebar />
          </div>
        </div>
      </div>
    </main>
  );
}
