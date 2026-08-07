import {
  deleteProductUseCase,
} from "./product-context";

export async function deleteProduct(id: string) {
  return deleteProductUseCase.execute(id);
}