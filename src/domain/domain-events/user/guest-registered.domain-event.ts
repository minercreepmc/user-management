import { UserAggregate } from '@aggregates/user/user.aggregate';
import {
  UserIdValueObject,
  UserNameValueObject,
  UserRoleValueObject,
} from '@value-objects/user';
import { DomainEvent } from 'common-base-classes';

export interface GuestRegisteredDomainEventDetails {
  username: UserNameValueObject;
  role: UserRoleValueObject;
}

export interface GuestRegisteredDomainEventOptions {
  userId: UserIdValueObject;
  details: GuestRegisteredDomainEventDetails;
}

export class GuestRegisteredDomainEvent extends DomainEvent<GuestRegisteredDomainEventDetails> {
  constructor(options: GuestRegisteredDomainEventOptions) {
    const { userId, details } = options;
    super({
      eventName: GuestRegisteredDomainEvent.name,
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
}
