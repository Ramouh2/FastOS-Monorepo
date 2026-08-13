import { PrismaCategoryRepository } from "../repositories/prisma-category-repository";


const repository =
  new PrismaCategoryRepository();



export async function listCategories(
  businessId: string
) {

  return repository.findAll(
    businessId
  );

}