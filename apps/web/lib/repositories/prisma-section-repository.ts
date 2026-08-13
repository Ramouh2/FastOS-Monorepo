import { prisma } from "../prisma/client";


export class PrismaSectionRepository {


  async findById(
    id: string
  ) {

    return prisma.websiteSection.findUnique({

      where: {
        id,
      },

    });

  }





  async update(

    id: string,

    data: {

      title: string;

      content: string;

    }

  ) {

    return prisma.websiteSection.update({

      where: {
        id,
      },

      data,

    });

  }


}