import {
  Body,
  ConflictException,
  Controller,
  Post,
  UnprocessableEntityException,
  UseGuards,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ApiKeyGuard } from '@src/interface-adapters/guards';
import {
  UseCaseCommandValidationExceptions,
  UseCaseProcessExceptions,
} from '@use-cases/common';
import {
  RegisterAdminCommand,
  RegisterAdminResponseDto,
} from '@use-cases/register-admin/dtos';
import { match } from 'oxide.ts';
import { RegisterAdminHttpRequest } from './register-admin.http.request';
import { RegisterAdminHttpResponse } from './register-admin.http.response';

@Controller('register')
export class RegisterAdminHttpController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post('/admin')
  @UseGuards(ApiKeyGuard)
  async execute(@Body() dto: RegisterAdminHttpRequest) {
    const command = new RegisterAdminCommand(dto);
    const result = await this.commandBus.execute(command);
    return match(result, {
      Ok: (response: RegisterAdminResponseDto) =>
        new RegisterAdminHttpResponse(response),
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
