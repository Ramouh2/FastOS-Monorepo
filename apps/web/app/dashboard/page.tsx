import { AppLayout } from "../../components/layout/app-layout";
import {
  DollarSign,
  ShoppingBag,
  Package,
  Bot,
} from "lucide-react";

const cards = [
  {
    title: "Chiffre d'affaires",
    value: "0 €",
    icon: DollarSign,
  },
  {
    title: "Commandes",
    value: "0",
    icon: ShoppingBag,
  },
  {
    title: "Produits",
    value: "0",
    icon: Package,
  },
  {
    title: "Nora AI",
    value: "En ligne",
    icon: Bot,
  },
];

export default function DashboardPage() {
  return (
    <AppLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold">
            Dashboard
          </h1>

          <p className="mt-2 text-neutral-400">
            Bienvenue sur FastOS.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cards.map(({ title, value, icon: Icon }) => (
            <div
              key={title}
              className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 transition hover:border-orange-500"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-neutral-400">
                  {title}
                </p>

                <Icon
                  size={20}
                  className="text-orange-500"
                />
              </div>

              <h2 className="mt-6 text-3xl font-bold">
                {value}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}