import { PrismaOrderRepository } from "@/lib/repositories/prisma-order-repository";


const orderRepository =
  new PrismaOrderRepository();



export async function updateOrderStatus(
  id: string,
  status: string
) {

  return orderRepository.updateStatus(
    id,
    status
  );

}