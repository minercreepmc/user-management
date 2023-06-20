import { V1SignInHttpController } from '@controllers/http/v1';
import { Module, Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '@src/interface-adapters/strategy';
import { SignInHandler } from '@use-cases/sign-in';
import {
  SignInMapper,
  SignInProcess,
  SignInValidator,
} from '@use-cases/sign-in/application-services';
import { DomainServiceModule } from '../domain';
import { DatabaseModule } from '@modules/infrastructures/database';
import { MediatorModule } from 'nestjs-mediator';

const applicationServices: Provider[] = [
  SignInHandler,
  SignInProcess,
  SignInValidator,
  SignInMapper,
];

const signInControllers = [V1SignInHttpController];

const configService = new ConfigService();
const sharedModules = [
  MediatorModule,
  DatabaseModule,
  DomainServiceModule,
  JwtModule.register({
    secret: configService.get('JWT_SECRET'),
    signOptions: {
      expiresIn: '1d',
    },
  }),
];

@Module({
  imports: [...sharedModules],
  controllers: [...signInControllers],
  providers: [...applicationServices, JwtStrategy],
})
export class SignInModule {}
