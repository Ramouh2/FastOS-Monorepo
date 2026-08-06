import type { EventCatalog } from "../registry/event-catalog.js";
import type { EventEnvelope, ValidationResult } from "../types/events.js";

export class SourceValidator {
  constructor(private readonly catalog: EventCatalog) {}

  validate(event: EventEnvelope): ValidationResult {
    const definition = this.catalog.get(event.event);

    if (!definition) {
      return {
        valid: false,
        error: {
          code: "E_UNKNOWN_EVENT_TYPE",
          message: `Unknown event: ${event.event}`,
        },
      };
    }

    const source = event.metadata?.source;

    if (!source) {
      return {
        valid: false,
        error: {
          code: "E_SOURCE_NOT_AUTHORIZED",
          message: "Missing source",
        },
      };
    }

    if (!definition.authorizedProducers.includes(source)) {
      return {
        valid: false,
        error: {
          code: "E_SOURCE_NOT_AUTHORIZED",
          message: `Unauthorized producer: ${source}`,
        },
      };
    }

    return { valid: true };
  }
}