import { EntityManager } from '@mikro-orm/postgresql';
export declare class MikroOrmUnitOfWork {
    private readonly entityManager;
    constructor(entityManager: EntityManager);
    runInTransaction<T>(fn: () => Promise<T>): Promise<T>;
}
