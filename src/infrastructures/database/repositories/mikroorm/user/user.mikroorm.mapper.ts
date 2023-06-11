import {
  MikroOrmMapperBase,
  OrmModelDetails,
} from '@utils/base/database/repositories/mikroorm';
import { UserMikroOrmModel } from './user.mikroorm.model';
import { UserAggregate, UserAggregateDetails } from '@aggregates/user';
import {
  UserEmailValueObject,
  UserFirstNameValueObject,
  UserHashedPasswordValueObject,
  UserLastNameValueObject,
  UserNameValueObject,
  UserRoleValueObject,
} from '@value-objects/user';
import { PasswordHashingDomainService } from '@domain-services';

type UserMikroOrmModelDetails = OrmModelDetails<UserMikroOrmModel>;

export class UserMikroOrmMapper extends MikroOrmMapperBase<
  UserAggregate,
  UserAggregateDetails,
  UserMikroOrmModel
> {
  constructor(
    private readonly passwordHashingService: PasswordHashingDomainService,
  ) {
    super(UserAggregate, UserMikroOrmModel);
  }

  protected async toPersistanceDetails(
    entity: UserAggregate,
  ): Promise<UserMikroOrmModelDetails> {
    const details: UserMikroOrmModelDetails = {} as UserMikroOrmModelDetails;

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
    ormModel: UserMikroOrmModel,
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
