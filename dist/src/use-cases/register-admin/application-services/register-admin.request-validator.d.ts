import { UserRequestValidator } from '@use-cases/application-services/validators';
import { RegisterAdminRequestDto } from '../dtos';
export declare class RegisterAdminRequestValidator extends UserRequestValidator {
    _validate(command: RegisterAdminRequestDto): void;
}
