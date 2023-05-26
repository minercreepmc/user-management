import { UserAggregate } from '@aggregates/user/user.aggregate';
import { UserAggregateDetails } from '@aggregates/user/user.aggregate.interface';
import {
  AbstractTypeOrmMapper,
  OrmModelDetails,
} from 'nest-typeorm-common-classes';
import { UserTypeOrmModel } from './user.typeorm.model';
import {
  UserEmailValueObject,
  UserFirstNameValueObject,
  UserHashedPasswordValueObject,
  UserLastNameValueObject,
  UserNameValueObject,
  UserRoleValueObject,
} from '@value-objects/user';
import { PasswordHashingDomainService } from '@domain-services';

export type UserTypeOrmDetails = OrmModelDetails<UserTypeOrmModel>;

export class UserTypeormMapper extends AbstractTypeOrmMapper<
  UserAggregate,
  UserAggregateDetails,
  UserTypeOrmModel
> {
  constructor(
    private readonly passwordHashingService: PasswordHashingDomainService,
  ) {
    super(UserAggregate, UserTypeOrmModel);
  }

  protected async toPersistanceDetails(
    entity: UserAggregate,
  ): Promise<UserTypeOrmDetails> {
    const details: UserTypeOrmDetails = {} as UserTypeOrmDetails;

    if (entity.role) {
      details.role = entity.role.unpack();
    }

    if (entity.email) {
      details.email = entity.email.unpack();
    }

    if (entity.username) {
      details.username = entity.username.unpack();
    }

    if (entity.firstName) {
      details.firstName = entity.firstName.unpack();
    }

    if (entity.lastName) {
      details.lastName = entity.lastName.unpack();
    }

    if (entity.password) {
      details.hashed = await this.passwordHashingService.hashPassword(
        entity.password,
      );
    }

    return details;
  }
  protected async toDomainDetails(
    ormModel: UserTypeOrmModel,
  ): Promise<UserAggregateDetails> {
    const details: UserAggregateDetails = {} as UserAggregateDetails;
    if (ormModel.email) {
      details.email = new UserEmailValueObject(ormModel.email);
    }

    if (ormModel.username) {
      details.username = new UserNameValueObject(ormModel.username);
    }

    if (ormModel.role) {
      details.role = new UserRoleValueObject(ormModel.role);
    }

    if (ormModel.firstName) {
      details.firstName = new UserFirstNameValueObject(ormModel.firstName);
    }

    if (ormModel.lastName) {
      details.lastName = new UserLastNameValueObject(ormModel.lastName);
    }

    if (ormModel.hashed) {
      details.hashed = new UserHashedPasswordValueObject(ormModel.hashed);
    }

    return details;
  }
}
