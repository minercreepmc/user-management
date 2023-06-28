import { UserHashedPasswordValueObject, UserPasswordValueObject } from '@value-objects/user';
export declare class PasswordHashingDomainService {
    hashPassword(password: UserPasswordValueObject): Promise<string>;
    comparePasswords(password: UserPasswordValueObject, hashedPassword: UserHashedPasswordValueObject): Promise<boolean>;
}
