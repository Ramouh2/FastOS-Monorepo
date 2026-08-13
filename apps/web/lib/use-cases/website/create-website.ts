import { PrismaBusinessRepository } from "@/lib/repositories/prisma-business-repository";

import {
  createGeneratedWebsite,
} from "@/lib/services/create-generated-website";


const businessRepository =
  new PrismaBusinessRepository();



export async function createWebsite(
  userId: string
) {


  const business =
    await businessRepository.findByUserIdWithAIProfile(
      userId
    );



  if (!business) {

    throw new Error(
      "Business not found"
    );

  }



  return createGeneratedWebsite(
    business.id
  );

}