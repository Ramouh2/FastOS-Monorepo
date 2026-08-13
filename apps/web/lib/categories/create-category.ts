import { PrismaCategoryRepository } from "../repositories/prisma-category-repository";


const repository =
  new PrismaCategoryRepository();



export async function createCategory(input: {

  businessId: string;

  name: string;

}) {


  const name = input.name.trim();


  if (!name) {

    throw new Error(
      "Le nom de catégorie est obligatoire."
    );

  }



  return repository.create({

    businessId: input.businessId,

    name,

  });

}