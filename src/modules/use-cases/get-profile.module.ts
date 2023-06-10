import { GetProfileHttpController } from '@controllers/http/get-profile';
import { Module } from '@nestjs/common';

const controllers = [GetProfileHttpController];

@Module({
  controllers: [...controllers],
})
export class GetProfileModule {}
