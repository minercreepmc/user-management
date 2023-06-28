import { UserEmailValueObject, UserFirstNameValueObject, UserLastNameValueObject, UserNameValueObject, UserPasswordValueObject } from '@value-objects/user';
export declare class RegisterMemberCommand {
    username: UserNameValueObject;
    password: UserPasswordValueObject;
    email?: UserEmailValueObject;
    firstName?: UserFirstNameValueObject;
    lastName?: UserLastNameValueObject;
    constructor(dtos: RegisterMemberCommand);
}
