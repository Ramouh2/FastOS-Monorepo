import { BusinessAIProfile } from "@prisma/client";

import { PrismaWebsiteRepository } from "@/lib/repositories/prisma-website-repository";


const websiteRepository =
  new PrismaWebsiteRepository();




export async function generateWebsiteFromAIProfile(
  profile: BusinessAIProfile
) {


  const website =
    await websiteRepository.upsertFromAIProfile({

      businessId:
        profile.businessId,

      title:
        `${profile.businessType ?? "Entreprise"} - ${profile.location ?? ""}`,

      slug:
        `${profile.businessType?.toLowerCase() ?? "business"}-${Date.now()}`,

    });





  await websiteRepository.replaceSections(

    website.id,

    [

      {

        id: crypto.randomUUID(),

        type: "HERO",

        title:
          `Bienvenue chez ${profile.businessType ?? "notre entreprise"}`,

        content:
          `Une expérience ${profile.style ?? "moderne"} à ${profile.location ?? ""}`,

        position: 1,

      },


      {

        id: crypto.randomUUID(),

        type: "MENU",

        title:
          "Nos produits",

        content:
          "Découvrez nos meilleures offres",

        position: 2,

      },


      {

        id: crypto.randomUUID(),

        type: "CONTACT",

        title:
          "Nous contacter",

        content:
          "Retrouvez-nous facilement",

        position: 3,

      },

    ]

  );





  return website;

}