import { ApiProperty } from '@nestjs/swagger';
import { SignInResponseDto } from '@use-cases/sign-in/dtos';

export class V1SignInHttpResponse implements SignInResponseDto {
  @ApiProperty()
  access_token: string;

  constructor(dto: SignInResponseDto) {
    this.access_token = dto.access_token;
  }
}
