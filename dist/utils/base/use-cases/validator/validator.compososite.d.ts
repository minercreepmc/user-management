import { ValidationExceptionBase, ValidationResponse } from 'common-base-classes';
import { RequestDtoBase } from '../dto.base';
import { RequestValidatorBase } from './validator.base';
export declare abstract class CompositeRequestValidator extends RequestValidatorBase {
    private validators;
    exceptions: Map<string, ValidationExceptionBase>;
    validate(requestDto: RequestDtoBase<any>): ValidationResponse;
    init(): void;
    addValidator(validator: RequestValidatorBase): void;
    abstract _validate(requestDto: RequestDtoBase<any>): void;
    private gatherExceptions;
    protected getValidationResponse(): ValidationResponse;
}
