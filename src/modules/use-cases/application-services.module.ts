import { DomainServiceModule } from '@modules/domain';
import { Module, Provider } from '@nestjs/common';
import { UserBusinessEnforcer } from '@use-cases/application-services/process';
import { UserRequestValidator } from '@use-cases/application-services/validators';

const businessEnforcers: Provider[] = [UserBusinessEnforcer];
const requestValidators: Provider[] = [UserRequestValidator];

@Module({
  imports: [DomainServiceModule],
  providers: [...businessEnforcers, ...requestValidators],
  exports: [...businessEnforcers, ...requestValidators],
})
export class ApplicationServicesModule {}
