import { PrismaOrderRepository } from "@/lib/repositories/prisma-order-repository";


const orderRepository =
  new PrismaOrderRepository();



export async function getOrders(
  businessId: string
) {

  return orderRepository.findAll(
    businessId
  );

}