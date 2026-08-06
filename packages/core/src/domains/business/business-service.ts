import { BusinessAlreadyExistsError } from "./business-errors.js";
import { Business, type BusinessProps } from "./business.js";
import type { BusinessRepository } from "./business-repository.js";

export type CreateBusinessRequest = Omit<
  BusinessProps,
  "status" | "createdAt" | "updatedAt"
>;

export class BusinessService {
  constructor(
    private readonly repository: BusinessRepository,
  ) {}

  async create(request: CreateBusinessRequest): Promise<Business> {
    const alreadyExists = await this.repository.exists(request.id);

    if (alreadyExists) {
      throw new BusinessAlreadyExistsError(request.id);
    }

    const business = new Business({
      ...request,
      status: "ACTIVE",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await this.repository.save(business);

    return business;
  }
}