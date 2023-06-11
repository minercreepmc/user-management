import {
  Body,
  ConflictException,
  Controller,
  Post,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import {
  UseCaseCommandValidationExceptions,
  UseCaseProcessExceptions,
} from '@use-cases/common';
import {
  RegisterMemberCommand,
  RegisterMemberResponseDto,
} from '@use-cases/register-member/dtos';
import { match } from 'oxide.ts';
import { V1RegisterMemberHttpRequest } from './register-member.http.request';
import { V1RegisterMemberHttpResponse } from './register-member.http.response';

@Controller('/api/v1/register')
export class V1RegisterMemberHttpController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post('member')
  async execute(@Body() dto: V1RegisterMemberHttpRequest) {
    const command = new RegisterMemberCommand(dto);
    const result = await this.commandBus.execute(command);
    return match(result, {
      Ok: (response: RegisterMemberResponseDto) =>
        new V1RegisterMemberHttpResponse(response),
      Err: (exception: Error) => {
        if (exception instanceof UseCaseCommandValidationExceptions) {
          throw new UnprocessableEntityException(exception.exceptions);
        }
        if (exception instanceof UseCaseProcessExceptions) {
          throw new ConflictException(exception.exceptions);
        }
        throw exception;
      },
    });
  }
}
