import { PrismaProductRepository } from "../repositories/prisma-product-repository";

const repository = new PrismaProductRepository();

export async function createProductService(input: {
  businessId: string;
  name: string;
  type: "FOOD" | "DRINK" | "DESSERT";
  price: number;
}) {
  return repository.create({
    ...input,
    status: "ACTIVE",
  });
}

export async function deleteProductService(id: string) {
  return repository.delete(id);
}

export async function listProductsService() {
  return repository.findAll();
}