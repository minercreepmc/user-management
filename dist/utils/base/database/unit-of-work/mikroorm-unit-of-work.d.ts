import { UnitOfWorkPort } from '@domain-interfaces';
import { EntityManager } from '@mikro-orm/postgresql';
import { OutboxService } from '../outbox';
export declare class MikroOrmUnitOfWork implements UnitOfWorkPort {
    private readonly entityManager;
    private readonly outBoxService;
    constructor(entityManager: EntityManager, outBoxService: OutboxService);
    startTransaction(): Promise<void>;
    commitTransaction(): Promise<void>;
    rollbackTransaction(): Promise<void>;
    runInTransaction<T>(fn: (outBoxService: OutboxService) => Promise<T>): Promise<T>;
}
