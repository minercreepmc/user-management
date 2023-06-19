import { UserValidator } from '@use-cases/common/application-services/validators';
import { ValidationResponse } from 'common-base-classes';
import { RegisterMemberCommand } from '../dtos';
export declare class RegisterMemberValidator extends UserValidator {
    validate(command: RegisterMemberCommand): ValidationResponse;
}
