import { UserEmailValueObject, UserFirstNameValueObject, UserLastNameValueObject, UserNameValueObject, UserPasswordValueObject } from '@value-objects/user';
export declare class RegisterAdminCommand {
    username: UserNameValueObject;
    email: UserEmailValueObject;
    password: UserPasswordValueObject;
    firstName?: UserFirstNameValueObject;
    lastName?: UserLastNameValueObject;
    constructor(dto: RegisterAdminCommand);
}
