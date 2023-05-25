import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  UseCaseCommandValidationExceptions,
  UseCaseProcessExceptions,
} from '@use-cases/common';
import { Err, Ok } from 'oxide.ts';
import {
  RegisterMemberMapper,
  RegisterMemberProcess,
  RegisterMemberValidator,
} from './application-services';
import { RegisterMemberCommand, RegisterMemberResult } from './dtos';

@CommandHandler(RegisterMemberCommand)
export class RegisterMemberHandler
  implements ICommandHandler<RegisterMemberCommand, RegisterMemberResult>
{
  constructor(
    private readonly validator: RegisterMemberValidator,
    private readonly registerMemberProcess: RegisterMemberProcess,
    private readonly mapper: RegisterMemberMapper,
  ) {}

  async execute(command: RegisterMemberCommand): Promise<RegisterMemberResult> {
    const commandValidated = this.validator.validate(command);

    if (!commandValidated.isValid) {
      return Err(
        new UseCaseCommandValidationExceptions(commandValidated.exceptions),
      );
    }

    const domainOptions = this.mapper.toDomain(command);

    const registerMemberResult = await this.registerMemberProcess.execute(
      domainOptions,
    );

    if (registerMemberResult.isErr()) {
      return Err(
        new UseCaseProcessExceptions(registerMemberResult.unwrapErr()),
      );
    }

    return Ok(this.mapper.toResponseDto(registerMemberResult.unwrap()));
  }
}
