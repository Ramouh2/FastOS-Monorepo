import { prisma } from "../prisma/client";

function createSlug(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

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

      include: {
        website: true,
        aiProfile: true,
        aiConversation: true,
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
          slug: createSlug(name),
          published: false,

          sections: {
            create: [
              {
                type: "HERO",
                title: name,
                content: "Bienvenue dans notre restaurant",
                position: 1,
              },
              {
                type: "MENU",
                title: "Notre menu",
                content: "Découvrez nos plats",
                position: 2,
              },
              {
                type: "GALLERY",
                title: "Galerie",
                content: "Nos meilleurs produits",
                position: 3,
              },
              {
                type: "CONTACT",
                title: "Contact",
                content: "Adresse et horaires",
                position: 4,
              },
            ],
          },
        },
      },
    },

    include: {
      website: {
        include: {
          sections: true,
        },
      },

      aiProfile: true,

      aiConversation: true,
    },
  });
}