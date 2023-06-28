import { MikroOrmModelDetails, QueryParams } from './common-type';
import { MikroOrmModelBase } from './mikroorm-model.base';
export declare abstract class MikroOrmQueryMapper<EntityDetails, OrmModel extends MikroOrmModelBase> {
    protected abstract toQueryDetails(details: QueryParams<EntityDetails>): Partial<MikroOrmModelDetails>;
    toQuery(params: QueryParams<EntityDetails>): OrmModel;
}
