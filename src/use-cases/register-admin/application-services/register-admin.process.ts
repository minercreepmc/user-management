import { ProcessBase } from '@base/use-cases';
import { RegisterAdminCommand } from '@commands';
import { AdminRegisteredDomainEvent } from '@domain-events/user';
import { UserDomainExceptions } from '@domain-exceptions/user';
import {
  UserManagementDomainService,
  UserRegistrationDomainService,
} from '@domain-services';
import { Injectable } from '@nestjs/common';
import { UserEmailValueObject, UserNameValueObject } from '@value-objects/user';

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
  constructor(
    private readonly userManagementService: UserManagementDomainService,
    private readonly userRegistrationService: UserRegistrationDomainService,
  ) {
    super();
  }

  async execute(command: RegisterAdminCommand) {
    this.init();
    const { email, username } = command;

    const conditions = [
      this.checkEmailUniqueness(email),
      this.checkUsernameUniqueness(username),
    ];

    await Promise.all(conditions);

    if (this.exceptions.length === 0) {
      await this.registerAdmin(command);
    }

    return this.getValidationResult();
  }
  protected init(): void {
    this.clearValue();
    this.clearExceptions();
  }

  private async checkUsernameUniqueness(username: UserNameValueObject) {
    const user = await this.userManagementService.findUserByUsername(username);

    if (user) {
      this.exceptions.push(new UserDomainExceptions.UsernameAlreadyExists());
    }
  }

  private async checkEmailUniqueness(email: UserEmailValueObject) {
    const user = await this.userManagementService.findUserByEmail(email);

    if (user) {
      this.exceptions.push(new UserDomainExceptions.EmailAlreadyExists());
    }
  }

  private async registerAdmin(command: RegisterAdminCommand) {
    const adminRegistered = await this.userRegistrationService.registerAdmin(
      command,
    );

    this.value = adminRegistered;
  }
}
