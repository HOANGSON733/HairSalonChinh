export interface GalleryItem {
    id: number
    title: string
    category: string
    image: string
    date: string
  }
  // 
  export interface GalleryCategory {
    value: string
    label: string
  }
  
  export const GALLERY_CATEGORIES: GalleryCategory[] = [
    { value: "kieu-toc", label: "Kiểu Tóc" },
    { value: "dich-vu", label: "Dịch Vụ" },
    { value: "toc-nam", label: "Tóc Nam" },
    { value: "phun-xam-tham-my", label: "Phun Xăm Thẩm Mỹ" },
    { value: "co-so-vat-chat", label: "Cơ Sở Vật Chất" },
    { value: "su-kien", label: "Sự Kiện" },

  ]
  
  