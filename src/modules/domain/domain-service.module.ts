import {
  PasswordHashingDomainService,
  PasswordManagementDomainService,
  UserManagementDomainService,
  UserRegistrationDomainService,
  UserVerificationDomainService,
} from '@domain-services';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../infrastructures/database';

@Module({
  imports: [DatabaseModule],
  providers: [
    PasswordHashingDomainService,
    PasswordManagementDomainService,
    UserManagementDomainService,
    UserRegistrationDomainService,
    UserVerificationDomainService,
  ],
  exports: [
    PasswordHashingDomainService,
    PasswordManagementDomainService,
    UserManagementDomainService,
    UserRegistrationDomainService,
    UserVerificationDomainService,
  ],
})
export class DomainServiceModule {}
