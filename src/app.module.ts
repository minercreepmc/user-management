import { RegisterGuestHttpController } from '@controllers/http/register-guest';
import { DatabaseModule } from '@database/di';
import {
  UserTypeOrmModel,
  UserTypeOrmRepository,
} from '@database/repositories/typeorm/user';
import { userRepositoryDiToken } from '@domain-interfaces';
import {
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

// Domain
const domainServices: Provider[] = [
  UserRegistrationDomainService,
  UserVerificationDomainService,
];

// Infrastructure
const repositories: Provider[] = [
  {
    provide: userRepositoryDiToken,
    useValue: UserTypeOrmRepository,
  },
];

// Use Case
const registerGuestUseCase: Provider[] = [
  RegisterGuestHandler,
  RegisterGuestProcess,
  RegisterGuestMapper,
];

const useCases = [...registerGuestUseCase];

// Controllers
const registerGuestControllers = [RegisterGuestHttpController];

const controllers = [...registerGuestControllers];

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
