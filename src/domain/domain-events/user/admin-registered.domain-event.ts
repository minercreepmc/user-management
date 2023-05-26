import { UserAggregate } from '@aggregates/user';
import {
  UserEmailValueObject,
  UserFirstNameValueObject,
  UserIdValueObject,
  UserLastNameValueObject,
  UserNameValueObject,
  UserRoleValueObject,
} from '@value-objects/user';
import { DomainEvent } from 'common-base-classes';

export interface AdminRegisteredDomainEventDetails {
  username: UserNameValueObject;
  role: UserRoleValueObject;
  email?: UserEmailValueObject;
  firstName?: UserFirstNameValueObject;
  lastName?: UserLastNameValueObject;
}

export interface AdminRegisteredDomainEventOptions {
  userId: UserIdValueObject;
  details: AdminRegisteredDomainEventDetails;
}

export class AdminRegisteredDomainEvent extends DomainEvent<AdminRegisteredDomainEventDetails> {
  constructor(options: AdminRegisteredDomainEventOptions) {
    const { userId, details } = options;
    super({
      entityId: userId,
      eventName: AdminRegisteredDomainEvent.name,
      entityType: UserAggregate.name,
      eventDetails: details,
    });
  }

  get username() {
    return this.details.username;
  }

  get role() {
    return this.details.role;
  }

  get email() {
    return this.details.email;
  }

  get firstName() {
    return this.details.firstName;
  }

  get lastName() {
    return this.details.lastName;
  }
}
