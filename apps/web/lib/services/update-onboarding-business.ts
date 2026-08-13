import { prisma } from "../prisma/client";

export async function updateOnboardingBusiness(input: {
  userId: string;
  name: string;
}) {
  const name = input.name.trim();

  if (!name) {
    throw new Error("Le nom du restaurant est obligatoire.");
  }

  const business = await prisma.business.findFirst({
    where: {
      userId: input.userId,
    },
  });

  if (!business) {
    throw new Error("Aucun restaurant associé à cet utilisateur.");
  }

  return prisma.business.update({
    where: {
      id: business.id,
    },

    data: {
      name,
      status: "ACTIVE",
    },

    include: {
      aiProfile: true,
      aiConversation: true,
    },
  });
}