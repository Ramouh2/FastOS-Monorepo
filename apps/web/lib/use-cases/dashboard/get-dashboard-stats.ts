import { PrismaOrderRepository } from "@/lib/repositories/prisma-order-repository";
import { PrismaProductRepository } from "@/lib/repositories/prisma-product-repository";


const orderRepository =
  new PrismaOrderRepository();


const productRepository =
  new PrismaProductRepository();



export async function getDashboardStats(
  businessId: string
) {


  const [
    products,
    orders,
    revenue,
  ] = await Promise.all([


    productRepository.count(
      businessId
    ),


    orderRepository.count(
      businessId
    ),


    orderRepository.revenue(
      businessId
    ),


  ]);



  return {

    products,

    orders,

    revenue,

  };


}