import { prisma } from "../prisma/client";


export class PrismaOrderRepository {


  async count(businessId: string) {

    return prisma.order.count({

      where: {
        businessId,
      },

    });

  }





  async revenue(businessId: string) {

    const result =
      await prisma.order.aggregate({

        where: {
          businessId,
        },

        _sum: {
          total: true,
        },

      });



    return result._sum.total ?? 0;

  }





  async todayCount(businessId: string) {


    const start =
      new Date();


    start.setHours(
      0,
      0,
      0,
      0
    );



    return prisma.order.count({

      where: {

        businessId,

        createdAt: {
          gte: start,
        },

      },

    });


  }







  async findAll(businessId: string) {

    return prisma.order.findMany({

      where: {
        businessId,
      },

      orderBy: {
        createdAt: "desc",
      },

    });

  }







  async updateStatus(
    id: string,
    status: string
  ) {


    return prisma.order.update({

      where: {
        id,
      },

      data: {
        status,
      },

    });


  }



}