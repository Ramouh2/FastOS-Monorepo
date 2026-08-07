import { prisma } from "../prisma/client";

export async function updateProduct(input: {
  id: string;
  name: string;
  type: string;
  price: number;
}) {
  return prisma.product.update({
    where: {
      id: input.id,
    },
    data: {
      name: input.name,
      type: input.type,
      price: input.price,
    },
  });
}