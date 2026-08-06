export interface BusinessCreated {
  readonly type: "BusinessCreated";
  readonly businessId: string;
  readonly occurredAt: Date;
}