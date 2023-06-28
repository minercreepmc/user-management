import { RequestDtoBase } from '@base/use-cases';
import { Mediator } from 'nestjs-mediator';
export declare abstract class HttpPutControllerBase<THttpRequest, THttpResponse> {
    private readonly mediator;
    constructor(mediator: Mediator);
    execute(httpRequest: THttpRequest, id: string): Promise<any>;
    abstract createDto(httpRequest: THttpRequest, id?: string): RequestDtoBase<any>;
    abstract createHttpResponse(response: any): THttpResponse;
}
