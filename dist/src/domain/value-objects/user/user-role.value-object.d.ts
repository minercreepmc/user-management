import { TextValueObject, ValidationResponse } from 'common-base-classes';
export declare enum UserRoleEnum {
    Guest = "guest",
    Member = "member",
    Admin = "admin"
}
export declare const reviewerRoles: UserRoleEnum[];
export declare class UserRoleValueObject extends TextValueObject {
    constructor(value: string);
    isAdmin(): boolean;
    isGuess(): boolean;
    isMember(): boolean;
    static validate(value: string): ValidationResponse;
    static createAdmin(): UserRoleValueObject;
    static createGuest(): UserRoleValueObject;
    static createMember(): UserRoleValueObject;
    private static readonly OPTIONS;
}
