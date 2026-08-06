import type { Product } from "./product.js";

export interface ProductRepository {
  save(product: Product): Promise<void>;

  findById(id: string): Promise<Product | null>;

  findAll(): Promise<Product[]>;

  exists(id: string): Promise<boolean>;

  delete(id: string): Promise<void>;
}