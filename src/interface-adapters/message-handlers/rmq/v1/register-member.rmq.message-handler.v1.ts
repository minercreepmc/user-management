import { Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { V1RegisterMemberRequestDto } from '@shared/gateways';
import { V1UserPattern } from '@shared/patterns';

@Controller()
export class V1RegisterMemberRmqMessageHandler {
  @MessagePattern(V1UserPattern.CREATE_MEMBER)
  handle(
    @Payload() dto: V1RegisterMemberRequestDto,
    @Ctx() context: RmqContext,
  ) {
    console.log(`Pattern: ${context.getPattern()}`);
  }
}
