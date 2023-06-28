import { RequestDtoBase } from '@base/use-cases';
import { Mediator } from 'nestjs-mediator';
export declare abstract class HttpPostControllerBase<THttpRequest, THttpResponse> {
    private readonly mediator;
    constructor(mediator: Mediator);
    execute(httpRequest: any): Promise<any>;
    abstract createDto(httpRequest: THttpRequest): RequestDtoBase<any>;
    abstract createHttpResponse(response: any): THttpResponse;
}
