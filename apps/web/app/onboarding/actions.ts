"use server";

import { auth } from "../../lib/auth/auth";
import { createBusinessService } from "../../lib/services/create-business-service";

export async function createBusinessAction(name: string) {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Utilisateur non connecté");
  }

  return createBusinessService({
    userId: session.user.id,
    name,
  });
}