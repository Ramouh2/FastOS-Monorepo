import { PrismaProductRepository } from "../repositories/prisma-product-repository";

const repository = new PrismaProductRepository();


export async function listProducts(
  businessId: string
) {

  return repository.findAll(
    businessId
  );

}