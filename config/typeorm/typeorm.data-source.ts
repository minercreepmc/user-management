import {
  CreateUser1684832921800,
  RenamePasswordToHashed1685017791850,
} from '@database/migrations';
import { UserTypeOrmModel } from '@database/repositories/typeorm/user';
import { ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';

const configService = new ConfigService();
export const typeOrmDataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: configService.get('POSTGRES_HOST'),
  port: configService.get('POSTGRES_PORT'),
  username: configService.get('POSTGRES_USER'),
  password: configService.get('POSTGRES_PASSWORD'),
  database: configService.get('POSTGRES_DB'),
  entities: [UserTypeOrmModel],
  migrations: [CreateUser1684832921800, RenamePasswordToHashed1685017791850],
  //synchronize: true,
};
export const typeormDataSource = new DataSource(typeOrmDataSourceOptions);
