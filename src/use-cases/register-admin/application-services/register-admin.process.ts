import { ProcessBase } from '@base/use-cases';
import { RegisterAdminCommand } from '@commands';
import { AdminRegisteredDomainEvent } from '@domain-events/user';
import { UserDomainExceptions } from '@domain-exceptions/user';
import {
  UserManagementDomainService,
  UserRegistrationDomainService,
} from '@domain-services';
import { Injectable } from '@nestjs/common';
import { UserBusinessEnforcer } from '@use-cases/application-services/process';

export type RegisterAdminProcessSuccess = AdminRegisteredDomainEvent;
export type RegisterAdminProcessFailure = Array<
  | UserDomainExceptions.EmailAlreadyExists
  | UserDomainExceptions.UsernameAlreadyExists
>;

@Injectable()
export class RegisterAdminProcess extends ProcessBase<
  RegisterAdminProcessSuccess,
  RegisterAdminProcessFailure
> {
  protected async enforceBusinessRules(
    command: RegisterAdminCommand,
  ): Promise<void> {
    const { email, username } = command;

    await this.userBusinessEnforcer.emailMustBeUnique(email);
    await this.userBusinessEnforcer.usernameMustBeUnique(username);
  }
  protected executeMainTask(
    command: RegisterAdminCommand,
  ): Promise<AdminRegisteredDomainEvent> {
    return this.userRegistrationService.registerAdmin(command);
  }

  constructor(
    private readonly userManagementService: UserManagementDomainService,
    private readonly userRegistrationService: UserRegistrationDomainService,
    private readonly userBusinessEnforcer: UserBusinessEnforcer<RegisterAdminProcessFailure>,
  ) {
    super({
      businessEnforcer: userBusinessEnforcer,
    });
  }
}
