"use server";

import { createProduct } from "../../lib/products/create-product";
import { deleteProduct } from "../../lib/products/delete-product";

export async function createProductAction(input: {
  id: string;
  businessId: string;
  name: string;
  type: "FOOD" | "DRINK" | "DESSERT";
  price: number;
}) {
  await createProduct(input);
}

export async function deleteProductAction(id: string) {
  await deleteProduct(id);
}