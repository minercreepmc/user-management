import { ApiProperty } from '@nestjs/swagger';
import { RegisterGuestResponseDto } from '@use-cases/register-guest/dtos';

export class RegisterGuestHttpResponse implements RegisterGuestResponseDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  userId: string;
  constructor(dtos: RegisterGuestHttpResponse) {
    this.username = dtos.username;
    this.userId = dtos.userId;
  }
}
