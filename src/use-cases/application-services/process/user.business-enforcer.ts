import { BusinessRulesEnforcer } from '@base/use-cases';
import { UserDomainExceptions } from '@domain-exceptions/user';
import {
  UserManagementDomainService,
  UserVerificationDomainService,
} from '@domain-services';
import { Injectable } from '@nestjs/common';
import { UserEmailValueObject, UserNameValueObject } from '@value-objects/user';

export type UserProcessFailure = Array<
  | UserDomainExceptions.UsernameAlreadyExists
  | UserDomainExceptions.EmailAlreadyExists
  | UserDomainExceptions.CredentialDoesNotValid
>;

@Injectable()
export class UserBusinessEnforcer<
  Failures extends UserProcessFailure,
> extends BusinessRulesEnforcer<Failures> {
  constructor(
    private readonly userVerificationService: UserVerificationDomainService,
    private readonly userManagementService: UserManagementDomainService,
  ) {
    super();
  }

  async usernameMustBeUnique(username: UserNameValueObject) {
    const userNameUnique = await this.userVerificationService.isUserNameUnique(
      username,
    );

    if (!userNameUnique) {
      this.exceptions.push(new UserDomainExceptions.UsernameAlreadyExists());
    }
  }

  async emailMustBeUnique(email: UserEmailValueObject) {
    const userEmailUnique =
      await this.userVerificationService.isUserEmailUnique(email);

    if (!userEmailUnique) {
      this.exceptions.push(new UserDomainExceptions.EmailAlreadyExists());
    }
  }

  async userMustHaveRegistered(email: UserEmailValueObject) {
    const user = await this.userManagementService.findUserByEmail(email);

    if (!user) {
      this.exceptions.push(new UserDomainExceptions.CredentialDoesNotValid());
    }
  }
}
