import { ApiProperty } from '@nestjs/swagger';
import { RegisterMemberResponseDto } from '@use-cases/register-member/dtos';

export class V1RegisterMemberHttpResponse implements RegisterMemberResponseDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  email?: string;
  @ApiProperty()
  firstName?: string;
  @ApiProperty()
  lastName?: string;

  constructor(dto: RegisterMemberResponseDto) {
    this.username = dto.username;
    this.email = dto.email;
    this.firstName = dto.firstName;
    this.lastName = dto.lastName;
  }
}
