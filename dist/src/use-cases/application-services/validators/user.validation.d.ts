import { TranslateOptions, RequestValidatorBase, RequestDtoBase } from '@base/use-cases';
import { ValidationExceptionBase } from 'common-base-classes';
export interface UserRequestDto extends RequestDtoBase<any> {
    email: string;
    password: string;
    username: string;
    firstName: string;
    lastName: string;
}
export declare class UserRequestValidator extends RequestValidatorBase {
    _validate(dto: UserRequestDto): void;
    translateExceptionToUserFriendlyMessage(options: TranslateOptions): ValidationExceptionBase;
    validateUserName(username: string): void;
    validateUserEmail(email: string): void;
    validateUserPassword(password: string): void;
    validateUserFirstName(firstName: string): void;
    validateUserLastName(lastName: string): void;
}
