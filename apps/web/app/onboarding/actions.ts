"use server";

import { auth } from "../../lib/auth/auth";
import { updateOnboardingBusiness } from "../../lib/services/update-onboarding-business";

export async function createBusinessAction(name: string) {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Utilisateur non connecté");
  }

  return updateOnboardingBusiness({
    userId: session.user.id,
    name,
  });
}