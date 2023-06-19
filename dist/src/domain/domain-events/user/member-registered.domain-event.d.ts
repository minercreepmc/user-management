import { UserEmailValueObject, UserFirstNameValueObject, UserIdValueObject, UserLastNameValueObject, UserNameValueObject, UserRoleValueObject } from '@value-objects/user';
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
export declare class MemberRegisteredDomainEvent extends DomainEvent<MemberRegisteredDomainEventDetails> {
    constructor(options: MemberRegisteredDomainEventOptions);
    get userId(): import("common-base-classes").ID;
    get username(): UserNameValueObject;
    get email(): UserEmailValueObject;
    get firstName(): UserFirstNameValueObject;
    get lastName(): UserLastNameValueObject;
    get role(): UserRoleValueObject;
}
