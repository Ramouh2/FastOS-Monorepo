import { ProductService } from "../domains/product/product-service.js";
import { ProductType } from "../domains/product/product.js";

export class CreateProduct {
  constructor(
    private readonly service: ProductService,
  ) {}

  async execute(input: {
    id: string;
    businessId: string;
    name: string;
    type: ProductType;
    price: number;
  }) {
    return this.service.create(input);
  }
}