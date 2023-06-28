import { HandlerBase } from '@base/use-cases';
import { RegisterGuestMapper, RegisterGuestProcess } from './application-services';
import { RegisterGuestRequestDto, RegisterGuestResponseDto } from './dtos';
export declare class RegisterGuestHandler extends HandlerBase<RegisterGuestRequestDto, RegisterGuestResponseDto> {
    constructor(process: RegisterGuestProcess, mapper: RegisterGuestMapper);
}
