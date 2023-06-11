import { RegisterMemberHttpController } from '@controllers/http/register-member';
import { Module, Provider } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { JwtStrategy } from '@src/interface-adapters/strategy';
import { RegisterMemberHandler } from '@use-cases/register-member';
import {
  RegisterMemberMapper,
  RegisterMemberProcess,
  RegisterMemberValidator,
} from '@use-cases/register-member/application-services';
import { DomainServiceModule } from '../domain';
import { DatabaseModule } from '@modules/infrastructures/database';

const applicationServices: Provider[] = [
  RegisterMemberHandler,
  RegisterMemberProcess,
  RegisterMemberValidator,
  RegisterMemberMapper,
];
const controllers = [RegisterMemberHttpController];

const sharedModules = [CqrsModule, DatabaseModule, DomainServiceModule];

@Module({
  imports: [...sharedModules],
  controllers: [...controllers],
  providers: [...applicationServices, JwtStrategy],
})
export class RegisterMemberModule {}
