import { UserAggregate } from '@aggregates/user/user.aggregate';
import { UserAggregateDetails } from '@aggregates/user/user.aggregate.interface';
import { UserEmailValueObject, UserNameValueObject } from '@value-objects/user';
import { RepositoryPort } from 'common-base-classes';

export interface UserRepositoryPort
  extends RepositoryPort<UserAggregate, UserAggregateDetails> {
  findOneByEmail(email: UserEmailValueObject): Promise<UserAggregate>;
  findOneByUserName(username: UserNameValueObject): Promise<UserAggregate>;
}

export const userRepositoryDiToken = Symbol('USER_REPOSITORY');
