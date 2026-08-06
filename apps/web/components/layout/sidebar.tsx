import {
  LayoutDashboard,
  Building2,
  Package,
  Bot,
  BarChart3,
  Settings,
} from "lucide-react";

const items = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Building2, label: "Businesses" },
  { icon: Package, label: "Products" },
  { icon: Bot, label: "AI Agents" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Settings, label: "Settings" },
];

export function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r border-neutral-800 bg-slate-900 p-6">
      <h1 className="mb-8 text-3xl font-bold text-white">
        FastOS
      </h1>

      <nav className="flex flex-col gap-2">
        {items.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-left text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            <Icon size={18} />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}