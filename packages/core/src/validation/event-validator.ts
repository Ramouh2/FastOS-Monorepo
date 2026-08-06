import type { EventEnvelope, ValidationResult } from "../types/events.js";
import { EventRegistry } from "../registry/event-registry.js";

export class EventValidator {
  constructor(
    private readonly registry: EventRegistry
  ) {}

  validate(event: EventEnvelope): ValidationResult {
    if (!this.registry.exists(event.event)) {
      return {
        valid: false,
        error: {
          code: "E_UNKNOWN_EVENT_TYPE",
          message: `Unknown event: ${event.event}`,
        },
      };
    }

    return {
      valid: true,
    };
  }
}