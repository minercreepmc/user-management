export class SignInResponseDto {
  access_token: string;

  constructor(dto: SignInResponseDto) {
    this.access_token = dto.access_token;
  }
}
