import { ApiProperty } from '@nestjs/swagger';

export class V1RegisterGuestHttpResponse {
  @ApiProperty()
  username: string;
  @ApiProperty()
  userId: string;
  @ApiProperty()
  message: string;
  constructor(dtos: Omit<V1RegisterGuestHttpResponse, 'message'>) {
    this.username = dtos.username;
    this.userId = dtos.userId;
    this.message = 'guest registered successfully.';
  }
}
