import { UserRequestValidator } from '@use-cases/application-services/validators';
import { SignInRequestDto } from '../dtos';
export declare class SignInRequestValidator extends UserRequestValidator {
    _validate(command: SignInRequestDto): void;
}
