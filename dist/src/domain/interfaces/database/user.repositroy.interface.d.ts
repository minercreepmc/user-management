import { UserAggregate } from '@aggregates/user/user.aggregate';
import { UserAggregateDetails } from '@aggregates/user/user.aggregate.interface';
import { UserEmailValueObject, UserNameValueObject } from '@value-objects/user';
import { RepositoryPort } from './repository.port';
export interface UserRepositoryPort extends RepositoryPort<UserAggregate, UserAggregateDetails> {
    findOneByEmail(email: UserEmailValueObject): Promise<UserAggregate>;
    findOneByUsername(username: UserNameValueObject): Promise<UserAggregate>;
}
export declare const userRepositoryDiToken: unique symbol;
