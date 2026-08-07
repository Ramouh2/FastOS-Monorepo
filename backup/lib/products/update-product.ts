import {
  updateProductUseCase,
} from "./product-context";

export async function updateProduct(input: {
  id: string;
  name: string;
  type: "FOOD" | "DRINK" | "DESSERT";
  price: number;
}) {
  return updateProductUseCase.execute(input);
}