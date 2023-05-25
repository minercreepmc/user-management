import { RegisterGuestHttpController } from '@controllers/http/register-guest';
import { RegisterMemberHttpController } from '@controllers/http/register-member';
import { DatabaseModule } from '@database/di';
import {
  UserTypeOrmModel,
  UserTypeOrmRepository,
} from '@database/repositories/typeorm/user';
import { userRepositoryDiToken } from '@domain-interfaces';
import {
  PasswordManagementDomainService,
  UserRegistrationDomainService,
  UserVerificationDomainService,
} from '@domain-services';
import { Module, Provider } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterGuestHandler } from '@use-cases/register-guest';
import {
  RegisterGuestMapper,
  RegisterGuestProcess,
} from '@use-cases/register-guest/application-services';
import { RegisterMemberHandler } from '@use-cases/register-member';
import {
  RegisterMemberMapper,
  RegisterMemberProcess,
  RegisterMemberValidator,
} from '@use-cases/register-member/application-services';

// Domain
const domainServices: Provider[] = [
  UserRegistrationDomainService,
  UserVerificationDomainService,
  PasswordManagementDomainService,
];

// Infrastructure
const repositories: Provider[] = [
  {
    provide: userRepositoryDiToken,
    useClass: UserTypeOrmRepository,
  },
];

// Use Case
const registerGuestUseCase: Provider[] = [
  RegisterGuestHandler,
  RegisterGuestProcess,
  RegisterGuestMapper,
];

const registerMemberUseCase: Provider[] = [
  RegisterMemberHandler,
  RegisterMemberProcess,
  RegisterMemberValidator,
  RegisterMemberMapper,
];

const useCases = [...registerGuestUseCase, ...registerMemberUseCase];

// Controllers
const registerGuestControllers = [RegisterGuestHttpController];
const registerMemberControllers = [RegisterMemberHttpController];

const controllers = [...registerGuestControllers, ...registerMemberControllers];

// Vendors
const vendors = [CqrsModule, TypeOrmModule.forFeature([UserTypeOrmModel])];

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    ...vendors,
  ],
  controllers: [...controllers],
  providers: [...domainServices, ...repositories, ...useCases],
})
export class AppModule {}
