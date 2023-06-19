import { MikroOrmMapperBase, OrmModelDetails } from '@utils/base/database/repositories/mikroorm';
import { UserMikroOrmModel } from './user.mikroorm.model';
import { UserAggregate, UserAggregateDetails } from '@aggregates/user';
import { PasswordHashingDomainService } from '@domain-services';
type UserMikroOrmModelDetails = OrmModelDetails<UserMikroOrmModel>;
export declare class UserMikroOrmMapper extends MikroOrmMapperBase<UserAggregate, UserAggregateDetails, UserMikroOrmModel> {
    private readonly passwordHashingService;
    constructor(passwordHashingService: PasswordHashingDomainService);
    protected toPersistanceDetails(entity: UserAggregate): Promise<UserMikroOrmModelDetails>;
    protected toDomainDetails(ormModel: UserMikroOrmModel): Promise<UserAggregateDetails>;
}
export {};
