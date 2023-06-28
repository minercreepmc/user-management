import { UserValidator } from '@use-cases/application-services/validators';
import { ValidationResponse } from 'common-base-classes';
import { SignInRequestDto } from '../dtos';
export declare class SignInValidator extends UserValidator {
    validate(command: SignInRequestDto): ValidationResponse;
}
