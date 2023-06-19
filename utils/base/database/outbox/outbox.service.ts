//import { messageBrokerDiToken, MessageBrokerPort } from '@domain-interfaces';
import { EntityManager } from '@mikro-orm/core';
//import { Inject } from '@nestjs/common';
import { DomainEvent } from 'common-base-classes';
import { OutboxModel } from './outbox.model';

export class OutboxService {
  constructor(
    private entityManager: EntityManager, //@Inject(messageBrokerDiToken) //private readonly messageBroker: MessageBrokerPort,
  ) {}

  async addToOutboxAndSend(domainEvent: DomainEvent<any>): Promise<void> {
    const outboxEntry = this.entityManager.create(OutboxModel, {
      eventName: domainEvent.eventName,
      payload: JSON.stringify(domainEvent),
    });

    await this.entityManager.persistAndFlush(outboxEntry);

    try {
      //this.messageBroker.emit(domainEvent);

      await this.entityManager.removeAndFlush(outboxEntry);
    } catch (error) {
      console.error(error);
      await this.entityManager.removeAndFlush(outboxEntry);
      throw error;
    }
  }
}
