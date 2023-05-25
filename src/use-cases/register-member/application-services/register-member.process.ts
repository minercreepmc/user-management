import { MemberRegisteredDomainEvent } from '@domain-events/user';
import { UserDomainExceptions } from '@domain-exceptions/user';
import {
  UserRegistrationDomainService,
  UserVerificationDomainService,
} from '@domain-services';
import { Injectable } from '@nestjs/common';
import { ProcessBase } from '@use-cases/common';
import { UserEmailValueObject, UserNameValueObject } from '@value-objects/user';
import { RegisterMemberDomainOptions } from '../dtos';

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

  async execute(domainOptions: RegisterMemberDomainOptions) {
    const { username, email } = domainOptions;

    this.init();

    const conditions = [
      this.checkUsernameMustBeUnique(username),
      this.checkEmailMustBeUnique(email),
    ];

    await Promise.all(conditions);

    if (this.exceptions.length === 0) {
      await this.registerMember(domainOptions);
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

  private async registerMember(options: RegisterMemberDomainOptions) {
    const memberRegistered = await this.userRegistrationService.registerMember(
      options,
    );

    this.value = memberRegistered;
  }
}
