import { userRepositoryDiToken, UserRepositoryPort } from '@domain-interfaces';
import { Inject, Injectable } from '@nestjs/common';
import { UserEmailValueObject, UserNameValueObject } from '@value-objects/user';

@Injectable()
export class UserManagementDomainService {
  constructor(
    @Inject(userRepositoryDiToken)
    private readonly userRepository: UserRepositoryPort,
  ) {}

  findUserByEmail(email: UserEmailValueObject) {
    return this.userRepository.findOneByEmail(email);
  }

  findUserByUsername(username: UserNameValueObject) {
    return this.userRepository.findOneByUsername(username);
  }
}
