import { UserValidator } from '@use-cases/application-services/validators';
import { ValidationResponse } from 'common-base-classes';
import { RegisterAdminRequestDto } from '../dtos';
export declare class RegisterAdminValidator extends UserValidator {
    validate(command: RegisterAdminRequestDto): ValidationResponse;
}
