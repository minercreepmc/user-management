import { UnitOfWorkPort } from '@domain-interfaces';
import { EntityManager } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { OutboxService } from '../outbox';

@Injectable()
export class MikroOrmUnitOfWork implements UnitOfWorkPort {
  constructor(
    private readonly entityManager: EntityManager,
    private readonly outBoxService: OutboxService,
  ) {}
  startTransaction(): Promise<void> {
    return this.entityManager.begin();
  }
  commitTransaction(): Promise<void> {
    return this.entityManager.commit();
  }
  rollbackTransaction(): Promise<void> {
    return this.entityManager.rollback();
  }

  runInTransaction<T>(
    fn: (outBoxService: OutboxService) => Promise<T>,
  ): Promise<T> {
    return this.entityManager.transactional<T>(() => {
      return fn(this.outBoxService);
    });
  }
}
