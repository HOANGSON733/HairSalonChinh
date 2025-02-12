export default function CommitmentSection() {
  const commitments = [
    {
      days: 7,
      text: "Chiến sửa lỗi miễn phí",
    },
    {
      days: 3,
      text: "Đổi/trả hàng miễn phí",
    },
    {
      days: 15,
      text: "Bảo hành uốn/nhuộm",
    },
  ]

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-2">
        <h2 className="text-3xl font-bold text-white mb-8">CAM KẾT MIN SHAIR SKIN CARE</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {commitments.map((commitment, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-zinc-800 flex items-center justify-center mb-4 relative">
                <span className="text-2xl font-bold text-[#FF9900]">{commitment.days}</span>
                <span className="text-white text-sm absolute bottom-6">Ngày</span>
              </div>
              <span className="text-white text-sm">{commitment.text}</span>
            </div>
          ))}
          <div className="bg-zinc-800 p-6 rounded-lg">
            <p className="text-white text-sm leading-relaxed">
              Nếu anh chưa hài lòng về kiểu tóc sau khi về nhà và bất kỳ lý do gì, Min Shair Skin sẽ hỗ trợ anh sửa lại
              miễn phí để hoàn toàn miễn phí trong vòng 7 ngày. Ánh đẹp trai, bách thành thương và bảo sửa lỗi vô tận
            </p>
            <p className="text-white text-sm mt-4">Áp dụng: Salon đã ký toàn hệ thống Min Shair Skin</p>
          </div>
        </div>
      </div>
    </section>
  )
}

