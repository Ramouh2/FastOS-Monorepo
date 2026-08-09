import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const website = await prisma.website.findUnique({
    where: {
      slug: "rams-restaurant",
    },
  });

  if (!website) {
    throw new Error("Website introuvable");
  }

  await prisma.websiteSection.deleteMany({
    where: {
      websiteId: website.id,
    },
  });

  await prisma.websiteSection.createMany({
    data: [
      {
        websiteId: website.id,
        type: "HERO",
        title: "Bienvenue",
        content: "Bienvenue chez ram's Restaurant",
        position: 1,
        visible: true,
      },
      {
        websiteId: website.id,
        type: "CONTACT",
        title: "Contact",
        content: "Adresse et horaires",
        position: 2,
        visible: true,
      },
      {
        websiteId: website.id,
        type: "MENU",
        title: "Notre menu",
        content: "Découvrez nos plats",
        position: 3,
        visible: true,
      },
      {
        websiteId: website.id,
        type: "GALLERY",
        title: "Galerie",
        content: "Nos photos",
        position: 4,
        visible: true,
      },
    ],
  });

  console.log("✅ Sections créées");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
