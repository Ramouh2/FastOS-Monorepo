import type { EventEnvelope, ValidationResult } from "../types/events.js";

import { EnvelopeValidator } from "../validation/envelope-validator.js";
import { EventValidator } from "../validation/event-validator.js";
import { SourceValidator } from "../validation/source-validator.js";
import { PayloadValidator } from "../validation/payload-validator.js";

import { EventRouter } from "../routing/event-router.js";

export class RamsesEngine {
  constructor(
    private readonly envelopeValidator: EnvelopeValidator,
    private readonly eventValidator: EventValidator,
    private readonly sourceValidator: SourceValidator,
    private readonly payloadValidator: PayloadValidator,
    private readonly router: EventRouter
  ) {}

  async process(event: EventEnvelope): Promise<ValidationResult> {
    const validators = [
      this.envelopeValidator,
      this.eventValidator,
      this.sourceValidator,
      this.payloadValidator,
    ];

    for (const validator of validators) {
      const result = validator.validate(event);

      if (!result.valid) {
        return result;
      }
    }

    await this.router.route(event);

    return {
      valid: true,
    };
  }
}