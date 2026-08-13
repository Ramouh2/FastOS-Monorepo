import { prisma } from "../prisma/client";


export class PrismaProductRepository {


  async count(businessId: string) {

    return prisma.product.count({
      where: {
        businessId,
      },
    });

  }



  async countByBusinessId(businessId: string) {

    return prisma.product.count({
      where: {
        businessId,
      },
    });

  }



  async findAll(businessId: string) {

    return prisma.product.findMany({

      where: {
        businessId,
      },

      include: {
        category: true,
      },

      orderBy: {
        createdAt: "desc",
      },

    });

  }



  async create(data: {

    businessId: string;

    categoryId?: string;

    name: string;

    description?: string;

    type: string;

    price: number;

    status: string;

  }) {


    return prisma.product.create({

      data,

      include: {
        category: true,
      },

    });

  }




  async delete(id: string) {

    return prisma.product.delete({

      where: {
        id,
      },

    });

  }


}