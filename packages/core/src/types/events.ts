/**
 * FASTOS Ramses Core Engine
 *
 * Fundamental technical event types.
 * No business logic.
 */

export interface EventEnvelope<TPayload = unknown> {
  event: string;

  version: string;

  event_id: string;

  timestamp: string;

  restaurant_id: string;

  metadata?: EventMetadata;

  payload: TPayload;
}

export interface EventMetadata {
  source?: string;

  trace_id?: string;

  correlation_id?: string;
}

export interface ValidationResult {
  valid: boolean;

  error?: EventError;
}

export interface EventError {
  code: string;

  message: string;
}

export type EventHandler<TPayload = unknown> = (event: EventEnvelope<TPayload>) => Promise<void>;

export interface EventDefinition {
  name: string;

  version: string;

  authorizedProducers: string[];
}
