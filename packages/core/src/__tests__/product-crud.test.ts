import { describe, it, expect } from "vitest";

import {
  MemoryProductRepository,
  ProductService,
  CreateProduct,
  ListProducts,
  UpdateProduct,
  DeleteProduct,
} from "../index.js";

describe("Product CRUD", () => {
  it("should create, list, update and delete a product", async () => {
    const repository = new MemoryProductRepository();

    const productService = new ProductService(repository);

    const createProduct = new CreateProduct(
      productService,
    );

    const listProducts = new ListProducts(
      repository,
    );

    const updateProduct = new UpdateProduct(
      repository,
    );

    const deleteProduct = new DeleteProduct(
      repository,
    );

    await createProduct.execute({
      id: "product-1",
      businessId: "business-1",
      name: "Burger",
      type: "FOOD",
      price: 10,
    });

    const productsAfterCreate =
      await listProducts.execute();

    expect(productsAfterCreate).toHaveLength(1);

    const product =
      productsAfterCreate[0];

    expect(product.name).toBe("Burger");

    await updateProduct.execute({
      id: "product-1",
      name: "Cheeseburger",
      type: "FOOD",
      price: 12,
    });

    const updated =
      await repository.findById("product-1");

    expect(updated?.name).toBe("Cheeseburger");
    expect(updated?.price).toBe(12);

    await deleteProduct.execute("product-1");

    const deleted =
      await repository.findById("product-1");

    expect(deleted).toBeNull();
  });
});