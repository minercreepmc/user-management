import { ApiProperty } from '@nestjs/swagger';
import { SignInResponseDto } from '@use-cases/sign-in/dtos';

export class V1SignInHttpResponse {
  @ApiProperty()
  access_token: string;
  @ApiProperty()
  message: string;

  constructor(dto: SignInResponseDto) {
    this.access_token = dto.access_token;
    this.message = dto.message;
  }
}
