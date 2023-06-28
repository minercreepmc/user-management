import { DomainEvent } from 'common-base-classes';
import { Observable } from 'rxjs';
export declare const clientProxyDiToken: unique symbol;
export declare const messageBrokerDiToken: unique symbol;
export interface MessageBrokerPort {
    emit(domainEvent: DomainEvent<any>): Observable<any>;
    addToOutboxAndSend(domainEvent: DomainEvent<any>): Promise<any>;
}
export declare const userMessageBrokerDiToken: unique symbol;
