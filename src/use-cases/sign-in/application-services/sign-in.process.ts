import { ProcessBase } from '@base/use-cases';
import { SignInCommand } from '@commands';
import { UserDomainExceptions } from '@domain-exceptions/user';
import {
  PasswordManagementDomainService,
  UserManagementDomainService,
} from '@domain-services';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEmailValueObject } from '@value-objects/user';

export type AuthenticatedResult = {
  accessToken: string;
};
export type AuthenticationPayload = {
  userId: string;
  username: string;
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

  async execute(command: SignInCommand) {
    const { email } = command;

    await this.checkUserMustHaveRegistered(email);

    if (this.exceptions.length === 0) {
      await this.signIn(command);
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

  async signIn(userProvide: SignInCommand) {
    const { isAuthenticated, user } =
      await this.passwordManagementService.authenticateUser(userProvide);

    if (!isAuthenticated) {
      this.exceptions.push(new UserDomainExceptions.CredentialDoesNotValid());
    }

    const payload: AuthenticationPayload = {
      userId: user.id.unpack(),
      username: user.username.unpack(),
    };

    this.value = {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
