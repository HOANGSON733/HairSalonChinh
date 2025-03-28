"use client"
import Image from "next/image";
import Link from "next/link";
import { GetBlogs } from "@/api/api";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  createdAt?: string;
}

export default function BlogSection() {
  const [blogPosts, setBlogPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDataBlog = async () => {
      try {
        setIsLoading(true);
        const response = await GetBlogs();
        const posts = response.data || response;
        
        // Sort posts by most recent (assuming createdAt exists)
        const sortedPosts = posts.sort((a: Post, b: Post) => 
          new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
        );
        
        setBlogPosts(sortedPosts);
        setError(null);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setError("Không thể tải bài viết. Vui lòng thử lại sau.");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchDataBlog();
  }, []);

  // Truncate text to a specific length

  const truncateText = (text: string | undefined | null, maxLength: number) => {
    if (!text) return '';
    return text.length > maxLength 
    ? text.substring(0, maxLength) + '...' 
    : text;
};

  if (isLoading) {
    return (
      <section className="py-16 bg-zinc-900 min-h-[500px] flex items-center justify-center">
        <div className="animate-pulse text-white text-2xl">Đang tải bài viết...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-zinc-900 min-h-[500px] flex items-center justify-center">
        <div className="text-red-500 text-2xl">{error}</div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-white text-center md:text-left mb-4 md:mb-0">
            BÍ QUYẾT LÀM ĐẸP TỪ{" "}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">
              HAIR SALON CHÍNH
            </span>
          </h2>
          <Link 
            href="/blog" 
            className="inline-flex items-center text-[#FF9900] font-medium hover:underline transition-colors"
          >
            XEM TẤT CẢ 
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {blogPosts.length === 0 ? (
          <div className="text-center text-gray-400 text-xl">
            Chưa có bài viết nào.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 6).map((post) => (
              <Link 
                href={`/blog/${post.id}`} 
                key={post.id}
                className="group"
              >
                <div className="bg-zinc-800 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="relative w-full aspect-video overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-[#FF9900] transition-colors">
                      {truncateText(post.title, 50)}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {truncateText(post.excerpt, 100)}
                    </p>
                    <div className="flex items-center text-[#FF9900] font-medium hover:underline">
                      Xem thêm
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 ml-2" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}