import { prisma } from "../prisma/client";

function createSlug(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export async function createBusinessService(input: {
  userId: string;
  name: string;
}) {
  const slug = createSlug(input.name);

  const business = await prisma.business.create({
    data: {
      userId: input.userId,
      name: input.name,
      status: "ACTIVE",

      website: {
        create: {
          title: input.name,
          slug,
          published: false,

          sections: {
            create: [
              {
                type: "HERO",
                title: input.name,
                content:
                  "Bienvenue dans notre restaurant",
                position: 1,
              },

              {
                type: "MENU",
                title: "Notre menu",
                content:
                  "Découvrez nos plats",
                position: 2,
              },

              {
                type: "GALLERY",
                title: "Galerie",
                content:
                  "Nos meilleurs produits",
                position: 3,
              },

              {
                type: "CONTACT",
                title: "Contact",
                content:
                  "Adresse et horaires",
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
    },
  });

  return business;
}