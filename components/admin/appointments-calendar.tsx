"use client"

import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

const appointments = [
  {
    id: 1,
    customerName: "Nguyễn Văn A",
    service: "Cắt tóc",
    time: "09:00",
    status: "confirmed",
  },
  {
    id: 2,
    customerName: "Trần Văn B",
    service: "Uốn tóc",
    time: "10:30",
    status: "pending",
  },
  // Add more appointments...
]

export default function AppointmentsCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
      <div>
        <Calendar mode="single" selected={date} onSelect={setDate} className="bg-white rounded-lg border" />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Lịch hẹn ngày {date?.toLocaleDateString("vi-VN")}</h2>
        <div className="grid gap-4">
          {appointments.map((appointment) => (
            <Card key={appointment.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{appointment.customerName}</h3>
                    <p className="text-sm text-gray-600">{appointment.service}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{appointment.time}</div>
                    <div
                      className={`text-sm ${appointment.status === "confirmed" ? "text-green-600" : "text-yellow-600"}`}
                    >
                      {appointment.status === "confirmed" ? "Đã xác nhận" : "Chờ xác nhận"}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

