import { DomainEvent } from 'common-base-classes';
import { Observable } from 'rxjs';
import { Message } from './message.interface';

export const clientProxyDiToken = Symbol('CLIENT_PROXY');
export const messageBrokerDiToken = Symbol('MESSAGE_BROKER');

export interface MessageBrokerPort {
  emit(domainEvent: DomainEvent<any>): Observable<any>;
  addToOutboxAndSend(domainEvent: DomainEvent<any>): Promise<any>;
}

//
export const userMessageBrokerDiToken = Symbol('USER_MESSAGE_BROKER');

export interface UserMessageBrokerPort {
  emit(domainEvent: DomainEvent<any>): Observable<any>;
  send(message: Message): Promise<any>;
  addToOutboxAndSend(domainEvent: DomainEvent<any>): Promise<any>;
}
