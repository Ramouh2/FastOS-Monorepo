import { Business } from "../domains/business/business.js";
import { BusinessCreated } from "../domains/business/business-created.js";
import {
  BusinessService,
  type CreateBusinessRequest,
} from "../domains/business/business-service.js";
import { ApplicationEventPublisher } from "./application-event-publisher.js";

export class CreateBusiness {
  constructor(
    private readonly service: BusinessService,
    private readonly publisher: ApplicationEventPublisher,
  ) {}

  async execute(request: CreateBusinessRequest): Promise<Business> {
    const business = await this.service.create(request);

    const event: BusinessCreated = {
      type: "BusinessCreated",
      businessId: business.id,
      occurredAt: new Date(),
    };

    await this.publisher.publish(event);

    return business;
  }
}