import { typeormDataSource } from '@config/typeorm';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      forbidUnknownValues: false,
    }),
  );

  await typeormDataSource.initialize();
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
