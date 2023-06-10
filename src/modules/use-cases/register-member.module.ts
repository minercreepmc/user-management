import { RegisterMemberHttpController } from '@controllers/http/register-member';
import {
  UserTypeOrmModel,
  UserTypeOrmRepository,
} from '@database/repositories/typeorm/user';
import { userRepositoryDiToken } from '@domain-interfaces';
import {
  PasswordHashingDomainService,
  UserRegistrationDomainService,
  UserVerificationDomainService,
} from '@domain-services';
import { Module, Provider } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStrategy } from '@src/interface-adapters/strategy';
import { RegisterMemberHandler } from '@use-cases/register-member';
import {
  RegisterMemberMapper,
  RegisterMemberProcess,
  RegisterMemberValidator,
} from '@use-cases/register-member/application-services';

const repositories: Provider[] = [
  {
    provide: userRepositoryDiToken,
    useClass: UserTypeOrmRepository,
  },
];

const domainServices: Provider[] = [
  UserVerificationDomainService,
  UserRegistrationDomainService,
  PasswordHashingDomainService,
];

const registerMemberUseCase: Provider[] = [
  RegisterMemberHandler,
  RegisterMemberProcess,
  RegisterMemberValidator,
  RegisterMemberMapper,
];
const registerMemberControllers = [RegisterMemberHttpController];

const vendors = [CqrsModule, TypeOrmModule.forFeature([UserTypeOrmModel])];

@Module({
  imports: [...vendors],
  controllers: [...registerMemberControllers],
  providers: [
    ...domainServices,
    ...registerMemberUseCase,
    ...repositories,
    JwtStrategy,
  ],
})
export class RegisterMemberModule {}
