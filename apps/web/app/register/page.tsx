"use client";

import { useState } from "react";
import { registerUser } from "./actions";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit() {
  try {
    await registerUser(name, email, password);

    window.location.href = "/dashboard";
  } catch (error) {
    alert(
      error instanceof Error
        ? error.message
        : "Une erreur est survenue.",
    );
  }
}

  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-950">
      <div className="w-full max-w-md rounded-2xl border border-neutral-800 bg-neutral-900 p-8">
        <h1 className="mb-6 text-3xl font-bold text-white">
          Créer un compte
        </h1>

        <input
          className="mb-4 w-full rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-white"
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="mb-4 w-full rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-white"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="mb-6 w-full rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-white"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={submit}
          className="w-full rounded-xl bg-orange-500 py-3 font-semibold text-white"
        >
          Créer mon compte
        </button>
      </div>
    </main>
  );
}