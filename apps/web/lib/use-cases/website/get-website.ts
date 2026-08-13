import { PrismaWebsiteRepository } from "@/lib/repositories/prisma-website-repository";


const websiteRepository =
  new PrismaWebsiteRepository();



export async function getWebsite(
  businessId: string
) {

  return websiteRepository.findByBusinessId(
    businessId
  );

}