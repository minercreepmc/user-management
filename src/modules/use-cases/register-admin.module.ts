import { V1RegisterAdminHttpController } from '@controllers/http/v1';
import { Module, Provider } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { JwtStrategy } from '@src/interface-adapters/strategy';
import { RegisterAdminHandler } from '@use-cases/register-admin';
import {
  RegisterAdminMapper,
  RegisterAdminProcess,
  RegisterAdminValidator,
} from '@use-cases/register-admin/application-services';
import { DomainServiceModule } from '../domain';
import { DatabaseModule } from '@modules/infrastructures/database';
import { MediatorModule } from 'nestjs-mediator';

const applicationServices: Provider[] = [
  RegisterAdminHandler,
  RegisterAdminProcess,
  RegisterAdminValidator,
  RegisterAdminMapper,
];
const controllers = [V1RegisterAdminHttpController];
const sharedModules = [MediatorModule, DatabaseModule, DomainServiceModule];

@Module({
  imports: [...sharedModules],
  controllers: [...controllers],
  providers: [...applicationServices, JwtStrategy],
})
export class RegisterAdminModule {}
