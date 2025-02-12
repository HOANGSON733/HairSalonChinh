import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}
// 
export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-600">
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center">
          {index > 0 && <ChevronRight className="w-4 h-4 mx-2" />}
          <Link
            href={item.href}
            className={`hover:text-[#FF9900] transition-colors ${
              index === items.length - 1 ? "text-gray-900 font-medium" : ""
            }`}
          >
            {item.label}
          </Link>
        </div>
      ))}
    </nav>
  )
}

