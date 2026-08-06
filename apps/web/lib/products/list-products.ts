import {
  MemoryProductRepository,
  ProductService,
  CreateProduct,
  ListProducts,
} from "@fastos/core";

const repository = new MemoryProductRepository();

const createProduct = new CreateProduct(
  new ProductService(repository),
);

const listProductsUseCase = new ListProducts(repository);

let initialized = false;

export async function listProducts() {
  if (!initialized) {
    initialized = true;

    await createProduct.execute({
      id: "1",
      businessId: "business-001",
      name: "Cheeseburger",
      type: "FOOD",
      price: 12.5,
    });

    await createProduct.execute({
      id: "2",
      businessId: "business-001",
      name: "Coca-Cola",
      type: "DRINK",
      price: 2.5,
    });
  }

  return listProductsUseCase.execute();
}