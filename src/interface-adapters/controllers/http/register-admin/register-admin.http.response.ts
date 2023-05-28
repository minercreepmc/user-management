import { ApiProperty } from '@nestjs/swagger';
import { RegisterAdminResponseDto } from '@use-cases/register-admin/dtos';

export class RegisterAdminHttpResponse implements RegisterAdminResponseDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  firstName?: string;
  @ApiProperty()
  lastName?: string;

  constructor(dto: RegisterAdminResponseDto) {
    this.username = dto.username;
    this.email = dto.email;
    this.firstName = dto.firstName;
    this.lastName = dto.lastName;
  }
}
