import { RegisterGuestHttpController } from '@controllers/http/register-guest';
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

const applicationServices: Provider[] = [
  RegisterGuestHandler,
  RegisterGuestProcess,
  RegisterGuestMapper,
];
const controllers = [RegisterGuestHttpController];
const sharedModules = [CqrsModule, DomainServiceModule, DatabaseModule];

@Module({
  imports: [...sharedModules],
  controllers: [...controllers],
  providers: [...applicationServices, JwtStrategy],
})
export class RegisterGuestModule {}
