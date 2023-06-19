import { RepositoryPort } from '@domain-interfaces';
import { EntityManager } from '@mikro-orm/postgresql';
import { Logger } from '@nestjs/common';
import { AbstractAggregateRoot, ID } from 'common-base-classes';
import { MikroOrmModelConstructor, QueryParams } from './common-type';
import { MikroOrmMapperBase } from './mikroorm-mapper.base';
import { MikroOrmModelBase } from './mikroorm-model.base';
import { MikroOrmQueryMapperBase } from './mikroorm-query-mapper.base';
export declare abstract class MikroOrmRepositoryBase<DomainModel extends AbstractAggregateRoot<any>, DomainModelDetails, OrmModel extends MikroOrmModelBase> implements RepositoryPort<DomainModel, DomainModelDetails> {
    protected readonly entityManager: EntityManager;
    protected readonly mapper: MikroOrmMapperBase<DomainModel, DomainModelDetails, OrmModel>;
    protected readonly queryMapper: MikroOrmQueryMapperBase<DomainModelDetails, OrmModel>;
    protected readonly mikroEntityName: MikroOrmModelConstructor<OrmModel>;
    protected readonly logger: Logger;
    constructor(entityManager: EntityManager, mapper: MikroOrmMapperBase<DomainModel, DomainModelDetails, OrmModel>, queryMapper: MikroOrmQueryMapperBase<DomainModelDetails, OrmModel>, mikroEntityName: MikroOrmModelConstructor<OrmModel>, logger: Logger);
    save(entity: DomainModel): Promise<DomainModel>;
    delete(params?: QueryParams<DomainModelDetails>): Promise<boolean>;
    findOneById(id: ID): Promise<DomainModel>;
    findOne(params: QueryParams<DomainModelDetails>): Promise<DomainModel>;
    update(params: QueryParams<DomainModelDetails>, newState: DomainModel): Promise<DomainModel>;
}
