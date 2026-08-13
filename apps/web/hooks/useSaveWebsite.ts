"use client";

import { useMutation } from "@tanstack/react-query";

export function useSaveWebsite() {
  return useMutation({
    mutationFn: async (body: any) => {
      const res = await fetch("/api/editor/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        throw new Error("Save failed");
      }

      return res.json();
    },
  });
}