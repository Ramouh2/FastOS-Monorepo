import { prisma } from "../prisma/client";

export class PrismaProductRepository {
  async count() {
    return prisma.product.count();
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