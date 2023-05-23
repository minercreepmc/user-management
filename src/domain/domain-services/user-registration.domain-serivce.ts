import { UserAggregate } from '@aggregates/user/user.aggregate';
import { RegisterUserAggregateOptions } from '@aggregates/user/user.aggregate.interface';
import { userRepositoryDiToken, UserRepositoryPort } from '@domain-interfaces';
import { Inject, Injectable } from '@nestjs/common';
import { UserVerificationDomainService } from './user-verification.domain-service';

export type RegisterUserServiceOptions = RegisterUserAggregateOptions;

@Injectable()
export class UserRegistrationDomainService {
  constructor(
    private readonly userVerificationService: UserVerificationDomainService,
    @Inject(userRepositoryDiToken)
    private readonly userRepository: UserRepositoryPort,
  ) {}
  async registerMember(options: RegisterUserServiceOptions) {
    await this.userVerificationService.verifyUserRegistrationOptions(options);

    const userAggregate = new UserAggregate();
    const userRegistered = userAggregate.registerMember(options);

    await this.userRepository.save(userAggregate);

    return userRegistered;
  }

  async registerGuest() {
    const userAggregate = new UserAggregate();
    const guestCreated = userAggregate.registerGuest();

    return guestCreated;
  }
}
