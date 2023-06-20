import { ProcessBase } from '@base/use-cases';
import { RegisterMemberCommand } from '@commands';
import { MemberRegisteredDomainEvent } from '@domain-events/user';
import { UserDomainExceptions } from '@domain-exceptions/user';
import {
  UserRegistrationDomainService,
  UserVerificationDomainService,
} from '@domain-services';
import { Injectable } from '@nestjs/common';
import { UserEmailValueObject, UserNameValueObject } from '@value-objects/user';

export type RegisterMemberProcessSuccess = MemberRegisteredDomainEvent;
export type RegisterMemberProcessFailure = Array<any>;

@Injectable()
export class RegisterMemberProcess extends ProcessBase<
  RegisterMemberProcessSuccess,
  RegisterMemberProcessFailure
> {
  constructor(
    private readonly userVerificationService: UserVerificationDomainService,
    private readonly userRegistrationService: UserRegistrationDomainService,
  ) {
    super();
  }

  async execute(command: RegisterMemberCommand) {
    const { username, email } = command;

    this.init();

    const conditions = [
      this.checkUsernameMustBeUnique(username),
      this.checkEmailMustBeUnique(email),
    ];

    await Promise.all(conditions);

    if (this.exceptions.length === 0) {
      await this.registerMember(command);
    }

    return this.getValidationResult();
  }
  protected init(): void {
    this.clearValue();
    this.clearExceptions();
  }

  private async checkUsernameMustBeUnique(username: UserNameValueObject) {
    const userNameUnique = await this.userVerificationService.isUserNameUnique(
      username,
    );

    if (!userNameUnique) {
      this.exceptions.push(new UserDomainExceptions.UsernameAlreadyExists());
    }
  }

  private async checkEmailMustBeUnique(email: UserEmailValueObject) {
    const userEmailUnique =
      await this.userVerificationService.isUserEmailUnique(email);

    if (!userEmailUnique) {
      this.exceptions.push(new UserDomainExceptions.EmailAlreadyExists());
    }
  }

  private async registerMember(command: RegisterMemberCommand) {
    const memberRegistered = await this.userRegistrationService.registerMember(
      command,
    );

    this.value = memberRegistered;
  }
}
