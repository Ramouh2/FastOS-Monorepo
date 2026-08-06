import type { EventEnvelope } from "../types/events.js";
import type { EventHandler } from "../types/handlers.js";

export interface PublishResult {
  dispatched: number;
  succeeded: number;
  failed: number;
}

export interface EventBus {
  subscribe(
    eventName: string,
    handler: EventHandler
  ): void;

  publish(
    event: EventEnvelope
  ): Promise<PublishResult>;
}