import type { EventEnvelope, ValidationResult } from "../types/events.js";

export class PayloadValidator {
  validate(event: EventEnvelope): ValidationResult {
    if (event.payload === undefined || event.payload === null) {
      return {
        valid: false,
        error: {
          code: "E_INVALID_PAYLOAD",
          message: "Missing payload",
        },
      };
    }

    if (typeof event.payload !== "object" || Array.isArray(event.payload)) {
      return {
        valid: false,
        error: {
          code: "E_INVALID_PAYLOAD",
          message: "Payload must be an object",
        },
      };
    }

    return {
      valid: true,
    };
  }
}