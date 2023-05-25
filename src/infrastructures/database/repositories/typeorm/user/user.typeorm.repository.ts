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
import { PasswordManagementDomainService } from '@domain-services';

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
    readonly typeOrmRepository: Repository<UserTypeOrmModel>,
    readonly passwordManagementService: PasswordManagementDomainService,
  ) {
    super(
      typeOrmRepository,
      new UserTypeormMapper(passwordManagementService),
      new UserTypeOrmQueryMapper(),
      new Logger(UserTypeOrmRepository.name),
    );
  }
  async findOneByEmail(email: UserEmailValueObject): Promise<UserAggregate> {
    const where = this.queryMapper.toQuery({ email });
    const model = await this.typeOrmRepository.findOne({ where });
    return model ? this.typeOrmMapper.toDomain(model) : null;
  }
  async findOneByUsername(
    username: UserNameValueObject,
  ): Promise<UserAggregate> {
    const where = this.queryMapper.toQuery({ username });
    const model = await this.typeOrmRepository.findOne({ where });
    return model ? this.typeOrmMapper.toDomain(model) : null;
  }
}
