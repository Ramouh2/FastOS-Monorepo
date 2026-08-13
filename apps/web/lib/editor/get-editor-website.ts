import { PrismaWebsiteRepository } from "@/lib/repositories/prisma-website-repository";


const websiteRepository =
  new PrismaWebsiteRepository();



export async function getEditorWebsite(
  websiteId: string
) {


  const website =
    await websiteRepository.findByIdForEditor(
      websiteId
    );



  if (!website) {

    throw new Error(
      "Website not found"
    );

  }



  return website;

}