import { UserAggregate, UserAggregateDetails } from '@aggregates/user';
import { UserTypeOrmModel } from '@database/repositories/typeorm/user';
import { UserRepositoryPort } from '@domain-interfaces';
import { PasswordHashingDomainService } from '@domain-services';
import { EntityManager } from '@mikro-orm/postgresql';
import { Injectable, Logger } from '@nestjs/common';
import { MikroOrmRepositoryBase } from '@utils/base/database/repositories/mikroorm';
import { UserEmailValueObject, UserNameValueObject } from '@value-objects/user';
import { UserMikroOrmMapper } from './user.mikroorm.mapper';
import { UserMikroOrmModel } from './user.mikroorm.model';
import { UserMikroOrmQueryMapper } from './user.mikroorm.query-mapper';

@Injectable()
export class UserMikroOrmRepository
  extends MikroOrmRepositoryBase<
    UserAggregate,
    UserAggregateDetails,
    UserTypeOrmModel
  >
  implements UserRepositoryPort
{
  constructor(
    entityManager: EntityManager,
    passwordHashingService: PasswordHashingDomainService,
  ) {
    super(
      entityManager,
      new UserMikroOrmMapper(passwordHashingService),
      new UserMikroOrmQueryMapper(),
      UserMikroOrmModel,
      new Logger(UserMikroOrmRepository.name),
    );
  }
  async findOneByEmail(email: UserEmailValueObject): Promise<UserAggregate> {
    return this.findOne({ email });
  }
  async findOneByUsername(
    username: UserNameValueObject,
  ): Promise<UserAggregate> {
    return this.findOne({ username });
  }
}
