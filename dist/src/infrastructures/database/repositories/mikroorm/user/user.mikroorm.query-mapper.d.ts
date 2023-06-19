import { UserAggregateDetails } from '@aggregates/user';
import { MikroOrmQueryMapperBase, OrmModelDetails, QueryParams } from '@utils/base/database/repositories/mikroorm';
import { UserMikroOrmModel } from './user.mikroorm.model';
export type UserQueryParams = QueryParams<UserAggregateDetails>;
type UserMikroOrmModelDetails = Partial<OrmModelDetails<UserMikroOrmModel>>;
export declare class UserMikroOrmQueryMapper extends MikroOrmQueryMapperBase<UserAggregateDetails, UserMikroOrmModel> {
    protected toQueryDetails(params: UserQueryParams): UserMikroOrmModelDetails;
}
export {};
