import {
  MemoryProductRepository,
  ProductService,
  CreateProduct,
  ListProducts,
  UpdateProduct,
  DeleteProduct,
} from "@fastos/core";

const globalForProducts = globalThis as unknown as {
  productRepository?: MemoryProductRepository;
};

export const productRepository =
  globalForProducts.productRepository ??
  new MemoryProductRepository();

if (process.env.NODE_ENV !== "production") {
  globalForProducts.productRepository =
    productRepository;
}

export const productService =
  new ProductService(productRepository);

export const createProductUseCase =
  new CreateProduct(productService);

export const listProductsUseCase =
  new ListProducts(productRepository);

export const updateProductUseCase =
  new UpdateProduct(productRepository);

export const deleteProductUseCase =
  new DeleteProduct(productRepository);