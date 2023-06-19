import { CommandBus } from '@nestjs/cqrs';
import { V1RegisterGuestHttpResponse } from './register-guest.http.response';
export declare class V1RegisterGuestHttpController {
    private readonly commandBus;
    constructor(commandBus: CommandBus);
    execute(): Promise<V1RegisterGuestHttpResponse>;
}
