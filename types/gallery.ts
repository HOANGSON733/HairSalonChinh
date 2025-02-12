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
    { value: "all", label: "Tất cả" },
    { value: "hairstyles", label: "Kiểu tóc" },
    { value: "services", label: "Dịch vụ" },
    { value: "hair", label: "Tóc uốn" },
    { value: "academy", label: "Phun xăm thẩm mỹ" },
    { value: "facility", label: "Cơ sở vật chất" },
    { value: "events", label: "Sự kiện" },

  ]
  
  