import { prisma } from "../prisma/client";

export async function getBusinessByUserId(userId: string) {
  return prisma.business.findFirst({
    where: {
      userId,
    },
  });
}