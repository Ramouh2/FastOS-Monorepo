export interface ApplicationEventPublisher {
  publish<T>(event: T): Promise<void>;
}