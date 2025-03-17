"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { GetBlogs } from "@/api/api"

type BlogPost = {
  id: number;
  title: string;
  content: string;
  image: string;
  description: string;
  slug: string;
};

export default function BlogContent() {
  // 🛠️ Định nghĩa kiểu dữ liệu cho useState
  const [blogPosts, setSericePosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchDataBlog = async () => {
      try {
        const data = await GetBlogs();
        setSericePosts(data); // 🛠️ Đảm bảo `GetBlogs()` trả về đúng BlogPost[]
        console.log("Data", data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu blog:", error);
      }
    };

    fetchDataBlog();
  }, []);

  return (
    <div className="space-y-8 px-2">
      {blogPosts.map((post) => (
        <article key={post.id} className="group relative">
          <Link href={`/blog/${post.id}`} className="flex gap-6">
            <div className="w-1/3">
              <div className="relative aspect-[4/3]">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                />
              </div>
            </div>
            <div className="w-2/3">
              <h2 className="text-xl font-semibold mb-2 group-hover:text-[#FF9900] transition-colors">
                {post.title}
              </h2>

              <p className="text-gray-600 line-clamp-2">{post.description}</p>
            </div>
          </Link>
          <div className="border-b border-dotted border-gray-300 mt-8" />
        </article>
      ))}
    </div>
  )
}
