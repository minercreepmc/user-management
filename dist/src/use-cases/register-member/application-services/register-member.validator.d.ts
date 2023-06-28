import { UserValidator } from '@use-cases/application-services/validators';
import { ValidationResponse } from 'common-base-classes';
import { RegisterMemberRequestDto } from '../dtos';
export declare class RegisterMemberValidator extends UserValidator {
    validate(command: RegisterMemberRequestDto): ValidationResponse;
}
