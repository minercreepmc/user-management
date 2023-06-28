import { IRequestHandler, Request } from 'nestjs-mediator';
import { Err, Ok } from 'oxide.ts';
import { ResponseResult } from './dto.base';
import { ProcessBase } from './process.base';
import { UseCaseCommandValidationExceptions } from './use-case-exceptions.base';
import { UseCaseMapperBase } from './use-case-mapper.base';
import { ValidatorBase } from './validator.base';
export declare abstract class HandlerBase<RequestDto extends Request<any>, ResponseDto> implements IRequestHandler<RequestDto, ResponseResult<ResponseDto>> {
    private readonly validator;
    private readonly mapper;
    private readonly process;
    constructor(validator: ValidatorBase | null, mapper: UseCaseMapperBase<ResponseDto>, process: ProcessBase<any, any>);
    handle(dto: RequestDto): Promise<Err<UseCaseCommandValidationExceptions> | Ok<ResponseDto>>;
}
