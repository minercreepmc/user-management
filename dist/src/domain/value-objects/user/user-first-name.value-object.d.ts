import { TextValueObject, ValidationResponse } from 'common-base-classes';
export declare class UserFirstNameValueObject extends TextValueObject {
    constructor(value: string);
    private static readonly OPTIONS;
    static validate(value: string): ValidationResponse;
}
