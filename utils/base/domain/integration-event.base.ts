export class IntegrationEventBase<EventDetails> {
  readonly eventId: string;
  readonly dateOccurred: Date;
  readonly details: EventDetails;
  readonly entityId: string;
  readonly eventName: string;
  readonly fromBoundedContext: string;

  constructor(options: IntegrationEventBase<EventDetails>) {
    Object.assign(this, options);
  }
}
