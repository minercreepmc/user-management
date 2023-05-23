import { UserDomainExceptions } from '@domain-exceptions/user';
import { UserRepositoryPort } from '@domain-interfaces';
import { UserEmailValueObject, UserNameValueObject } from '@value-objects/user';
import { RegisterUserServiceOptions } from './user-registration.domain-serivce';

export class UserVerificationDomainService {
  constructor(private readonly userRepository: UserRepositoryPort) {}
  async verifyUserRegistrationOptions(options: RegisterUserServiceOptions) {
    const { email, username } = options;

    await Promise.all([
      this.checkEmailMustNotExist(email),
      this.checkUserNameMustNotExist(username),
    ]);
  }

  async checkEmailMustNotExist(email: UserEmailValueObject) {
    const exist = await this.userRepository.findOneByEmail(email);
    if (exist) {
      throw new UserDomainExceptions.AlreadyExists();
    }
  }

  async checkUserNameMustNotExist(username: UserNameValueObject) {
    const exist = await this.userRepository.findOneByUserName(username);

    if (exist) {
      throw new UserDomainExceptions.AlreadyExists();
    }
  }
}
