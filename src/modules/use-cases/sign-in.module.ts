import { SignInHttpController } from '@controllers/http/sign-in';
import {
  UserTypeOrmModel,
  UserTypeOrmRepository,
} from '@database/repositories/typeorm/user';
import { userRepositoryDiToken } from '@domain-interfaces';
import {
  PasswordHashingDomainService,
  PasswordManagementDomainService,
  UserManagementDomainService,
} from '@domain-services';
import { Module, Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStrategy } from '@src/interface-adapters/strategy';
import { SignInHandler } from '@use-cases/sign-in';
import {
  SignInMapper,
  SignInProcess,
  SignInValidator,
} from '@use-cases/sign-in/application-services';
import { DatabaseModule } from '../database';

const repositories: Provider[] = [
  {
    provide: userRepositoryDiToken,
    useClass: UserTypeOrmRepository,
  },
];

const domainServices: Provider[] = [
  UserManagementDomainService,
  PasswordManagementDomainService,
  PasswordHashingDomainService,
];

const signInUseCase: Provider[] = [
  SignInHandler,
  SignInProcess,
  SignInValidator,
  SignInMapper,
];

const signInControllers = [SignInHttpController];

const configService = new ConfigService();

const vendors = [
  CqrsModule,
  DatabaseModule,
  TypeOrmModule.forFeature([UserTypeOrmModel]),
  PassportModule,
  JwtModule.register({
    secret: configService.get('JWT_SECRET'),
    signOptions: {
      expiresIn: '1d',
    },
  }),
];

@Module({
  imports: [...vendors],
  controllers: [...signInControllers],
  providers: [
    ...domainServices,
    ...signInUseCase,
    JwtStrategy,
    ...repositories,
  ],
})
export class SignInModule {}
