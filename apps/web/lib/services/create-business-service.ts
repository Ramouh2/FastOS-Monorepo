import { prisma } from "../prisma/client";

export async function createBusinessService(input: {
  userId: string;
  name: string;
}) {
  return prisma.business.create({
    data: {
      userId: input.userId,
      name: input.name,
      status: "ACTIVE",
    },
  });
}