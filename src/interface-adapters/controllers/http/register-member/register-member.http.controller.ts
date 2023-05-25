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
import { RegisterMemberHttpRequest } from './register-member.http.request';
import { RegisterMemberHttpResponse } from './register-member.http.response';

@Controller('register')
export class RegisterMemberHttpController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post('member')
  async execute(@Body() dto: RegisterMemberHttpRequest) {
    const command = new RegisterMemberCommand(dto);
    const result = await this.commandBus.execute(command);
    return match(result, {
      Ok: (response: RegisterMemberResponseDto) =>
        new RegisterMemberHttpResponse(response),
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
