"use client";
import { AppLayout } from "../../components/layout/app-layout";
import { useBusiness } from "../../lib/business/use-business";

export default function BusinessesPage() {
  const business = useBusiness();

  return (
    <AppLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold">
            Businesses
          </h1>

          <p className="mt-2 text-neutral-400">
            Restaurant actuellement sélectionné.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8">
          <h2 className="text-2xl font-bold">
            {business.name}
          </h2>

          <div className="mt-6 space-y-2 text-neutral-300">
            <p>
  <strong>ID :</strong> {business.id}
</p>

<p>
  <strong>Statut :</strong> {business.status}
</p>

<p>
  <strong>User ID :</strong> {business.userId}
</p>

<p>
  <strong>Créé le :</strong>{" "}
  {business.createdAt.toLocaleDateString()}
</p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}