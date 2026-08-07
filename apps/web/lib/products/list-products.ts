import {
  createProductUseCase,
  listProductsUseCase,
} from "./product-context";

let initialized = false;

export async function listProducts() {
  if (!initialized) {
    initialized = true;

    await createProductUseCase.execute({
      id: "1",
      businessId: "business-001",
      name: "Cheeseburger",
      type: "FOOD",
      price: 12.5,
    });

    await createProductUseCase.execute({
      id: "2",
      businessId: "business-001",
      name: "Coca-Cola",
      type: "DRINK",
      price: 2.5,
    });
  }

  return listProductsUseCase.execute();
}