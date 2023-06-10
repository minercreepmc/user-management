import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { DatabaseModule } from './modules/database';
import {
  GetProfileModule,
  RegisterAdminModule,
  RegisterGuestModule,
  RegisterMemberModule,
  SignInModule,
} from './modules/use-cases';

// Vendors
const configService = new ConfigService();
const vendors = [
  ConfigModule.forRoot({
    isGlobal: true,
  }),
  DatabaseModule,
  JwtModule.register({
    secret: configService.get('JWT_SECRET'),
    signOptions: {
      expiresIn: '1d',
    },
  }),
  PassportModule,
];

@Module({
  imports: [
    ...vendors,
    RegisterGuestModule,
    RegisterMemberModule,
    RegisterAdminModule,
    SignInModule,
    GetProfileModule,
  ],
})
export class AppModule {}
