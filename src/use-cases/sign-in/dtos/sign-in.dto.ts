import { RequestDtoBase, ResponseDtoBase } from '@base/use-cases';

export class SignInRequestDto extends RequestDtoBase<SignInResponseDto> {
  username: string;
  email: string;
  password: string;
  constructor(dto: any) {
    super();
    this.username = dto.username;
    this.email = dto.email;
    this.password = dto.password;
  }
}

export class SignInResponseDto extends ResponseDtoBase {
  access_token: string;

  constructor(dto: SignInResponseDto) {
    super('logged in successfully');
    this.access_token = dto.access_token;
  }
}
