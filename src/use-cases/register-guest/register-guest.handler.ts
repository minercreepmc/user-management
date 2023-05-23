import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UseCaseProcessExceptions } from '@use-cases/common';
import { Err, Ok } from 'oxide.ts';
import {
  RegisterGuestMapper,
  RegisterGuestProcess,
} from './application-services';
import { RegisterGuestCommand, RegisterGuestResult } from './dtos';

@CommandHandler(RegisterGuestCommand)
export class RegisterGuestHandler
  implements ICommandHandler<RegisterGuestCommand, RegisterGuestResult>
{
  constructor(
    private readonly registerGuestProcess: RegisterGuestProcess,
    private readonly mapper: RegisterGuestMapper,
  ) {}

  async execute(): Promise<RegisterGuestResult> {
    const registerGuestResult = await this.registerGuestProcess.execute();

    if (registerGuestResult.isErr()) {
      return Err(new UseCaseProcessExceptions(registerGuestResult.unwrapErr()));
    }

    return Ok(this.mapper.toResponseDto(registerGuestResult.unwrap()));
  }
}
