import { AbstractAggregateRoot, EntityConstructor } from 'common-base-classes';
import { MikroOrmModelConstructor, OrmModelDetails } from './common-type';
import { MikroOrmModelBase } from './mikroorm-model.base';
export declare abstract class MikroOrmMapperBase<DomainModel extends AbstractAggregateRoot<any>, DomainModelDetails, OrmModel extends MikroOrmModelBase> {
    private readonly entityConstructor;
    private readonly ormModelConstructor;
    constructor(entityConstructor: EntityConstructor<DomainModel>, ormModelConstructor: MikroOrmModelConstructor<OrmModel>);
    protected abstract toPersistanceDetails(entity: DomainModel): Promise<OrmModelDetails<OrmModel>>;
    protected abstract toDomainDetails(ormModel: OrmModel): Promise<DomainModelDetails>;
    toPersistance(entity: DomainModel): Promise<OrmModel>;
    toDomain(ormModel: OrmModel): Promise<DomainModel>;
}
