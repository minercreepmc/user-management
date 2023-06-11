import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { DatabaseModule } from './modules/infrastructures/database';
import { UseCaseModule } from './modules/use-cases';

// Vendors

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UseCaseModule,
    DatabaseModule,
    PassportModule,
  ],
})
export class AppModule {}
