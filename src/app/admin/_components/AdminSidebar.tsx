"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiGrid, FiFolder, FiFileText, FiHome } from "react-icons/fi";
import clsx from "clsx";

const links = [
  { href: "/admin", label: "Overview", icon: FiGrid },
  { href: "/admin/categories", label: "Categories", icon: FiFolder },
  { href: "/admin/news", label: "News", icon: FiFileText },
  { href: "/admin/properties", label: "Properties", icon: FiHome },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 h-[100dvh] border-r bg-white/80 backdrop-blur p-4 w-64 hidden md:block">
      <h2 className="text-xl font-semibold mb-4">Admin</h2>
      <nav className="space-y-1">
        {links.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={clsx(
                "flex items-center gap-3 px-3 py-2 rounded-lg transition",
                active
                  ? "bg-black text-white"
                  : "hover:bg-gray-100 text-gray-800"
              )}
            >
              <Icon className="shrink-0" />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
