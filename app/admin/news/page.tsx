import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import NewsTable from "@/components/admin/news-table"

export default function NewsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Quản lý tin tức</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Thêm bài viết
        </Button>
      </div>

      <NewsTable />
    </div>
  )
}

