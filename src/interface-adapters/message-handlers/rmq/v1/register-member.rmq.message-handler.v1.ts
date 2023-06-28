import { Controller, UseFilters, UseInterceptors } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
  RpcException,
} from '@nestjs/microservices';
import { V1UserPattern } from '@shared/patterns';
import {
  RegisterMemberRequestDto,
  RegisterMemberResponseDto,
} from '@use-cases/register-member/dtos';
import { Mediator } from 'nestjs-mediator';
import { match } from 'oxide.ts';
import { Message } from '@shared/gateways/message.interface';
import { ResultInterceptor } from '@base/interceptors';
import { MessageExceptionFilter } from '@base/exception-filters';

@Controller()
export class V1RegisterMemberRmqMessageHandler {
  constructor(private readonly mediator: Mediator) {}

  @MessagePattern(V1UserPattern.REGISTER_MEMBER)
  @UseInterceptors(ResultInterceptor)
  @UseFilters(new MessageExceptionFilter())
  async handle(@Payload() bytes: any, @Ctx() context: RmqContext) {
    const decoded = Message.decode(bytes.data);
    const dto = new RegisterMemberRequestDto(decoded.content);
    const result = await this.mediator.send(dto);

    return match(result, {
      Ok: (response: RegisterMemberResponseDto) => {
        return new RegisterMemberResponseDto(response);
      },

      Err: (error: Error) => {
        throw new RpcException(error);
      },
    });
  }
}
