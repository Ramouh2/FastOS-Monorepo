import { ProductCreated } from "./product-created.js";
import { ProductRepository } from "./product-repository.js";
import { Product, ProductType } from "./product.js";

export class ProductService {
  constructor(
    private readonly repository: ProductRepository,
  ) {}

  async create(input: {
    id: string;
    businessId: string;
    name: string;
    type: ProductType;
    price: number;
  }) {
    const product = Product.create(input);

    await this.repository.save(product);

    return new ProductCreated(product);
  }
}