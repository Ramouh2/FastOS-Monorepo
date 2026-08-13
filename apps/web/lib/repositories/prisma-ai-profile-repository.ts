import { prisma } from "../prisma/client";
import { BusinessContext } from "@/lib/ai/context/business-context";


export class PrismaAIProfileRepository {


  async findByBusinessId(
    businessId: string
  ) {

    return prisma.businessAIProfile.findUnique({

      where: {

        businessId,

      },

    });

  }





  async upsert(

    businessId: string,

    context: BusinessContext

  ) {

    return prisma.businessAIProfile.upsert({

      where: {

        businessId,

      },


      update: {

        businessType:
          context.businessType,

        location:
          context.location,

        audience:
          context.audience,

        style:
          context.style,

      },


      create: {

        businessId,

        businessType:
          context.businessType,

        location:
          context.location,

        audience:
          context.audience,

        style:
          context.style,

      },

    });

  }

}