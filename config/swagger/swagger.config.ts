import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerOption = new DocumentBuilder()
  .setTitle('User Managemenet API')
  .setDescription('The User Management API description')
  .setVersion('0.1')
  .addBearerAuth()
  .addSecurity('x-api-key', {
    type: 'apiKey',
    in: 'header',
    name: 'x-api-key',
  })
  .build();
