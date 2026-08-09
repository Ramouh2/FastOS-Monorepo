import { prisma } from "../prisma/client";


export async function getWebsiteByBusinessId(
  businessId: string
) {
  return prisma.website.findUnique({
    where: {
      businessId,
    },
    include: {
      sections: {
        orderBy: {
          position: "asc",
        },
      },
    },
  });
}