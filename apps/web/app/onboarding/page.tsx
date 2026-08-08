"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createBusinessAction } from "./actions";

export default function OnboardingPage() {

  const router = useRouter();

  const [name, setName] = useState("");

  async function submit() {

    if (!name.trim()) return;

    await createBusinessAction(name);

    router.push("/dashboard");
  }


  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-950">

      <div className="w-full max-w-md rounded-2xl border border-neutral-800 bg-neutral-900 p-8">

        <h1 className="mb-6 text-3xl font-bold text-white">
          Créez votre restaurant
        </h1>


        <input
          className="mb-6 w-full rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-white"
          placeholder="Nom du restaurant"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />


        <button
          onClick={submit}
          className="w-full rounded-xl bg-orange-500 py-3 font-semibold text-white"
        >
          Créer mon restaurant
        </button>

      </div>

    </main>
  );
}