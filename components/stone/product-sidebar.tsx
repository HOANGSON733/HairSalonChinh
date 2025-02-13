import Image from "next/image"
import Link from "next/link"

const categories = [
  { name: "Tất cả sản phẩm", href: "/stone/san-pham" },
  { name: "Kiểu tóc", href: "/stone/kieu-toc" },
  { name: "Chăm sóc tóc", href: "/stone/cham-soc-toc" },
  { name: "Chăm sóc da", href: "/stone/cham-soc-da" },
  { name: "Chăm sóc cơ thể", href: "/stone/cham-soc-co-the" },
]

const relatedProducts = [
  {
    name: "Sáp Reuzel Red Pomade Phong Cách Cổ Điển",
    price: "228,000đ",
    image: "https://clmensstore.com/wp-content/uploads/2020/03/Reuzel-Red-Pomade-2.png",
    href: "/stone/san-pham/1",
  },
  {
    name: "Sáp Reuzel Clay Matte Pomade Không Bóng",
    price: "273,000đ",
    image: "https://down-vn.img.susercontent.com/file/c6b46d4e822bea7eb4cbc145609b4213",
    href: "/stone/san-pham/2",
  },
  {
    name: "Sáp Reuzel Fiber Pomade Mềm Dẻo",
    price: "271,000đ",
    image: "https://product.hstatic.net/1000246396/product/reuzel-fiber-pomade_945067b3694e41e992dde2e50eb2df82_master.jpg",
    href: "/stone/san-pham/3",
  },
  {
    name: "Sáp vuốt tóc Loreal chính hãng",
    price: "271,000đ",
    image: "https://product.hstatic.net/200000168861/product/1550461800-1075701924-sap-vu-t-toc-nam-loreal_a3dbab94182b43f081f70bd7e172127a.jpg",
    href: "/stone/san-pham/4",
  },
]

export default function ProductSidebar() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-lg font-bold bg-black text-white p-2 mb-4">DANH MỤC SẢN PHẨM</h2>
        <div className="space-y-2">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="block px-4 py-2 hover:bg-gray-100 hover:text-[#FF9900] transition-colors rounded"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold bg-black text-white p-2 mb-4">SẢN PHẨM LIÊN QUAN</h2>
        <div className="space-y-4">
          {relatedProducts.map((product) => (
            <Link href={product.href} key={product.name} className="flex gap-4 group">
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div>
                <h3 className="text-sm group-hover:text-[#FF9900] transition-colors line-clamp-2">{product.name}</h3>
                <p className="text-red-600 font-bold">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

