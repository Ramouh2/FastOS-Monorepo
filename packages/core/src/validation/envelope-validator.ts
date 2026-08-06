import type { EventEnvelope, ValidationResult } from '../types/events.js';

export class EnvelopeValidator {
  validate(event: EventEnvelope): ValidationResult {
    if (!event.event) {
      return {
        valid: false,
        error: {
          code: 'E_ENVELOPE_INVALID',
          message: 'Missing event name',
        },
      };
    }

    if (!event.version) {
      return {
        valid: false,
        error: {
          code: 'E_ENVELOPE_INVALID',
          message: 'Missing version',
        },
      };
    }

    if (!event.event_id) {
      return {
        valid: false,
        error: {
          code: 'E_ENVELOPE_INVALID',
          message: 'Missing event_id',
        },
      };
    }

    if (!event.timestamp) {
      return {
        valid: false,
        error: {
          code: 'E_ENVELOPE_INVALID',
          message: 'Missing timestamp',
        },
      };
    }

    if (!event.restaurant_id) {
      return {
        valid: false,
        error: {
          code: 'E_ENVELOPE_INVALID',
          message: 'Missing restaurant_id',
        },
      };
    }

    if (event.payload === undefined) {
      return {
        valid: false,
        error: {
          code: 'E_ENVELOPE_INVALID',
          message: 'Missing payload',
        },
      };
    }

    return {
      valid: true,
    };
  }
}