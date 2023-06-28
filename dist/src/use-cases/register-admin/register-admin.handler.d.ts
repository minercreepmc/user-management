import { HandlerBase } from '@base/use-cases';
import { RegisterAdminMapper, RegisterAdminProcess, RegisterAdminRequestValidator } from './application-services';
import { RegisterAdminRequestDto, RegisterAdminResponseDto } from './dtos';
export declare class RegisterAdminHandler extends HandlerBase<RegisterAdminRequestDto, RegisterAdminResponseDto> {
    constructor(validator: RegisterAdminRequestValidator, process: RegisterAdminProcess, mapper: RegisterAdminMapper);
}
