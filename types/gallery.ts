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
    { value: "kieu-toc", label: "Kiểu tóc" },
    { value: "dich-vu", label: "Dịch vụ" },
    { value: "toc-nam", label: "Tóc uốn" },
    { value: "phun-xam-tham-my", label: "Phun xăm thẩm mỹ" },
    { value: "co-so-vat-chat", label: "Cơ sở vật chất" },
    { value: "su-kien", label: "Sự kiện" },

  ]
  
  