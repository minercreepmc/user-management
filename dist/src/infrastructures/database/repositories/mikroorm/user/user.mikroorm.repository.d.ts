import { UserAggregate, UserAggregateDetails } from '@aggregates/user';
import { UserRepositoryPort } from '@domain-interfaces';
import { PasswordHashingDomainService } from '@domain-services';
import { EntityManager } from '@mikro-orm/postgresql';
import { MikroOrmRepositoryBase } from '@utils/base/database/repositories/mikroorm';
import { UserEmailValueObject, UserNameValueObject } from '@value-objects/user';
import { UserMikroOrmModel } from './user.mikroorm.model';
export declare class UserMikroOrmRepository extends MikroOrmRepositoryBase<UserAggregate, UserAggregateDetails, UserMikroOrmModel> implements UserRepositoryPort {
    constructor(entityManager: EntityManager, passwordHashingService: PasswordHashingDomainService);
    findOneByEmail(email: UserEmailValueObject): Promise<UserAggregate>;
    findOneByUsername(username: UserNameValueObject): Promise<UserAggregate>;
}
