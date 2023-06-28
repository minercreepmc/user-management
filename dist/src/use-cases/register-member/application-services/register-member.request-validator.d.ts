import { UserRequestValidator } from '@use-cases/application-services/validators';
import { RegisterMemberRequestDto } from '../dtos';
export declare class RegisterMemberValidator extends UserRequestValidator {
    _validate(dto: RegisterMemberRequestDto): void;
}
