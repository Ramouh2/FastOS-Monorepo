import { AppLayout } from "../../components/layout/app-layout";

export default function DashboardPage() {
  return (
    <AppLayout>
      <div className="grid grid-cols-4 gap-6">
        <div className="rounded-2xl bg-neutral-900 p-6">
          <p className="text-sm text-neutral-400">
            Chiffre d&apos;affaires
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            0 €
          </h2>
        </div>

        <div className="rounded-2xl bg-neutral-900 p-6">
          <p className="text-sm text-neutral-400">
            Commandes
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            0
          </h2>
        </div>

        <div className="rounded-2xl bg-neutral-900 p-6">
          <p className="text-sm text-neutral-400">
            Produits
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            0
          </h2>
        </div>

        <div className="rounded-2xl bg-neutral-900 p-6">
          <p className="text-sm text-neutral-400">
            Nora
          </p>

          <h2 className="mt-4 text-xl font-semibold">
            Aucun appel aujourd&apos;hui
          </h2>
        </div>
      </div>
    </AppLayout>
  );
}