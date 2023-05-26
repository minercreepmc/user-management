import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  UseCaseCommandValidationExceptions,
  UseCaseProcessExceptions,
} from '@use-cases/common';
import { Err, Ok } from 'oxide.ts';
import {
  RegisterAdminMapper,
  RegisterAdminProcess,
  RegisterAdminValidator,
} from './application-services';
import { RegisterAdminCommand, RegisterAdminResult } from './dtos';

@CommandHandler(RegisterAdminCommand)
export class RegisterAdminHandler
  implements ICommandHandler<RegisterAdminCommand, RegisterAdminResult>
{
  constructor(
    private readonly validator: RegisterAdminValidator,
    private readonly registerAdminProcess: RegisterAdminProcess,
    private readonly mapper: RegisterAdminMapper,
  ) {}

  async execute(command: RegisterAdminCommand): Promise<RegisterAdminResult> {
    const commandValidated = this.validator.validate(command);

    if (!commandValidated.isValid) {
      return Err(
        new UseCaseCommandValidationExceptions(commandValidated.exceptions),
      );
    }

    const domainOptions = this.mapper.toDomain(command);

    const registerAdminResult = await this.registerAdminProcess.execute(
      domainOptions,
    );

    if (registerAdminResult.isErr()) {
      return Err(new UseCaseProcessExceptions(registerAdminResult.unwrapErr()));
    }

    return Ok(this.mapper.toResponseDto(registerAdminResult.unwrap()));
  }
}
