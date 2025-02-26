import Login from "@/components/admin/admin-login"

export default function AdminDashboar() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-500 mt-2">Xin chào, chào mừng trở lại!</p>
        <Login /> 
      </div>

    </div>
  )
}

