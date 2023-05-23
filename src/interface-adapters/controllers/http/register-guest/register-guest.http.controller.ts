import {
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
  RegisterGuestCommand,
  RegisterGuestResponseDto,
} from '@use-cases/register-guest/dtos';
import { match } from 'oxide.ts';
import { RegisterGuestHttpResponse } from './register-guest.http.response';

@Controller('register')
export class RegisterGuestHttpController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post('/guest')
  async execute() {
    const command = new RegisterGuestCommand();
    const result = await this.commandBus.execute(command);
    return match(result, {
      Ok: (response: RegisterGuestResponseDto) =>
        new RegisterGuestHttpResponse(response),
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
