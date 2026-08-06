import type { ProductRepository } from "../domains/product/product-repository.js";
import type { ProductType } from "../domains/product/product.js";

export class UpdateProduct {
  constructor(
    private readonly repository: ProductRepository,
  ) {}

  async execute(input: {
    id: string;
    name: string;
    type: ProductType;
    price: number;
  }) {
    const product = await this.repository.findById(input.id);

    if (!product) {
      throw new Error(`Product ${input.id} not found`);
    }

    product.update({
      name: input.name,
      type: input.type,
      price: input.price,
    });

    await this.repository.save(product);

    return product;
  }
}