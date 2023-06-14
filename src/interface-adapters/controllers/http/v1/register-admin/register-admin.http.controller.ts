import {
  Body,
  ConflictException,
  Controller,
  Post,
  UnprocessableEntityException,
  UseGuards,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ApiBearerAuth } from '@nestjs/swagger';
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
import { V1RegisterAdminHttpRequest } from './register-admin.http.request';
import { V1RegisterAdminHttpResponse } from './register-admin.http.response';

@Controller('/api/v1/register')
export class V1RegisterAdminHttpController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post('/admin')
  @UseGuards(ApiKeyGuard)
  @ApiBearerAuth('x-api-key')
  async execute(@Body() dto: V1RegisterAdminHttpRequest) {
    const command = new RegisterAdminCommand(dto);
    const result = await this.commandBus.execute(command);
    return match(result, {
      Ok: (response: RegisterAdminResponseDto) =>
        new V1RegisterAdminHttpResponse(response),
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
