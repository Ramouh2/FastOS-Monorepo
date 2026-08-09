import { prisma } from "../../lib/prisma/client";

async function main() {

  const website = await prisma.website.findUnique({
    where: {
      slug: "fast-os",
    },
  });

  if (!website) {
    throw new Error("Website introuvable");
  }

  await prisma.websiteSection.createMany({
    data: [
      {
        websiteId: website.id,
        type: "HERO",
        title: "Bienvenue chez Fast OS",
        content: "Le meilleur restaurant",
        position: 1,
      },
      {
        websiteId: website.id,
        type: "MENU",
        title: "Notre menu",
        content: "Découvrez nos plats",
        position: 2,
      },
      {
        websiteId: website.id,
        type: "GALLERY",
        title: "Galerie",
        content: "Nos meilleurs produits",
        position: 3,
      },
      {
        websiteId: website.id,
        type: "CONTACT",
        title: "Contact",
        content: "Adresse et horaires",
        position: 4,
      },
    ],
  });

  console.log("Sections créées");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
