import { Bell, Search } from "lucide-react";

export function Topbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-neutral-800 bg-neutral-950 px-8">
      <div className="relative w-96">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500"
        />

        <input
          placeholder="Rechercher..."
          className="w-full rounded-xl border border-neutral-800 bg-neutral-900 py-3 pl-11 pr-4 outline-none transition focus:border-orange-500"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-xl border border-neutral-800 p-3 hover:border-orange-500">
          <Bell size={18} />
        </button>

        <div className="rounded-xl bg-neutral-900 px-4 py-3">
          🍔 Fast Burger
        </div>

        <div className="rounded-full bg-orange-500 px-4 py-2 font-semibold">
          R
        </div>
      </div>
    </header>
  );
}