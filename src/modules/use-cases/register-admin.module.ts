import { V1RegisterAdminHttpController } from '@controllers/http/v1';
import { Module, Provider } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { JwtStrategy } from '@src/interface-adapters/strategy';
import { RegisterAdminHandler } from '@use-cases/register-admin';
import {
  RegisterAdminMapper,
  RegisterAdminProcess,
  RegisterAdminRequestValidator,
} from '@use-cases/register-admin/application-services';
import { DomainServiceModule } from '../domain';
import { DatabaseModule } from '@modules/infrastructures/database';
import { MediatorModule } from 'nestjs-mediator';
import { ApplicationServicesModule } from './application-services.module';

const applicationServices: Provider[] = [
  RegisterAdminHandler,
  RegisterAdminProcess,
  RegisterAdminRequestValidator,
  RegisterAdminMapper,
];
const controllers = [V1RegisterAdminHttpController];
const sharedModules = [
  MediatorModule,
  DatabaseModule,
  DomainServiceModule,
  ApplicationServicesModule,
];

@Module({
  imports: [...sharedModules],
  controllers: [...controllers],
  providers: [...applicationServices, JwtStrategy],
})
export class RegisterAdminModule {}
