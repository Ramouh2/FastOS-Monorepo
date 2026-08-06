import type { EventBus, PublishResult } from "./event-bus.js";
import type { EventEnvelope } from "../types/events.js";
import type { EventHandler } from "../types/handlers.js";

export class MemoryEventBus implements EventBus {
  private readonly subscribers = new Map<string, EventHandler[]>();

  subscribe(eventName: string, handler: EventHandler): void {
    const handlers = this.subscribers.get(eventName) ?? [];

    handlers.push(handler);

    this.subscribers.set(eventName, handlers);
  }

  async publish(event: EventEnvelope): Promise<PublishResult> {
    const handlers = this.subscribers.get(event.event) ?? [];

    let succeeded = 0;
    let failed = 0;

    for (const handler of handlers) {
      try {
        await handler(event);
        succeeded++;
      } catch {
        failed++;
      }
    }

    return {
      dispatched: handlers.length,
      succeeded,
      failed,
    };
  }
}