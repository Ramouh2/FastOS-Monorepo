import { prisma } from "../prisma/client";

export async function updateOnboardingBusiness(input: {
  userId: string;
  name: string;
}) {
  const name = input.name.trim();

  if (!name) {
    throw new Error("Le nom du restaurant est obligatoire.");
  }


  const existingBusiness = await prisma.business.findFirst({
    where: {
      userId: input.userId,
    },
  });


  if (existingBusiness) {
    return prisma.business.update({
      where: {
        id: existingBusiness.id,
      },
      data: {
        name,
        status: "ACTIVE",
      },
    });
  }


  return prisma.business.create({
    data: {
      userId: input.userId,
      name,
      status: "ACTIVE",

      aiProfile: {
        create: {
          businessType: "restaurant",
          location: "",
          audience: "",
          style: "",
        },
      },

      aiConversation: {
        create: {
          stage: "DISCOVERY",
          readyToBuild: false,
        },
      },

      website: {
        create: {
          title: name,
          slug: name
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, ""),

          published: false,
        },
      },
    },

    include: {
      website: true,
      aiProfile: true,
      aiConversation: true,
    },
  });
}