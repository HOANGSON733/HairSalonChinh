import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import ProductsTable from "@/components/admin/products-table"

export default function ProductsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Quản lý sản phẩm</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Thêm sản phẩm
        </Button>
      </div>

      <ProductsTable />
    </div>
  )
}

