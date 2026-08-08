"use server";

import { prisma } from "../../lib/prisma/client";
import { auth } from "../../lib/auth/auth";

export async function createBusinessAction(name: string) {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Utilisateur non connecté");
  }

  const business = await prisma.business.create({
    data: {
      name,
      status: "ACTIVE",
      userId: session.user.id,
    },
  });

  return business;
}