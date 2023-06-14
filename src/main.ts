import { swaggerOption } from '@config/swagger';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as path from 'path';
import { RmqService } from './modules/infrastructures/ipc/rmb';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const document = SwaggerModule.createDocument(app, swaggerOption);
  SwaggerModule.setup('docs', app, document);

  const swaggerSpecPath = path.join(
    process.cwd(),
    'config/swagger/swagger.json',
  );
  fs.writeFileSync(swaggerSpecPath, JSON.stringify(document));

  app.useGlobalPipes(
    new ValidationPipe({
      forbidUnknownValues: false,
    }),
  );

  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions());

  app.enableCors();

  await app.listen(3000);
  await app.startAllMicroservices();
}
bootstrap();
