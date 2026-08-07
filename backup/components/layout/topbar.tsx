"use client";

import { useBusiness } from "../../lib/business/use-business";

export function Topbar() {
  const business = useBusiness();

  return (
    <header className="flex h-20 items-center justify-between border-b border-neutral-800 bg-neutral-950 px-8">
      <div>
        <h2 className="text-2xl font-bold text-white">
          Dashboard
        </h2>

        <p className="text-sm text-neutral-400">
          Bienvenue sur FastOS.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="rounded-full bg-neutral-900 px-4 py-2 text-sm text-neutral-300">
          {business.name}
        </div>
      </div>
    </header>
  );
}