import {
  Body,
  Controller,
  Post,
  UnprocessableEntityException,
  UnauthorizedException,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import {
  UseCaseCommandValidationExceptions,
  UseCaseProcessExceptions,
} from '@use-cases/common';
import { SignInCommand, SignInResponseDto } from '@use-cases/sign-in/dtos';
import { match } from 'oxide.ts';
import { SignInHttpRequest } from './sign-in.http.request';
import { SignInHttpResponse } from './sign-in.http.response';

@Controller('sign-in')
export class SignInHttpController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async execute(@Body() dto: SignInHttpRequest) {
    const command = new SignInCommand(dto);
    const result = await this.commandBus.execute(command);
    return match(result, {
      Ok: (response: SignInResponseDto) => new SignInHttpResponse(response),
      Err: (exception: Error) => {
        if (exception instanceof UseCaseCommandValidationExceptions) {
          throw new UnprocessableEntityException(exception.exceptions);
        }
        if (exception instanceof UseCaseProcessExceptions) {
          throw new UnauthorizedException(exception.exceptions);
        }
        throw exception;
      },
    });
  }
}
