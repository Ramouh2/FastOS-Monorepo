import type { Business } from "./business.js";
import type { BusinessRepository } from "./business-repository.js";

export class MemoryBusinessRepository implements BusinessRepository {
  private readonly businesses = new Map<string, Business>();

  async save(business: Business): Promise<void> {
    this.businesses.set(business.id, business);
  }

  async findById(id: string): Promise<Business | null> {
    return this.businesses.get(id) ?? null;
  }

  async exists(id: string): Promise<boolean> {
    return this.businesses.has(id);
  }
}