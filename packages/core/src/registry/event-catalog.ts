import type { EventDefinition } from "../types/events.js";

export interface EventCatalog {
  exists(eventName: string): boolean;

  get(eventName: string): EventDefinition | undefined;

  list(): EventDefinition[];
}