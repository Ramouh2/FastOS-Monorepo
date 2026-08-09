"use client";

import { useFormStatus } from "react-dom";

export default function SaveButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="
        rounded-xl
        bg-orange-500
        px-5
        py-3
        font-semibold
        text-white
        transition-all
        duration-200
        cursor-pointer
        hover:bg-orange-400
        hover:scale-105
        active:scale-95
        disabled:cursor-not-allowed
        disabled:opacity-50
      "
    >
      {pending ? "Sauvegarde..." : "Sauvegarder"}
    </button>
  );
}