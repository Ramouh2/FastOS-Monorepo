import { prisma } from "../prisma/client";

export class PrismaUserRepository {
  async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async create(data: {
    name?: string;
    email: string;
    password: string;
  }) {
    return prisma.user.create({
      data,
    });
  }
}