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
  UserLastNameValueObject,
  UserNameValueObject,
  UserRoleValueObject,
} from '@value-objects/user';
import { PasswordManagementDomainService } from '@domain-services';

export class UserTypeormMapper extends AbstractTypeOrmMapper<
  UserAggregate,
  UserAggregateDetails,
  UserTypeOrmModel
> {
  constructor(
    private readonly passwordManagementDomainService: PasswordManagementDomainService,
  ) {
    super(UserAggregate, UserTypeOrmModel);
  }

  protected async toPersistanceDetails(
    entity: UserAggregate,
  ): Promise<OrmModelDetails<UserTypeOrmModel>> {
    let email: string;
    let role: string;
    let username: string;
    let firstName: string;
    let lastName: string;
    let password: string;

    if (entity.role) {
      role = entity.role.unpack();
    }

    if (entity.email) {
      email = entity.email.unpack();
    }

    if (entity.username) {
      username = entity.username.unpack();
    }

    if (entity.firstName) {
      firstName = entity.firstName.unpack();
    }

    if (entity.lastName) {
      lastName = entity.lastName.unpack();
    }

    if (entity.password) {
      password = await this.passwordManagementDomainService.hashPassword(
        entity.password.unpack(),
      );
    }

    return {
      role,
      email,
      username,
      firstName,
      lastName,
      password,
    };
  }
  protected async toDomainDetails(
    ormModel: UserTypeOrmModel,
  ): Promise<UserAggregateDetails> {
    let email: UserEmailValueObject;
    let username: UserNameValueObject;
    let role: UserRoleValueObject;
    let firstName: UserFirstNameValueObject;
    let lastName: UserLastNameValueObject;

    if (ormModel.email) {
      email = new UserEmailValueObject(ormModel.email);
    }

    if (ormModel.username) {
      username = new UserNameValueObject(ormModel.username);
    }

    if (ormModel.role) {
      role = new UserRoleValueObject(ormModel.role);
    }

    if (ormModel.firstName) {
      firstName = new UserFirstNameValueObject(ormModel.firstName);
    }

    if (ormModel.lastName) {
      lastName = new UserLastNameValueObject(ormModel.lastName);
    }

    return {
      email,
      username,
      role,
      firstName,
      lastName,
    };
  }
}
