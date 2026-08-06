import { EventDefinition } from '../types/events.js';
import type { EventCatalog } from "./event-catalog.js";

export class EventRegistry implements EventCatalog {
  private readonly events = new Map<string, EventDefinition>();

  register(definition: EventDefinition): void {
    this.events.set(definition.name, definition);
  }

  exists(eventName: string): boolean {
    return this.events.has(eventName);
  }

  get(eventName: string): EventDefinition | undefined {
    return this.events.get(eventName);
  }

  list(): EventDefinition[] {
    return [...this.events.values()];
  }
}
