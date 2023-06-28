import { HandlerBase } from '@base/use-cases';
import { SignInMapper, SignInProcess, SignInRequestValidator } from './application-services';
import { SignInRequestDto, SignInResponseDto } from './dtos';
export declare class SignInHandler extends HandlerBase<SignInRequestDto, SignInResponseDto> {
    constructor(validator: SignInRequestValidator, mapper: SignInMapper, process: SignInProcess);
}
