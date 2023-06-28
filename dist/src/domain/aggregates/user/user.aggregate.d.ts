import { AdminRegisteredDomainEvent, GuestRegisteredDomainEvent, MemberRegisteredDomainEvent } from '@domain-events/user';
import { UserEmailValueObject, UserFirstNameValueObject, UserLastNameValueObject, UserNameValueObject, UserPasswordValueObject, UserRoleValueObject } from '@value-objects/user';
import { AbstractAggregateRoot } from 'common-base-classes';
import { RegisterUserAggregateOptions, UserAggregateDetails, UserAggregateOptions } from './user.aggregate.interface';
export declare class UserAggregate extends AbstractAggregateRoot<Partial<UserAggregateDetails>> {
    constructor(options?: UserAggregateOptions);
    registerGuest(): GuestRegisteredDomainEvent;
    registerMember(options: RegisterUserAggregateOptions): MemberRegisteredDomainEvent;
    registerAdmin(options: RegisterUserAggregateOptions): AdminRegisteredDomainEvent;
    set username(value: UserNameValueObject);
    get username(): UserNameValueObject;
    set password(value: UserPasswordValueObject);
    get password(): UserPasswordValueObject;
    get hashed(): import("@value-objects/user").UserHashedPasswordValueObject;
    set email(value: UserEmailValueObject);
    get email(): UserEmailValueObject;
    set firstName(value: UserFirstNameValueObject);
    get firstName(): UserFirstNameValueObject;
    set lastName(value: UserLastNameValueObject);
    get lastName(): UserLastNameValueObject;
    set role(value: UserRoleValueObject);
    get role(): UserRoleValueObject;
}
