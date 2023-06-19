// import { MemberRegisteredDomainEvent } from '@domain-events/user';
// import { clientProxyDiToken, MessageBrokerPort } from '@domain-interfaces';
// import { EntityManager } from '@mikro-orm/postgresql';
// import { Inject, Injectable } from '@nestjs/common';
// import { ClientProxy } from '@nestjs/microservices';
// import { OutboxModel } from '@utils/base/database/outbox';
// import { MessageBrokerMapper } from './message-broker.mapper';
//
// type DomainEvent = MemberRegisteredDomainEvent;
//
// @Injectable()
// export class MessageBroker implements MessageBrokerPort {
//   private readonly mapper: MessageBrokerMapper;
//   constructor(
//     @Inject(clientProxyDiToken)
//     private readonly clientProxy: ClientProxy,
//     private readonly entityManager: EntityManager,
//   ) {
//     this.mapper = new MessageBrokerMapper();
//   }
//   emit(domainEvent: DomainEvent) {
//     const { data, pattern } = this.mapper.toEmit(domainEvent);
//
//     return this.clientProxy.emit(pattern, data);
//   }
//
//   async addToOutboxAndSend(domainEvent: DomainEvent): Promise<any> {
//     const { data, pattern } = this.mapper.toEmit(domainEvent);
//
//     const outboxEntry = this.entityManager.create(OutboxModel, {
//       eventName: domainEvent.eventName,
//       payload: JSON.stringify(data),
//     });
//
//     await this.entityManager.persistAndFlush(outboxEntry);
//
//     try {
//       this.clientProxy.emit(pattern, data);
//
//       await this.entityManager.removeAndFlush(outboxEntry);
//     } catch (error) {
//       console.error(error);
//       await this.entityManager.removeAndFlush(outboxEntry);
//       throw error;
//     }
//   }
// }
