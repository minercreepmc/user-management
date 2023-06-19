import { TextValueObject, TextValueObjectOptions, ValidationResponse } from 'common-base-classes';
export declare class UserEmailValueObject extends TextValueObject {
    constructor(value: string);
    static readonly OPTIONS: TextValueObjectOptions;
    static validate(value: string): ValidationResponse;
}
