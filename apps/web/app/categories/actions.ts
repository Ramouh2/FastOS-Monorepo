"use server";


import { createCategory } from "../../lib/categories/create-category";
import { deleteCategory } from "../../lib/categories/delete-category";



export async function createCategoryAction(input: {

  businessId: string;

  name: string;

}) {

  return createCategory(input);

}



export async function deleteCategoryAction(
  id: string
) {

  return deleteCategory(id);

}