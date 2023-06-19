import { CommandBus } from '@nestjs/cqrs';
import { V1RegisterAdminHttpRequest } from './register-admin.http.request';
import { V1RegisterAdminHttpResponse } from './register-admin.http.response';
export declare class V1RegisterAdminHttpController {
    private readonly commandBus;
    constructor(commandBus: CommandBus);
    execute(dto: V1RegisterAdminHttpRequest): Promise<V1RegisterAdminHttpResponse>;
}
