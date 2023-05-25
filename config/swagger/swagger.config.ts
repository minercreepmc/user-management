import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerOption = new DocumentBuilder()
  .setTitle('User Managemenet API')
  .setDescription('The User Management API description')
  .setVersion('0.1')
  .build();
