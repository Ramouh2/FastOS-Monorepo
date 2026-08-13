import { BusinessContext } from "../context/business-context";

import { PrismaAIProfileRepository } from "@/lib/repositories/prisma-ai-profile-repository";


const profileRepository =
  new PrismaAIProfileRepository();



export async function saveBusinessProfile(

  businessId: string,

  context: BusinessContext

) {


  return profileRepository.upsert(

    businessId,

    context

  );

}