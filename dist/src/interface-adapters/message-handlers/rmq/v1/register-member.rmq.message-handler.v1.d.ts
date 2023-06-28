import { RmqContext } from '@nestjs/microservices';
import { RegisterMemberResponseDto } from '@use-cases/register-member/dtos';
import { Mediator } from 'nestjs-mediator';
export declare class V1RegisterMemberRmqMessageHandler {
    private readonly mediator;
    constructor(mediator: Mediator);
    handle(bytes: any, context: RmqContext): Promise<RegisterMemberResponseDto>;
}
