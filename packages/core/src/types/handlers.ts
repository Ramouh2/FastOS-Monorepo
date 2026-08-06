import type { EventEnvelope } from "./events.js";

/**
 * Handler exécuté lorsqu'un événement est publié.
 */
export type EventHandler = (
  event: EventEnvelope
) => Promise<void>;