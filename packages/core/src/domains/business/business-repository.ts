import type { Business } from "./business.js";

export interface BusinessRepository {
  save(business: Business): Promise<void>;

  findById(id: string): Promise<Business | null>;

  exists(id: string): Promise<boolean>;
}