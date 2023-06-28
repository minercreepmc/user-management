import { ICommand } from '@nestjs/cqrs';
import { ValidationExceptionBase, ValidationResponse } from 'common-base-classes';
export interface HandlerValidationResponseOptions {
    response: ValidationResponse;
    context?: string;
}
export interface TranslateOptions {
    exception: ValidationExceptionBase;
    context?: string;
}
export declare abstract class ValidatorBase {
    exceptions: Map<string, ValidationExceptionBase>;
    abstract validate(command: ICommand): ValidationResponse;
    protected abstract translateExceptionToUserFriendlyMessage(options: TranslateOptions): ValidationExceptionBase;
    protected clearExceptions(): void;
    protected handlerValidationResponse(options: HandlerValidationResponseOptions): void;
    protected getValidationResponse(): ValidationResponse;
}
