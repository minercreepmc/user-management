import { RmqContext } from '@nestjs/microservices';
import { V1RegisterMemberRequestDto } from '@shared/gateways';
export declare class V1RegisterMemberRmqMessageHandler {
    handle(dto: V1RegisterMemberRequestDto, context: RmqContext): void;
}
