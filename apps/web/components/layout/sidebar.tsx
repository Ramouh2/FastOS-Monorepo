"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  Package,
  Bot,
  BarChart3,
  Settings,
} from "lucide-react";

const items = [
  {
    href: "/dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
  },
  {
    href: "/businesses",
    icon: Building2,
    label: "Businesses",
  },
  {
    href: "/products",
    icon: Package,
    label: "Products",
  },
  {
    href: "/ai",
    icon: Bot,
    label: "AI Agents",
  },
  {
    href: "/analytics",
    icon: BarChart3,
    label: "Analytics",
  },
  {
    href: "/settings",
    icon: Settings,
    label: "Settings",
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-neutral-800 bg-slate-900 p-6">
      <h1 className="mb-8 text-3xl font-bold text-white">
        FastOS
      </h1>

      <nav className="flex flex-col gap-2">
        {items.map(({ href, icon: Icon, label }) => {
          const active = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                active
                  ? "bg-orange-500 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon size={18} />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}