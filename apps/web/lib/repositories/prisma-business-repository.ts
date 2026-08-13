import { prisma } from "../prisma/client";


export class PrismaBusinessRepository {


  async findByUserId(
    userId: string
  ) {

    return prisma.business.findFirst({

      where: {
        userId,
      },

    });

  }





  async findByUserIdWithAIProfile(
    userId: string
  ) {

    return prisma.business.findFirst({

      where: {

        userId,

        aiProfile: {

          isNot: null,

        },

      },

      include: {

        aiProfile: true,

      },

    });

  }


}



// Compatibilité avec l'ancien code
export async function getBusinessByUserId(
  userId: string
) {

  const repository =
    new PrismaBusinessRepository();


  return repository.findByUserId(
    userId
  );

}