"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { createProductAction } from "../../app/products/actions";

export function CreateProductForm() {
  const router = useRouter();

  const [name, setName] = useState("");

  async function submit() {
    if (!name.trim()) return;

    await createProductAction({
      businessId: "business-001",
      name,
      type: "FOOD",
      price: 10,
    });

    setName("");

    router.refresh();
  }

  return (
    <div className="flex gap-3">
      <input
        className="rounded-xl bg-neutral-900 px-4 py-3 text-white"
        placeholder="Nom du produit"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button
        onClick={submit}
        className="rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white"
      >
        Ajouter
      </button>
    </div>
  );
}