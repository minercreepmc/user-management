import { RegisterAdminHttpController } from '@controllers/http/register-admin';
import {
  UserTypeOrmModel,
  UserTypeOrmRepository,
} from '@database/repositories/typeorm/user';
import { userRepositoryDiToken } from '@domain-interfaces';
import {
  PasswordHashingDomainService,
  UserManagementDomainService,
  UserRegistrationDomainService,
  UserVerificationDomainService,
} from '@domain-services';
import { Module, Provider } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStrategy } from '@src/interface-adapters/strategy';
import { RegisterAdminHandler } from '@use-cases/register-admin';
import {
  RegisterAdminMapper,
  RegisterAdminProcess,
  RegisterAdminValidator,
} from '@use-cases/register-admin/application-services';

const repositories: Provider[] = [
  {
    provide: userRepositoryDiToken,
    useClass: UserTypeOrmRepository,
  },
];

const domainServices: Provider[] = [
  UserManagementDomainService,
  UserRegistrationDomainService,
  PasswordHashingDomainService,
  UserVerificationDomainService,
];
const registerAdminUseCase: Provider[] = [
  RegisterAdminHandler,
  RegisterAdminProcess,
  RegisterAdminValidator,
  RegisterAdminMapper,
];
const regsiterAdminControllers = [RegisterAdminHttpController];
const vendors = [CqrsModule, TypeOrmModule.forFeature([UserTypeOrmModel])];

@Module({
  imports: [...vendors],
  controllers: [...regsiterAdminControllers],
  providers: [
    ...registerAdminUseCase,
    ...domainServices,
    ...repositories,
    JwtStrategy,
  ],
})
export class RegisterAdminModule {}
