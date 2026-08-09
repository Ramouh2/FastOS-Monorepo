"use server";

import { prisma } from "@/lib/prisma/client";

export async function updateSection(
  id: string,
  title: string,
  content: string
) {

  console.log("UPDATE SECTION:", {
    id,
    title,
    content,
  });


  await prisma.websiteSection.update({
    where: {
      id,
    },
    data: {
      title,
      content,
    },
  });


  console.log("SECTION UPDATED");
}