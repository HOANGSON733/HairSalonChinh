// "use client"

// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { cn } from "@/lib/utils"
// import { LayoutDashboard, Package, CalendarDays, FileText, Settings, ImageIcon } from "lucide-react"

// const menuItems = [
//   {
//     title: "Dashboard",
//     href: "/admin",
//     icon: LayoutDashboard,
//   },
//   {
//     title: "Sản phẩm",
//     href: "/admin/products",
//     icon: Package,
//   },
//   {
//     title: "Đặt lịch",
//     href: "/admin/appointments",
//     icon: CalendarDays,
//   },
//   {
//     title: "Tin tức",
//     href: "/admin/news",
//     icon: FileText,
//   },
//   {
//     title: "Gallery",
//     href: "/admin/gallery",
//     icon: ImageIcon,
//   },
//   {
//     title: "Cài đặt",
//     href: "/admin/settings",
//     icon: Settings,
//   },
// ]

// export default function AdminSidebar() {
//   const pathname = usePathname()

//   return (
//     <aside className="w-64 bg-white border-r min-h-screen fixed left-0 top-16 overflow-y-auto">
//       <nav className="p-4">
//         <div className="mb-8">
//           <h2 className="px-3 text-lg font-semibold">Admin Panel</h2>
//         </div>
//         <ul className="space-y-2">
//           {menuItems.map((item) => (
//             <li key={item.href}>
//               <Link
//                 href={item.href}
//                 className={cn(
//                   "flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors",
//                   pathname === item.href && "bg-gray-100 text-black font-medium",
//                 )}
//               >
//                 <item.icon className="w-5 h-5" />
//                 {item.title}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </aside>
//   )
// }
"use client"
import React, { useState } from 'react';
import {
  AppstoreOutlined,
  PictureOutlined,
  FileImageOutlined,
  SettingOutlined,
  DashboardOutlined,
} from '@ant-design/icons';
import { Menu, Layout, } from 'antd';
import Sider from 'antd/es/layout/Sider';

const GalleryApp = () => {
  const [collapsed] = useState(false);
  // Menu items for the sidebar
  const items = [
    { key: 'dashboard', icon: <DashboardOutlined />, label: 'Dashboard' },
    { key: 'gallery', icon: <PictureOutlined />, label: 'Gallery' },
    { key: 'new', icon: <PictureOutlined />, label: 'Gallery' },
    { key: 'blog', icon: <PictureOutlined />, label: 'Gallery' },
    {
      key: 'categories',
      icon: <AppstoreOutlined />,
      label: 'Categories',
      children: [
        { key: 'nature', label: 'Nature' },
        { key: 'city', label: 'City' },
        { key: 'abstract', label: 'Abstract' },
      ]
    },
    { key: 'uploads', icon: <FileImageOutlined />, label: 'Uploads' },
    { key: 'settings', icon: <SettingOutlined />, label: 'Settings' },
  ];


  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed} theme="dark">
        <div className="flex justify-center py-4">
          <FileImageOutlined style={{ fontSize: '24px', color: 'white' }} />
          {!collapsed && <span className="text-white text-lg ml-2 font-semibold">Gallery App</span>}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['gallery']}
          defaultOpenKeys={['categories']}
          items={items}
        />
      </Sider>

    </Layout>
  );
};

export default GalleryApp;