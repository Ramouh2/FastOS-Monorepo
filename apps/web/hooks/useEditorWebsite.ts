"use client";

import { useQuery } from "@tanstack/react-query";

export function useEditorWebsite(websiteId: string) {
  return useQuery({
    queryKey: ["editor", websiteId],
    queryFn: async () => {
      const res = await fetch(`/api/editor/${websiteId}`);

      if (!res.ok) {
        throw new Error("Unable to load website");
      }

      return res.json();
    },
  });
}