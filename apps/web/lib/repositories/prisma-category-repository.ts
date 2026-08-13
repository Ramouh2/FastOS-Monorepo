import { prisma } from "../prisma/client";


export class PrismaCategoryRepository {


  async findAll(businessId: string) {

    return prisma.category.findMany({

      where: {
        businessId,
      },

      orderBy: {
        position: "asc",
      },

    });

  }



  async create(data: {

    businessId: string;

    name: string;

  }) {


    return prisma.category.create({

      data: {

        ...data,

        position: 0,

      },

    });

  }



  async delete(id: string) {

    return prisma.category.delete({

      where: {
        id,
      },

    });

  }


}