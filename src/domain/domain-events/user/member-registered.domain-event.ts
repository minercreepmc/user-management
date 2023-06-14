import { UserAggregate } from '@aggregates/user/user.aggregate';
import {
  UserEmailValueObject,
  UserFirstNameValueObject,
  UserIdValueObject,
  UserLastNameValueObject,
  UserNameValueObject,
  UserRoleValueObject,
} from '@value-objects/user';
import { DomainEvent } from 'common-base-classes';

export interface MemberRegisteredDomainEventDetails {
  username: UserNameValueObject;
  email: UserEmailValueObject;
  firstName: UserFirstNameValueObject;
  lastName: UserLastNameValueObject;
  role: UserRoleValueObject;
}

export interface MemberRegisteredDomainEventOptions {
  userId: UserIdValueObject;
  details: MemberRegisteredDomainEventDetails;
}

export class MemberRegisteredDomainEvent extends DomainEvent<MemberRegisteredDomainEventDetails> {
  constructor(options: MemberRegisteredDomainEventOptions) {
    const { userId, details } = options;
    super({
      eventName: MemberRegisteredDomainEvent.name,
      entityType: UserAggregate.name,
      eventDetails: details,
      entityId: userId,
    });
  }

  get userId() {
    return this.entityId;
  }

  get username() {
    return this.details.username;
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

  get role() {
    return this.details.role;
  }
}
