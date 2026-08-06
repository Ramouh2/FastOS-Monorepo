export type ProductType =
  | "FOOD"
  | "DRINK"
  | "DESSERT";

export type ProductStatus =
  | "ACTIVE"
  | "INACTIVE";

export type ProductProps = {
  id: string;
  businessId: string;
  name: string;
  type: ProductType;
  price: number;
  status: ProductStatus;
  createdAt: Date;
  updatedAt: Date;
};

export class Product {
  private constructor(
    private readonly props: ProductProps,
  ) {}

  static create(
    input: {
      id: string;
      businessId: string;
      name: string;
      type: ProductType;
      price: number;
    },
  ) {
    const now = new Date();

    return new Product({
      ...input,
      status: "ACTIVE",
      createdAt: now,
      updatedAt: now,
    });
  }

  get id() {
    return this.props.id;
  }

  get businessId() {
    return this.props.businessId;
  }

  get name() {
    return this.props.name;
  }

  get type() {
    return this.props.type;
  }

  get price() {
    return this.props.price;
  }

  get status() {
    return this.props.status;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }
}