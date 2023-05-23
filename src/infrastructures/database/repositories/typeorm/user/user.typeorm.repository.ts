import { UserAggregate } from '@aggregates/user/user.aggregate';
import { UserAggregateDetails } from '@aggregates/user/user.aggregate.interface';
import { AbstractTypeormRepository } from 'nest-typeorm-common-classes';
import { UserTypeOrmModel } from './user.typeorm.model';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserTypeormMapper } from './user.typeorm.mapper';
import { UserTypeOrmQueryMapper } from './user.typeorm.query-mapper';
import { Injectable, Logger } from '@nestjs/common';
import { UserRepositoryPort } from '@domain-interfaces';
import { UserNameValueObject, UserEmailValueObject } from '@value-objects/user';

@Injectable()
export class UserTypeOrmRepository
  extends AbstractTypeormRepository<
    UserAggregate,
    UserAggregateDetails,
    UserTypeOrmModel
  >
  implements UserRepositoryPort
{
  constructor(
    @InjectRepository(UserTypeOrmModel)
    repository: Repository<UserTypeOrmModel>,
  ) {
    super(
      repository,
      new UserTypeormMapper(UserAggregate, UserTypeOrmModel),
      new UserTypeOrmQueryMapper(),
      new Logger(UserTypeOrmRepository.name),
    );
  }
  async findOneByEmail(email: UserEmailValueObject): Promise<UserAggregate> {
    const where = this.queryMapper.toQuery({ email });
    const model = await this.typeOrmRepository.findOne({ where });
    return model ? this.typeOrmMapper.toDomain(model) : null;
  }
  async findOneByUserName(
    username: UserNameValueObject,
  ): Promise<UserAggregate> {
    const where = this.queryMapper.toQuery({ username });
    const model = await this.typeOrmRepository.findOne({ where });
    return model ? this.typeOrmMapper.toDomain(model) : null;
  }
}