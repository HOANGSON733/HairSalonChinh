import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Package, FileText, Users } from "lucide-react"

const stats = [
  {
    title: "Tổng sản phẩm",
    value: "245",
    icon: Package,
  },
  {
    title: "Đặt lịch hôm nay",
    value: "15",
    icon: CalendarDays,
  },
  {
    title: "Bài viết",
    value: "32",
    icon: FileText,
  },
  {
    title: "Khách hàng",
    value: "1,234",
    icon: Users,
  },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-500 mt-2">Xin chào, chào mừng trở lại!</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add more dashboard content here */}
    </div>
  )
}

