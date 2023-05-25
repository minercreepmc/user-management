import { UserDomainExceptions } from '@domain-exceptions/user';
import { userRepositoryDiToken, UserRepositoryPort } from '@domain-interfaces';
import { Inject, Injectable } from '@nestjs/common';
import { UserEmailValueObject, UserNameValueObject } from '@value-objects/user';
import { RegisterMemberServiceOptions } from './user-registration.domain-serivce';

@Injectable()
export class UserVerificationDomainService {
  constructor(
    @Inject(userRepositoryDiToken)
    private readonly userRepository: UserRepositoryPort,
  ) {}
  async verifyUserRegistrationOptions(options: RegisterMemberServiceOptions) {
    const { email, username } = options;

    await Promise.all([
      this.checkEmailMustBeUnique(email),
      this.checkUserNameMustBeUnique(username),
    ]);
  }

  async isUserEmailUnique(email: UserEmailValueObject) {
    const exist = await this.userRepository.findOneByEmail(email);
    if (exist) {
      return false;
    }
    return true;
  }

  async isUserNameUnique(username: UserNameValueObject) {
    const exist = await this.userRepository.findOneByUsername(username);

    if (exist) {
      return false;
    }

    return true;
  }

  private async checkEmailMustBeUnique(email: UserEmailValueObject) {
    const unique = await this.isUserEmailUnique(email);
    if (!unique) {
      throw new UserDomainExceptions.EmailAlreadyExists();
    }
  }

  private async checkUserNameMustBeUnique(username: UserNameValueObject) {
    const unique = await this.isUserNameUnique(username);

    if (!unique) {
      throw new UserDomainExceptions.UsernameAlreadyExists();
    }
  }
}
