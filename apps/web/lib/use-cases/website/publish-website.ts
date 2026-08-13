import { PrismaWebsiteRepository } from "@/lib/repositories/prisma-website-repository";


const websiteRepository =
  new PrismaWebsiteRepository();



export async function publishWebsite(
  websiteId: string
) {


  return websiteRepository.publish(
    websiteId
  );


}