import { PrismaWebsiteRepository } from "@/lib/repositories/prisma-website-repository";

import {
  generateWebsiteFromBusiness
} from "@/lib/generators/generate-from-business";


const websiteRepository =
  new PrismaWebsiteRepository();




export async function createGeneratedWebsite(
  businessId: string
) {


  const existingWebsite =
    await websiteRepository.findWithSectionsByBusinessId(
      businessId
    );



  if (existingWebsite) {

    return existingWebsite;

  }





  const generated =
    await generateWebsiteFromBusiness(
      businessId
    );





  const website =
    await websiteRepository.createGeneratedWebsite({

      businessId,

      title:
        "FastOS Generated Website",

      slug:
        `website-${businessId}`,

      primaryColor:
        generated.theme.primaryColor,

      secondaryColor:
        generated.theme.secondaryColor,

      accentColor:
        generated.theme.accentColor,


      sections:

        generated.sections.map(
          section => ({

            type:
              section.type,

            title:
              section.title,

            content:
              section.content,

            position:
              section.position,

          })

        ),

    });





  return website;

}