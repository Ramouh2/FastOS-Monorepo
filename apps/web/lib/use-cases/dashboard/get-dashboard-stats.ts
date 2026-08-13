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
    todayOrders,
    recentOrders,
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

    orderRepository.todayCount(
      businessId
    ),

    orderRepository.findAll(
      businessId
    ),

  ]);


  const averageOrderValue =
    orders > 0
      ? revenue / orders
      : 0;



  return {

    products,

    orders,

    revenue,

    todayOrders,

    averageOrderValue,

    recentOrders: recentOrders.slice(0, 5),

  };

}