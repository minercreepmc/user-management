import { RegisterGuestHttpController } from '@controllers/http/register-guest';
import {
  UserTypeOrmModel,
  UserTypeOrmRepository,
} from '@database/repositories/typeorm/user';
import { userRepositoryDiToken } from '@domain-interfaces';
import {
  PasswordHashingDomainService,
  UserRegistrationDomainService,
  UserVerificationDomainService,
} from '@domain-services';
import { Module, Provider } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStrategy } from '@src/interface-adapters/strategy';
import { RegisterGuestHandler } from '@use-cases/register-guest';
import {
  RegisterGuestMapper,
  RegisterGuestProcess,
} from '@use-cases/register-guest/application-services';

const repositories: Provider[] = [
  {
    provide: userRepositoryDiToken,
    useClass: UserTypeOrmRepository,
  },
];

const domainServices: Provider[] = [
  UserRegistrationDomainService,
  UserVerificationDomainService,
  PasswordHashingDomainService,
];

const registerGuestUseCase: Provider[] = [
  RegisterGuestHandler,
  RegisterGuestProcess,
  RegisterGuestMapper,
];
const registerGuestControllers = [RegisterGuestHttpController];
const vendors = [CqrsModule, TypeOrmModule.forFeature([UserTypeOrmModel])];

@Module({
  imports: [...vendors],
  controllers: [...registerGuestControllers],
  providers: [
    ...registerGuestUseCase,
    ...domainServices,
    ...repositories,
    JwtStrategy,
  ],
})
export class RegisterGuestModule {}
