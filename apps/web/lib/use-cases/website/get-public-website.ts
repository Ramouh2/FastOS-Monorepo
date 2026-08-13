import { PrismaWebsiteRepository } from "@/lib/repositories/prisma-website-repository";


const websiteRepository =
  new PrismaWebsiteRepository();



export async function getPublicWebsite(
  slug: string
) {

  return websiteRepository.findBySlug(
    slug
  );

}