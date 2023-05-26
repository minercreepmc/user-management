import { GetProfileHttpController } from '@controllers/http/get-profile';
import { RegisterAdminHttpController } from '@controllers/http/register-admin';
import { RegisterGuestHttpController } from '@controllers/http/register-guest';
import { RegisterMemberHttpController } from '@controllers/http/register-member';
import { SignInHttpController } from '@controllers/http/sign-in';
import { DatabaseModule } from '@database/di';
import {
  UserTypeOrmModel,
  UserTypeOrmRepository,
} from '@database/repositories/typeorm/user';
import { userRepositoryDiToken } from '@domain-interfaces';
import {
  PasswordHashingDomainService,
  PasswordManagementDomainService,
  UserManagementDomainService,
  UserRegistrationDomainService,
  UserVerificationDomainService,
} from '@domain-services';
import { Module, Provider } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterAdminHandler } from '@use-cases/register-admin';
import {
  RegisterAdminMapper,
  RegisterAdminProcess,
  RegisterAdminValidator,
} from '@use-cases/register-admin/application-services';
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
import { SignInHandler } from '@use-cases/sign-in';
import {
  SignInMapper,
  SignInProcess,
  SignInValidator,
} from '@use-cases/sign-in/application-services';

// Domain
const domainServices: Provider[] = [
  UserRegistrationDomainService,
  UserVerificationDomainService,
  PasswordManagementDomainService,
  PasswordHashingDomainService,
  UserManagementDomainService,
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

const registerAdminUseCase: Provider[] = [
  RegisterAdminHandler,
  RegisterAdminProcess,
  RegisterAdminValidator,
  RegisterAdminMapper,
];

const signInUseCase: Provider[] = [
  SignInHandler,
  SignInProcess,
  SignInValidator,
  SignInMapper,
];

const useCases = [
  ...registerGuestUseCase,
  ...registerMemberUseCase,
  ...signInUseCase,
  ...registerAdminUseCase,
];

// Controllers
const registerGuestControllers = [RegisterGuestHttpController];
const registerMemberControllers = [RegisterMemberHttpController];
const regsiterAdminControllers = [RegisterAdminHttpController];
const signInControllers = [SignInHttpController];
const getProfileController = [GetProfileHttpController];

const controllers = [
  ...registerGuestControllers,
  ...registerMemberControllers,
  ...signInControllers,
  ...regsiterAdminControllers,
  ...getProfileController,
];

// Vendors
const configService = new ConfigService();
const vendors = [
  CqrsModule,
  TypeOrmModule.forFeature([UserTypeOrmModel]),
  JwtModule.register({
    secret: configService.get('JWT_SECRET'),
    signOptions: {
      expiresIn: '1d',
    },
  }),
];

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
