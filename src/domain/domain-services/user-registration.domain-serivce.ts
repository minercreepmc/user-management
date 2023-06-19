import { UserAggregate } from '@aggregates/user/user.aggregate';
import { RegisterUserAggregateOptions } from '@aggregates/user/user.aggregate.interface';
import {
  unitOfWorkDiToken,
  UnitOfWorkPort,
  userRepositoryDiToken,
  UserRepositoryPort,
} from '@domain-interfaces';
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
    @Inject(unitOfWorkDiToken)
    private readonly unitOfWork: UnitOfWorkPort,
  ) {}

  async registerGuest() {
    const userAggregate = new UserAggregate();
    const guestCreated = userAggregate.registerGuest();

    return guestCreated;
  }

  async registerMember(options: RegisterMemberServiceOptions) {
    return this.unitOfWork.runInTransaction(async () => {
      await this.userVerificationService.verifyUserRegistrationOptions(options);

      const userAggregate = new UserAggregate();
      const memberRegisteredDomainEvent = userAggregate.registerMember(options);

      await this.userRepository.save(userAggregate);

      return memberRegisteredDomainEvent;
    });
  }

  async registerAdmin(options: RegisterAdminServiceOptions) {
    return this.unitOfWork.runInTransaction(async () => {
      await this.userVerificationService.verifyUserRegistrationOptions(options);

      const userAggregate = new UserAggregate();
      const adminRegistered = userAggregate.registerAdmin(options);

      await this.userRepository.save(userAggregate);

      return adminRegistered;
    });
  }
}
