import AdminSidebar from "@/components/admin/admin-sidebar";
import DashboardStats from "@/components/admin/dashboard-stats";

export default function AdminDashboardPage() {
  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard1234</h1>
        <p className="text-gray-500 mt-2">Xin chào, chào mừng trở lại!</p>
      </div>    
      <DashboardStats />
      <AdminSidebar />
    </div>
  );
}
