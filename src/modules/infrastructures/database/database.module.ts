import { Module, Provider } from '@nestjs/common';
import { unitOfWorkDiToken, userRepositoryDiToken } from '@domain-interfaces';
import { UserMikroOrmRepository } from '@database/repositories/mikroorm/user';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import mikroOrmConfig from '@config/mikroorm/mikrorm.config';
import { PasswordHashingDomainService } from '@domain-services';
import { MikroOrmUnitOfWork } from '@utils/base/database/unit-of-work';
import { OutboxService } from '@utils/base/database/outbox';
import { IpcModule } from '../ipc';

const repositories: Provider[] = [
  {
    provide: userRepositoryDiToken,
    useClass: UserMikroOrmRepository,
  },
  {
    provide: unitOfWorkDiToken,
    useClass: MikroOrmUnitOfWork,
  },
];

@Module({
  imports: [MikroOrmModule.forRoot(mikroOrmConfig), IpcModule],
  providers: [...repositories, PasswordHashingDomainService, OutboxService],
  exports: [...repositories],
})
export class DatabaseModule {}
