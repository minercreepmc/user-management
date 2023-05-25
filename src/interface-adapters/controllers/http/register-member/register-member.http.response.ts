import { RegisterMemberResponseDto } from '@use-cases/register-member/dtos';

export class RegisterMemberHttpResponse implements RegisterMemberResponseDto {
  username: string;
  email?: string;
  firstName?: string;
  lastName?: string;

  constructor(dto: RegisterMemberResponseDto) {
    this.username = dto.username;
    this.email = dto.email;
    this.firstName = dto.firstName;
    this.lastName = dto.lastName;
  }
}
