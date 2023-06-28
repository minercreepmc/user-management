import { ProcessBase } from '@base/use-cases';
import { SignInCommand } from '@commands';
import { UserDomainExceptions } from '@domain-exceptions/user';
import { PasswordManagementDomainService } from '@domain-services';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserBusinessEnforcer } from '@use-cases/application-services/process';

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
  protected async enforceBusinessRules(command: SignInCommand): Promise<void> {
    const { email } = command;

    await this.userBusinessEnforcer.userMustHaveRegistered(email);
  }
  protected executeMainTask(
    command: SignInCommand,
  ): Promise<AuthenticatedResult> {
    return this.signIn(command);
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

    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }

  constructor(
    private readonly passwordManagementService: PasswordManagementDomainService,
    private readonly jwtService: JwtService,
    private readonly userBusinessEnforcer: UserBusinessEnforcer<SignInProcessFailure>,
  ) {
    super({
      businessEnforcer: userBusinessEnforcer,
    });
  }
}
