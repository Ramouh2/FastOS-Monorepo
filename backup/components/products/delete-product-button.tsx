"use client";

import { useRouter } from "next/navigation";
import { deleteProductAction } from "../../app/products/actions";

type DeleteProductButtonProps = {
  id: string;
};

export function DeleteProductButton({
  id,
}: DeleteProductButtonProps) {
  const router = useRouter();

  async function remove() {
    await deleteProductAction(id);

    router.refresh();
  }

  return (
    <button
      onClick={remove}
      className="rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-red-700"
    >
      Supprimer
    </button>
  );
}