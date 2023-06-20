import { ApiProperty } from '@nestjs/swagger';

export class V1RegisterGuestHttpResponse {
  @ApiProperty()
  username: string;
  @ApiProperty()
  userId: string;
  @ApiProperty()
  message: string;
  constructor(dtos: V1RegisterGuestHttpResponse) {
    this.username = dtos.username;
    this.userId = dtos.userId;
    this.message = dtos.message;
  }
}
