import React, { useState, useEffect } from "react";

export const TikTokThumbnail = ({ videoId, onDataFetched }: { videoId: string, onDataFetched:(likes: number, title: string) => void }) => {
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true); // State loading

  useEffect(() => {
    const fetchThumbnail = async () => {
      try {
        const apiUrl = `https://www.tikwm.com/api/?url=https://www.tiktok.com/@hair_salon_chinh/video/${videoId}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.data) {
          setThumbnail(data.data.cover || null);
          onDataFetched(data.data.digg_count || 0, data.data.title || "Không có tiêu đề");
        } else {
          console.error("Không tìm thấy ảnh thumbnail");
        }
      } catch (error) {
        console.error("Lỗi khi lấy thumbnail:", error);
      } finally {
        setLoading(false); // Tắt loading khi xong
      }
    };

    fetchThumbnail();
  }, [videoId, onDataFetched]);

  return (
    <div className="relative w-[360px] h-[500px]">
      {loading ? (
        <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-600">
          {/* Loading Spinner */}
          <div className="h-12 w-12 border-4 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : thumbnail ? (
        <img
          src={thumbnail}
          alt="TikTok Thumbnail"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-600">
          Đang tải...
        </div>
      )}
    </div>
  );
};
