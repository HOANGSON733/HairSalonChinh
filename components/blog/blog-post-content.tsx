"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react"

interface BlogPostContentProps {
  post: {
    title: string
    content: string
    sections: {
      title: string
      content: string
    }[]
  }
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const handleShare = (platform: string) => {
    if (typeof window === "undefined") return // Đảm bảo chỉ chạy trên client

    const url = encodeURIComponent(window.location.href)
    const text = encodeURIComponent(post.title)

    const shareUrls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`,
      messenger: `fb-messenger://share/?link=${url}`,
    }

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], "_blank")
    }
  }

  const relatedPosts = [
    { title: "Là đàn ông, đừng bỏ lỡ 3 kiểu tóc nam Hot Trend nhất 2024 này", slug: "3-kieu-toc-nam-hot-trend" },
    { title: "Side Swept Nam: Làm thế nào để duy trì vẻ lãng tử dài lâu?", slug: "side-swept-nam" },
    { title: "Hướng dẫn vuốt tóc layer tại nhà mà vẫn đẹp hoàn hảo", slug: "huong-dan-vuot-toc-layer" },
    { title: 'Bí quyết chăm sóc tóc Sport để anh em luôn "chuẩn men"', slug: "cham-soc-toc-sport" },
  ]

  return (
    <article className="space-y-6">
      <h1 className="text-3xl font-bold">{post.title}</h1>

      <p className="text-gray-700 leading-relaxed">{post.content}</p>

      <div className="space-y-8">
        {post.sections.map((section, index) => (
          <section key={index}>
            <h2 className="text-xl font-bold mb-4">
              {index + 1}. {section.title}
            </h2>
            <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">{section.content}</div>
          </section>
        ))}
      </div>

      <div className="border-t border-b border-gray-200 py-4 my-8">
        <div className="flex items-center gap-4">
          <span className="text-gray-600">Chia sẻ</span>
          {[
            { platform: "facebook", icon: <Facebook className="w-4 h-4" />, color: "bg-blue-600 hover:bg-blue-700" },
            { platform: "twitter", icon: <Twitter className="w-4 h-4" />, color: "bg-sky-500 hover:bg-sky-600" },
            { platform: "linkedin", icon: <Linkedin className="w-4 h-4" />, color: "bg-blue-500 hover:bg-blue-600" },
            { platform: "messenger", icon: <MessageCircle className="w-4 h-4" />, color: "bg-blue-400 hover:bg-blue-500" },
          ].map(({ platform, icon, color }) => (
            <button
              key={platform}
              onClick={() => handleShare(platform)}
              className={`w-8 h-8 flex items-center justify-center rounded-full text-white ${color}`}
              aria-label={`Chia sẻ trên ${platform}`}
            >
              {icon}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-bold mb-4">BÀI VIẾT CÙNG CHỦ ĐỀ</h3>
        <ul className="space-y-4">
          {relatedPosts.map(({ title, slug }) => (
            <li key={slug}>
              <Link href={`/blog/${slug}`} className="text-gray-700 hover:text-[#FF9900] transition-colors">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
