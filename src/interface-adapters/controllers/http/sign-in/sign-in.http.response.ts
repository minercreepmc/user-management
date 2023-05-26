import { SignInResponseDto } from '@use-cases/sign-in/dtos';

export class SignInHttpResponse implements SignInResponseDto {
  access_token: string;

  constructor(dto: SignInResponseDto) {
    this.access_token = dto.access_token;
  }
}
