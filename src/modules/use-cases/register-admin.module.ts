import { RegisterAdminHttpController } from '@controllers/http/register-admin';
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

const applicationServices: Provider[] = [
  RegisterAdminHandler,
  RegisterAdminProcess,
  RegisterAdminValidator,
  RegisterAdminMapper,
];
const controllers = [RegisterAdminHttpController];
const sharedModules = [CqrsModule, DatabaseModule, DomainServiceModule];

@Module({
  imports: [...sharedModules],
  controllers: [...controllers],
  providers: [...applicationServices, JwtStrategy],
})
export class RegisterAdminModule {}
