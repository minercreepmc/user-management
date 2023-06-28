import { ProcessBase } from '@base/use-cases';
import { RegisterMemberCommand } from '@commands';
import { MemberRegisteredDomainEvent } from '@domain-events/user';
import { UserDomainExceptions } from '@domain-exceptions/user';
import { UserRegistrationDomainService } from '@domain-services';
import { Injectable } from '@nestjs/common';
import { UserBusinessEnforcer } from '@use-cases/application-services/process';

export type RegisterMemberProcessSuccess = MemberRegisteredDomainEvent;
export type RegisterMemberProcessFailure = Array<
  | UserDomainExceptions.UsernameAlreadyExists
  | UserDomainExceptions.EmailAlreadyExists
>;

@Injectable()
export class RegisterMemberProcess extends ProcessBase<
  RegisterMemberProcessSuccess,
  RegisterMemberProcessFailure
> {
  protected async enforceBusinessRules(
    command: RegisterMemberCommand,
  ): Promise<void> {
    const { email, username } = command;

    await this.userBusinessEnforcer.emailMustBeUnique(email);
    await this.userBusinessEnforcer.usernameMustBeUnique(username);
  }
  protected executeMainTask(
    command: RegisterMemberCommand,
  ): Promise<MemberRegisteredDomainEvent> {
    return this.userRegistrationService.registerMember(command);
  }

  constructor(
    private readonly userRegistrationService: UserRegistrationDomainService,
    private readonly userBusinessEnforcer: UserBusinessEnforcer<RegisterMemberProcessFailure>,
  ) {
    super({
      businessEnforcer: userBusinessEnforcer,
    });
  }
}
