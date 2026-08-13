import { prisma } from "../prisma/client";


export class PrismaAIConversationRepository {


  async findByBusinessId(
    businessId: string
  ) {

    return prisma.aIConversation.findUnique({

      where: {
        businessId,
      },

    });

  }





  async create(
    businessId: string
  ) {

    return prisma.aIConversation.create({

      data: {

        businessId,

      },

    });

  }





  async updateStage(

    businessId: string,

    stage: string

  ) {

    return prisma.aIConversation.update({

      where: {

        businessId,

      },

      data: {

        stage,

      },

    });

  }


}