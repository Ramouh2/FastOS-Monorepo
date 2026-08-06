import type { ProductRepository } from "../domains/product/product-repository.js";

export class DeleteProduct {
  constructor(
    private readonly repository: ProductRepository,
  ) {}

  async execute(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}