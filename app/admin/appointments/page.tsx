import AppointmentsCalendar from "@/components/admin/appointments-calendar"

export default function AppointmentsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Quản lý đặt lịch</h1>
      <AppointmentsCalendar />
    </div>
  )
}

