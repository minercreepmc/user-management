import { HandlerBase } from '@base/use-cases';
import { RegisterMemberMapper, RegisterMemberProcess, RegisterMemberValidator } from './application-services';
import { RegisterMemberRequestDto, RegisterMemberResponseDto } from './dtos';
export declare class RegisterMemberHandler extends HandlerBase<RegisterMemberRequestDto, RegisterMemberResponseDto> {
    constructor(validator: RegisterMemberValidator, mapper: RegisterMemberMapper, process: RegisterMemberProcess);
}
