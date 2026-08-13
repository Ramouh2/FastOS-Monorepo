import { Prisma } from "@prisma/client";
import { prisma } from "../prisma/client";


export class PrismaThemeRepository {


  async findAll() {

    return prisma.websiteTemplate.findMany({

      orderBy: {
        createdAt: "desc",
      },

    });

  }





  async findById(
    id: string
  ) {

    return prisma.websiteTemplate.findUnique({

      where: {
        id,
      },

    });

  }





  async installOnWebsite(

    websiteId: string,

    themeId: string,

    config: Prisma.InputJsonValue

  ) {

    return prisma.website.update({

      where: {

        id: websiteId,

      },

      data: {

        templateId: themeId,

        config,

      },

    });

  }


}