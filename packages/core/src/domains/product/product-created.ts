import type { Product } from "./product.js";

export class ProductCreated {
  constructor(
    public readonly product: Product,
    public readonly occurredAt: Date = new Date(),
  ) {}
}