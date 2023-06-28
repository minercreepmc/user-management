import { Request } from 'nestjs-mediator';
import { Result } from 'oxide.ts';
import { UseCaseCommandValidationExceptions, UseCaseProcessExceptions } from './use-case-exceptions.base';
export declare abstract class RequestDtoBase<ResponseDto> extends Request<ResponseResult<ResponseDto>> {
}
export type ResponseResult<ResponseDto> = Result<ResponseDto, UseCaseProcessExceptions | UseCaseCommandValidationExceptions>;
export declare abstract class ResponseDtoBase {
    message: string;
    constructor(message: string);
}
