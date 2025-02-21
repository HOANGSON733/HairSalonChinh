import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Package, FileText, Users } from "lucide-react";

const stats = [
  { title: "Tổng sản phẩm", value: "245", icon: Package },
  { title: "Đặt lịch hôm nay", value: "15", icon: CalendarDays },
  { title: "Bài viết", value: "32", icon: FileText },
  { title: "Khách hàng", value: "1,23cvfsdsbzbfs4", icon: Users },
];

export default function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-5 w-5 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
