import { DomainEvent } from 'common-base-classes';
import { Observable } from 'rxjs';
import { Message } from './message.interface';
export declare const clientProxyDiToken: unique symbol;
export declare const messageBrokerDiToken: unique symbol;
export interface MessageBrokerPort {
    emit(domainEvent: DomainEvent<any>): Observable<any>;
    addToOutboxAndSend(domainEvent: DomainEvent<any>): Promise<any>;
}
export declare const userMessageBrokerDiToken: unique symbol;
export interface UserMessageBrokerPort {
    emit(domainEvent: DomainEvent<any>): Observable<any>;
    send(message: Message): Promise<any>;
    addToOutboxAndSend(domainEvent: DomainEvent<any>): Promise<any>;
}
