import { UserEmailValueObject, UserNameValueObject, UserPasswordValueObject } from '@value-objects/user';
export declare class SignInCommand {
    username: UserNameValueObject;
    email: UserEmailValueObject;
    password: UserPasswordValueObject;
    constructor(dto: SignInCommand);
}
