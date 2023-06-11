import { Module, Provider } from '@nestjs/common';
import { userRepositoryDiToken } from '@domain-interfaces';
import { UserMikroOrmRepository } from '@database/repositories/mikroorm/user';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import mikroOrmConfig from '@config/mikroorm/mikrorm.config';
import { PasswordHashingDomainService } from '@domain-services';

const repositories: Provider[] = [
  {
    provide: userRepositoryDiToken,
    useClass: UserMikroOrmRepository,
  },
];

@Module({
  imports: [MikroOrmModule.forRoot(mikroOrmConfig)],
  providers: [...repositories, PasswordHashingDomainService],
  exports: [...repositories],
})
export class DatabaseModule {}
