import { PrismaCategoryRepository } from "../repositories/prisma-category-repository";


const repository =
  new PrismaCategoryRepository();



export async function deleteCategory(
  id: string
) {

  return repository.delete(
    id
  );

}