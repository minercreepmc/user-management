import { DomainEvent } from 'common-base-classes';

export interface OutboxServicePort {
  addToOutboxAndSend(domainEvent: DomainEvent<any>): Promise<void>;
}
