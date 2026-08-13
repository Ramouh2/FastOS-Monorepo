import { Prisma } from "@prisma/client";

import { PrismaWebsiteRepository } from "@/lib/repositories/prisma-website-repository";


const websiteRepository =
  new PrismaWebsiteRepository();



export async function saveEditorWebsite({

  websiteId,

  config,

}: {

  websiteId: string;

  config: Prisma.InputJsonValue;

}) {


  return websiteRepository.updateConfig(

    websiteId,

    config

  );

}