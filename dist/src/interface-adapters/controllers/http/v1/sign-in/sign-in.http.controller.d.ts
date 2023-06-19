import { CommandBus } from '@nestjs/cqrs';
import { V1SignInHttpRequest } from './sign-in.http.request';
import { V1SignInHttpResponse } from './sign-in.http.response';
export declare class V1SignInHttpController {
    private readonly commandBus;
    constructor(commandBus: CommandBus);
    execute(dto: V1SignInHttpRequest): Promise<V1SignInHttpResponse>;
}
