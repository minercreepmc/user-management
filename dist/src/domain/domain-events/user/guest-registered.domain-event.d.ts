import { UserIdValueObject, UserNameValueObject, UserRoleValueObject } from '@value-objects/user';
import { DomainEvent } from 'common-base-classes';
export interface GuestRegisteredDomainEventDetails {
    username: UserNameValueObject;
    role: UserRoleValueObject;
}
export interface GuestRegisteredDomainEventOptions {
    userId: UserIdValueObject;
    details: GuestRegisteredDomainEventDetails;
}
export declare class GuestRegisteredDomainEvent extends DomainEvent<GuestRegisteredDomainEventDetails> {
    constructor(options: GuestRegisteredDomainEventOptions);
    get userId(): import("common-base-classes").ID;
    get username(): UserNameValueObject;
}
