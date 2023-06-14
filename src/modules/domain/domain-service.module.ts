import {
  PasswordHashingDomainService,
  PasswordManagementDomainService,
  UserManagementDomainService,
  UserRegistrationDomainService,
  UserVerificationDomainService,
} from '@domain-services';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../infrastructures/database';
import { IpcModule } from '../infrastructures/ipc';

@Module({
  imports: [DatabaseModule, IpcModule],
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
