import { UserAggregate } from '@aggregates/user';
import { UserDomainExceptions } from '@domain-exceptions/user';
import { unitOfWorkDiToken, UnitOfWorkPort } from '@domain-interfaces';
import { Inject, Injectable } from '@nestjs/common';
import {
  UserEmailValueObject,
  UserPasswordValueObject,
} from '@value-objects/user';
import { PasswordHashingDomainService } from './password-hashing.domain-service';
import { UserManagementDomainService } from './user-management.domain-service';

export interface VerifyPasswordForEmailOptions {
  email: UserEmailValueObject;
  password: UserPasswordValueObject;
}

export interface AuthenticateUserResult {
  isAuthenticated: boolean;
  user?: UserAggregate;
}

@Injectable()
export class PasswordManagementDomainService {
  constructor(
    private readonly userManagementService: UserManagementDomainService,
    private readonly passwordHashingService: PasswordHashingDomainService,
    @Inject(unitOfWorkDiToken)
    private readonly unitOfWork: UnitOfWorkPort,
  ) {}

  async authenticateUser(
    userProvide: VerifyPasswordForEmailOptions,
  ): Promise<AuthenticateUserResult> {
    return this.unitOfWork.runInTransaction(async () => {
      const existingUser = await this.userManagementService.findUserByEmail(
        userProvide.email,
      );
      if (!existingUser) {
        throw new UserDomainExceptions.EmailDoesNotExist();
      }

      const verified = await this.passwordHashingService.comparePasswords(
        userProvide.password,
        existingUser.hashed,
      );

      if (!verified) {
        return {
          isAuthenticated: false,
        };
      }

      return {
        isAuthenticated: true,
        user: existingUser,
      };
    });
  }
}
