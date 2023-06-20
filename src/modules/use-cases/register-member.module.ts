import { V1RegisterMemberHttpController } from '@controllers/http/v1';
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
import { V1RegisterMemberRmqMessageHandler } from '@message-handlers/rmq/v1';
import { MediatorModule } from 'nestjs-mediator';

const applicationServices: Provider[] = [
  RegisterMemberHandler,
  RegisterMemberProcess,
  RegisterMemberValidator,
  RegisterMemberMapper,
];
const controllers = [V1RegisterMemberHttpController];
const messageHandlers = [V1RegisterMemberRmqMessageHandler];

const sharedModules = [MediatorModule, DatabaseModule, DomainServiceModule];

@Module({
  imports: [...sharedModules],
  controllers: [...controllers, ...messageHandlers],
  providers: [...applicationServices, JwtStrategy],
})
export class RegisterMemberModule {}
