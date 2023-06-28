import { UserEmailValueObject, UserFirstNameValueObject, UserIdValueObject, UserLastNameValueObject, UserNameValueObject, UserRoleValueObject } from '@value-objects/user';
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
export declare class AdminRegisteredDomainEvent extends DomainEvent<AdminRegisteredDomainEventDetails> {
    constructor(options: AdminRegisteredDomainEventOptions);
    get username(): UserNameValueObject;
    get role(): UserRoleValueObject;
    get email(): UserEmailValueObject;
    get firstName(): UserFirstNameValueObject;
    get lastName(): UserLastNameValueObject;
}
