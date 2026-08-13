import { PrismaProductRepository } from "../repositories/prisma-product-repository";


const repository =
  new PrismaProductRepository();



export async function createProduct(input: {

  businessId: string;

  categoryId?: string;

  name: string;

  type: "FOOD" | "DRINK" | "DESSERT";

  price: number;

}) {


  return repository.create({

    ...input,

    status: "ACTIVE",

  });

}