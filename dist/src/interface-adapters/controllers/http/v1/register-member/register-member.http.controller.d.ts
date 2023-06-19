import { CommandBus } from '@nestjs/cqrs';
import { V1RegisterMemberHttpRequest } from './register-member.http.request';
import { V1RegisterMemberHttpResponse } from './register-member.http.response';
export declare class V1RegisterMemberHttpController {
    private readonly commandBus;
    constructor(commandBus: CommandBus);
    execute(dto: V1RegisterMemberHttpRequest): Promise<V1RegisterMemberHttpResponse>;
}
