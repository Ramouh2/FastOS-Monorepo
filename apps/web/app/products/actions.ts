"use server";

import { createProduct } from "../../lib/products/create-product";

export async function createProductAction(input: {
  id: string;
  businessId: string;
  name: string;
  type: "FOOD" | "DRINK" | "DESSERT";
  price: number;
}) {
  await createProduct(input);
}