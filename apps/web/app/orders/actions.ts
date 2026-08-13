"use server";

import { revalidatePath } from "next/cache";

import { PrismaOrderRepository } from "@/lib/repositories/prisma-order-repository";


const orderRepository =
  new PrismaOrderRepository();



export async function updateOrderStatus(
  id: string,
  status: string
) {


  await orderRepository.updateStatus(
    id,
    status
  );



  revalidatePath("/orders");

  revalidatePath("/dashboard");


}