import {
  GuestRegisteredDomainEvent,
  MemberRegisteredDomainEvent,
} from '@domain-events/user';
import {
  UserEmailValueObject,
  UserFirstNameValueObject,
  UserLastNameValueObject,
  UserNameValueObject,
  UserPasswordValueObject,
  UserRoleValueObject,
} from '@value-objects/user';
import { AbstractAggregateRoot, UUID } from 'common-base-classes';
import {
  RegisterUserAggregateOptions,
  UserAggregateDetails,
  UserAggregateOptions,
} from './user.aggregate.interface';

export class UserAggregate extends AbstractAggregateRoot<
  Partial<UserAggregateDetails>
> {
  constructor(options?: UserAggregateOptions) {
    const defaultId = new UUID();
    const defaultDetails: Partial<UserAggregateDetails> = {};
    const { id = defaultId, details = defaultDetails } = options ?? {};

    super({ id, details });
  }

  registerGuest() {
    this.username = new UserNameValueObject('guest');
    this.role = UserRoleValueObject.createGuest();
    return new GuestRegisteredDomainEvent({
      userId: this.id,
      details: {
        username: this.username,
        role: this.role,
      },
    });
  }

  registerMember(options: RegisterUserAggregateOptions) {
    const { username, password, email, firstName, lastName } = options;

    this.username = username;
    this.password = password;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = UserRoleValueObject.createGuest();
    return new MemberRegisteredDomainEvent({
      userId: this.id,
      details: {
        username,
        email,
        firstName,
        lastName,
        role: this.role,
      },
    });
  }

  set username(value: UserNameValueObject) {
    this.details.username = value;
  }

  get username() {
    return this.details.username;
  }

  set password(value: UserPasswordValueObject) {
    this.details.password = value;
  }

  get password() {
    return this.details.password;
  }

  set email(value: UserEmailValueObject) {
    this.details.email = value;
  }

  get email() {
    return this.details.email;
  }

  set firstName(value: UserFirstNameValueObject) {
    this.details.firstName = value;
  }

  get firstName() {
    return this.details.firstName;
  }

  set lastName(value: UserLastNameValueObject) {
    this.details.lastName = value;
  }

  get lastName(): UserLastNameValueObject {
    return this.details.lastName;
  }

  set role(value: UserRoleValueObject) {
    this.details.role = value;
  }

  get role() {
    return this.details.role;
  }
}
