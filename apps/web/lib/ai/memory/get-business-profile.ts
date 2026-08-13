import { PrismaAIProfileRepository } from "@/lib/repositories/prisma-ai-profile-repository";


const profileRepository =
  new PrismaAIProfileRepository();



export async function getBusinessProfile(
  businessId: string
) {

  return profileRepository.findByBusinessId(
    businessId
  );

}