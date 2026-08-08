"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit() {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      alert("Email ou mot de passe incorrect.");
      return;
    }

    console.log("LOGIN RESULT:", result);

window.location.href = "/dashboard";
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-950">
      <div className="w-full max-w-md rounded-2xl border border-neutral-800 bg-neutral-900 p-8">
        <h1 className="mb-6 text-3xl font-bold text-white">
          Connexion
        </h1>

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
          Se connecter
        </button>
      </div>
    </main>
  );
}