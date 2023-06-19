import { EntityManager } from '@mikro-orm/core';
import { DomainEvent } from 'common-base-classes';
export declare class OutboxService {
    private entityManager;
    constructor(entityManager: EntityManager);
    addToOutboxAndSend(domainEvent: DomainEvent<any>): Promise<void>;
}
