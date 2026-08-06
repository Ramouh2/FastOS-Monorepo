import type { EventBus } from "../core/event-bus.js";
import type { EventEnvelope } from "../types/events.js";
import type { EventHandler } from "../types/handlers.js";

export class EventRouter {
  constructor(private readonly bus: EventBus) {}

  register(eventName: string, handler: EventHandler): void {
    this.bus.subscribe(eventName, handler);
  }

  async route(event: EventEnvelope) {
    return this.bus.publish(event);
  }
}