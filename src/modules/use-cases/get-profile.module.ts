import { V1GetProfileHttpController } from '@controllers/http/v1';
import { Module } from '@nestjs/common';

const controllers = [V1GetProfileHttpController];

@Module({
  controllers: [...controllers],
})
export class GetProfileModule {}
