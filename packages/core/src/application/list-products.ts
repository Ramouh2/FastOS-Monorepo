import type { ProductRepository } from "../domains/product/product-repository.js";

export class ListProducts {
  constructor(
    private readonly repository: ProductRepository,
  ) {}

  async execute() {
    return this.repository.findAll();
  }
}