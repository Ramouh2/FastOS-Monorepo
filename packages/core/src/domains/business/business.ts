export type BusinessStatus =
  | "ACTIVE"
  | "ARCHIVED";

export type BusinessType =
  | "FAST_FOOD"
  | "PIZZERIA"
  | "KEBAB"
  | "SUSHI"
  | "BAKERY"
  | "COFFEE_SHOP"
  | "OTHER";

export interface BusinessProps {
  id: string;
  name: string;
  type: BusinessType;
  currency: string;
  timezone: string;
  address: string;
  status: BusinessStatus;
  createdAt: Date;
  updatedAt: Date;
}

export class Business {
  constructor(
    private readonly props: BusinessProps
  ) {}

  get id() {
    return this.props.id;
  }

  get name() {
    return this.props.name;
  }

  get status() {
    return this.props.status;
  }

  get type() {
    return this.props.type;
  }

  get currency() {
    return this.props.currency;
  }

  get timezone() {
    return this.props.timezone;
  }

  get address() {
    return this.props.address;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }
}