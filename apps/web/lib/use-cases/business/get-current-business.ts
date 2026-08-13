import { PrismaBusinessRepository } from "@/lib/repositories/prisma-business-repository";


const businessRepository =
  new PrismaBusinessRepository();



export async function getCurrentBusiness(
  userId: string
) {

  return businessRepository.findByUserId(
    userId
  );

}