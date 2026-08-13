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





  async revenueLast7Days(businessId: string) {

    const days = [];


    for (let i = 6; i >= 0; i--) {


      const start = new Date();


      start.setDate(
        start.getDate() - i
      );


      start.setHours(
        0,
        0,
        0,
        0
      );



      const end = new Date(start);


      end.setHours(
        23,
        59,
        59,
        999
      );



      const result =
        await prisma.order.aggregate({

          where: {

            businessId,

            createdAt: {
              gte: start,
              lte: end,
            },

          },


          _sum: {
            total: true,
          },

        });



      days.push({

        date: start.toISOString(),

        revenue:
          result._sum.total ?? 0,

      });


    }


    return days;

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