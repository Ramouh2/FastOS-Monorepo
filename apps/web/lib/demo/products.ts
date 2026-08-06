import {
  MemoryProductRepository,
  ProductService,
  CreateProduct,
} from "@fastos/core";

const repository = new MemoryProductRepository();

const createProduct = new CreateProduct(
  new ProductService(repository),
);

export async function getDemoProducts() {
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

  return [
    await repository.findById("1"),
    await repository.findById("2"),
  ].filter(Boolean);
}