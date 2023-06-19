import { UserValidator } from '@use-cases/common/application-services/validators';
import { ValidationResponse } from 'common-base-classes';
import { SignInCommand } from '../dtos';
export declare class SignInValidator extends UserValidator {
    validate(command: SignInCommand): ValidationResponse;
}
