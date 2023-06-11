import { ApiProperty } from '@nestjs/swagger';
import { RegisterGuestResponseDto } from '@use-cases/register-guest/dtos';

export class V1RegisterGuestHttpResponse implements RegisterGuestResponseDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  userId: string;
  constructor(dtos: V1RegisterGuestHttpResponse) {
    this.username = dtos.username;
    this.userId = dtos.userId;
  }
}
