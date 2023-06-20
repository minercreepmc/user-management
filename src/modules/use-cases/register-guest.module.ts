import { V1RegisterGuestHttpController } from '@controllers/http/v1';
import { Module, Provider } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { JwtStrategy } from '@src/interface-adapters/strategy';
import { RegisterGuestHandler } from '@use-cases/register-guest';
import {
  RegisterGuestMapper,
  RegisterGuestProcess,
} from '@use-cases/register-guest/application-services';
import { DomainServiceModule } from '../domain';
import { DatabaseModule } from '@modules/infrastructures/database';
import { MediatorModule } from 'nestjs-mediator';

const applicationServices: Provider[] = [
  RegisterGuestHandler,
  RegisterGuestProcess,
  RegisterGuestMapper,
];
const controllers = [V1RegisterGuestHttpController];
const sharedModules = [DomainServiceModule, DatabaseModule, MediatorModule];

@Module({
  imports: [...sharedModules],
  controllers: [...controllers],
  providers: [...applicationServices, JwtStrategy],
})
export class RegisterGuestModule {}
