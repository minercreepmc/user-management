import { ValidationExceptionBase, ValidationResponse } from 'common-base-classes';
import { RequestDtoBase } from '../dto.base';
export interface HandlerValidationResponseOptions {
    response: ValidationResponse;
    context?: string;
}
export interface TranslateOptions {
    exception: ValidationExceptionBase;
    context?: string;
}
export declare abstract class RequestValidatorBase {
    exceptions: Map<string, ValidationExceptionBase>;
    validate(requestDto: RequestDtoBase<any>): ValidationResponse;
    abstract _validate(requestDto: RequestDtoBase<any>): void;
    translateExceptionToUserFriendlyMessage(options: TranslateOptions): ValidationExceptionBase;
    init(): void;
    protected clearExceptions(): void;
    protected handlerValidationResponse(options: HandlerValidationResponseOptions): void;
    protected getValidationResponse(): ValidationResponse;
}
