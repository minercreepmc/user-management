import { UserMikroOrmModel } from '@database/repositories/mikroorm/user';
import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';
import { ConfigService } from '@nestjs/config';
import { OutboxModel } from '@utils/base/database/outbox';

const configService = new ConfigService();

const mikroOrmConfig: MikroOrmModuleSyncOptions = {
  type: 'postgresql',
  host: configService.get('POSTGRES_HOST'),
  port: configService.get('POSTGRES_PORT'),
  user: configService.get('POSTGRES_USER'),
  password: configService.get('POSTGRES_PASSWORD'),
  dbName: configService.get('POSTGRES_DB'),
  autoLoadEntities: true,
  entities: [UserMikroOrmModel, OutboxModel],
  migrations: {
    pathTs: './src/infrastructures/database/migrations',
  },
  allowGlobalContext: true
};

export default mikroOrmConfig;
