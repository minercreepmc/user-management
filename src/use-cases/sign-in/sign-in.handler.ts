import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  UseCaseCommandValidationExceptions,
  UseCaseProcessExceptions,
} from '@use-cases/common';
import { Err, Ok } from 'oxide.ts';
import {
  SignInMapper,
  SignInProcess,
  SignInValidator,
} from './application-services';
import { SignInCommand, SignInResult } from './dtos';

@CommandHandler(SignInCommand)
export class SignInHandler
  implements ICommandHandler<SignInCommand, SignInResult>
{
  constructor(
    private readonly validator: SignInValidator,
    private readonly signInProcess: SignInProcess,
    private readonly mapper: SignInMapper,
  ) {}

  async execute(command: SignInCommand): Promise<SignInResult> {
    const commandValidated = this.validator.validate(command);

    if (!commandValidated.isValid) {
      return Err(
        new UseCaseCommandValidationExceptions(commandValidated.exceptions),
      );
    }

    const domainOptions = this.mapper.toDomain(command);

    const signInResult = await this.signInProcess.execute(domainOptions);

    if (signInResult.isErr()) {
      return Err(new UseCaseProcessExceptions(signInResult.unwrapErr()));
    }

    return Ok(this.mapper.toResponseDto(signInResult.unwrap()));
  }
}
