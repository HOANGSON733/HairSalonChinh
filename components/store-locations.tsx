import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StoreLocations() {
  const locations = [
    {
      id: 3,
      address: "Khu phố 6 TT Giồng Riềng",
      district: "Thị Trấn Giồng Riềng. Tỉnh Kiên Giang",
      phone: "0967.100.522",
    },
    {
      id: 4,
      address: "Khu phố 6 TT Giồng Riềng",
      district: "Thị Trấn Giồng Riềng. Tỉnh Kiên Giang",
      phone: "0896.565.164",
    },
    {
      id: 5,
      address: "Khu phố 6 TT Giồng Riềng",
      district: "Thị Trấn Giồng Riềng. Tỉnh Kiên Giang",
      phone: "0896.565.156",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-800 to-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-white mb-8 text-center">
          DANH SÁCH CỬA HÀNG <span className="text-orange-500">(8H00 - 20H00)</span>
        </h2>
        <div className="space-y-6">
          {locations.map((location) => (
            <div
              key={location.id}
              className="bg-zinc-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-between"
            >
              <div>
                <div className="text-lg font-semibold text-white mb-1">
                  {location.address}
                </div>
                <div className="text-sm text-gray-400 mb-2">{location.district}</div>
                <div className="text-orange-400 font-bold">{location.phone}</div>
              </div>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-orange-400 text-orange-400 hover:bg-orange-500 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Gọi ngay
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white hover:brightness-110 transition-transform duration-200 transform hover:scale-105"
                >
                  Đặt lịch
                </Button>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
