import { UserAggregate } from '@aggregates/user/user.aggregate';
import { RegisterUserAggregateOptions } from '@aggregates/user/user.aggregate.interface';
import { userRepositoryDiToken, UserRepositoryPort } from '@domain-interfaces';
import { Inject, Injectable } from '@nestjs/common';
import { UserVerificationDomainService } from './user-verification.domain-service';

export type RegisterMemberServiceOptions = RegisterUserAggregateOptions;
export type RegisterAdminServiceOptions = RegisterUserAggregateOptions;

@Injectable()
export class UserRegistrationDomainService {
  constructor(
    private readonly userVerificationService: UserVerificationDomainService,
    @Inject(userRepositoryDiToken)
    private readonly userRepository: UserRepositoryPort,
  ) {}

  async registerGuest() {
    const userAggregate = new UserAggregate();
    const guestCreated = userAggregate.registerGuest();

    return guestCreated;
  }

  async registerMember(options: RegisterMemberServiceOptions) {
    await this.userVerificationService.verifyUserRegistrationOptions(options);

    const userAggregate = new UserAggregate();
    const userRegistered = userAggregate.registerMember(options);

    await this.userRepository.save(userAggregate);

    return userRegistered;
  }

  async registerAdmin(options: RegisterAdminServiceOptions) {
    await this.userVerificationService.verifyUserRegistrationOptions(options);

    const userAggregate = new UserAggregate();
    const adminRegistered = userAggregate.registerAdmin(options);

    await this.userRepository.save(userAggregate);

    return adminRegistered;
  }
}
