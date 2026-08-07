import {
  createProductUseCase,
} from "./product-context";

export async function createProduct(input: {
  id: string;
  businessId: string;
  name: string;
  type: "FOOD" | "DRINK" | "DESSERT";
  price: number;
}) {
  return createProductUseCase.execute(input);
}