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



  async findAll() {

    return prisma.product.findMany({

      orderBy: {
        createdAt: "desc",
      },

    });

  }



  async create(data: {

    businessId: string;
    name: string;
    type: string;
    price: number;
    status: string;

  }) {

    return prisma.product.create({

      data,

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