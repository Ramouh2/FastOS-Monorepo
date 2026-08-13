"use server";


import {
  createProductService,
  deleteProductService,
} from "../../lib/services/product-service";



export async function createProductAction(input: {

  businessId: string;

  categoryId?: string;

  name: string;

  type: "FOOD" | "DRINK" | "DESSERT";

  price: number;

}) {


  await createProductService(input);

}





export async function deleteProductAction(
  id: string
) {

  await deleteProductService(id);

}