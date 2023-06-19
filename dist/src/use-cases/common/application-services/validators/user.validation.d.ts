import { ICommand } from '@nestjs/cqrs';
import { TranslateOptions, ValidatorBase } from '@use-cases/common';
import { ValidationResponse, ValidationExceptionBase } from 'common-base-classes';
export declare abstract class UserValidator extends ValidatorBase {
    abstract validate(command: ICommand): ValidationResponse;
    protected translateExceptionToUserFriendlyMessage(options: TranslateOptions): ValidationExceptionBase;
    validateUserName(username: string): void;
    validateUserEmail(email: string): void;
    validateUserPassword(password: string): void;
    validateUserFirstName(firstName: string): void;
    validateUserLastName(lastName: string): void;
}
