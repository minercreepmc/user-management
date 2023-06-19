import { UserValidator } from '@use-cases/common/application-services/validators';
import { ValidationResponse } from 'common-base-classes';
import { RegisterAdminCommand } from '../dtos';
export declare class RegisterAdminValidator extends UserValidator {
    validate(command: RegisterAdminCommand): ValidationResponse;
}
