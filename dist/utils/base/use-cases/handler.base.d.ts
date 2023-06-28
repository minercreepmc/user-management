import { IRequestHandler, Request } from 'nestjs-mediator';
import { Result } from 'oxide.ts';
import { ResponseResult } from './dto.base';
import { ProcessBase } from './process';
import { UseCaseProcessExceptions } from './use-case-exceptions.base';
import { UseCaseMapperBase } from './use-case-mapper.base';
import { RequestValidatorBase } from './validator';
export declare abstract class HandlerBase<RequestDto extends Request<any>, ResponseDto> implements IRequestHandler<RequestDto, ResponseResult<ResponseDto>> {
    private readonly validator;
    private readonly mapper;
    private readonly process;
    constructor(validator: RequestValidatorBase | null, mapper: UseCaseMapperBase<ResponseDto>, process: ProcessBase<any, any>);
    handle(dto: RequestDto): Promise<Result<ResponseDto, UseCaseProcessExceptions>>;
}
