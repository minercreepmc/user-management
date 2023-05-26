import { RegisterAdminResponseDto } from '@use-cases/register-admin/dtos';

export class RegisterAdminHttpResponse implements RegisterAdminResponseDto {
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;

  constructor(dto: RegisterAdminResponseDto) {
    this.username = dto.username;
    this.email = dto.email;
    this.firstName = dto.firstName;
    this.lastName = dto.lastName;
  }
}
