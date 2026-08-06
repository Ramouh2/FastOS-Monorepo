const menu = [
  "Dashboard",
  "Restaurant",
  "Produits",
  "Commandes",
  "Paiements",
  "Stock",
  "Employés",
  "Analytics",
  "Paramètres",
];

export function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-neutral-800 bg-neutral-950 p-6">
      <h1 className="mb-10 text-2xl font-bold text-orange-500">
        FASTOS
      </h1>

      <nav className="flex flex-col gap-2">
        {menu.map((item) => (
          <button
            key={item}
            className="rounded-xl px-4 py-3 text-left text-neutral-300 transition hover:bg-neutral-900 hover:text-white"
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
}