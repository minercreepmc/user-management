import { UserDomainExceptions } from '@domain-exceptions/user';
import {
  PasswordManagementDomainService,
  UserManagementDomainService,
} from '@domain-services';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ProcessBase } from '@use-cases/common';
import { UserEmailValueObject } from '@value-objects/user';
import { SignInDomainOptions } from '../dtos';

export type AuthenticatedResult = {
  accessToken: string;
};
export type SignInProcessSuccess = AuthenticatedResult;
export type SignInProcessFailure = Array<any>;

@Injectable()
export class SignInProcess extends ProcessBase<
  SignInProcessSuccess,
  SignInProcessFailure
> {
  constructor(
    private readonly userManagementService: UserManagementDomainService,
    private readonly passwordManagementService: PasswordManagementDomainService,
    private readonly jwtService: JwtService,
  ) {
    super();
  }

  async execute(userProvide: SignInDomainOptions) {
    const { email } = userProvide;

    await this.checkUserMustHaveRegistered(email);

    if (this.exceptions.length === 0) {
      await this.signIn(userProvide);
    }

    return this.getValidationResult();
  }
  protected init(): void {
    this.clearValue();
    this.clearExceptions();
  }

  async checkUserMustHaveRegistered(email: UserEmailValueObject) {
    const user = await this.userManagementService.findUserByEmail(email);

    if (!user) {
      this.exceptions.push(new UserDomainExceptions.CredentialDoesNotValid());
    }
  }

  async signIn(userProvide: SignInDomainOptions) {
    const { isAuthenticated, user } =
      await this.passwordManagementService.authenticateUser(userProvide);

    if (!isAuthenticated) {
      this.exceptions.push(new UserDomainExceptions.CredentialDoesNotValid());
    }

    const payload = {
      sub: user.id,
      username: user.username,
    };

    this.value = {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
