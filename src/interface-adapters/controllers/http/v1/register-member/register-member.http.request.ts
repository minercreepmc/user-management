import { ApiProperty } from '@nestjs/swagger';
import { RegisterMemberCommand } from '@use-cases/register-member/dtos';

export class V1RegisterMemberHttpRequest implements RegisterMemberCommand {
  @ApiProperty({
    example: 'username',
    description: 'Username',
  })
  username: string;

  @ApiProperty({
    example: 'password',
    description: 'Password',
  })
  password: string;

  @ApiProperty({
    example: 'email@example.com',
    description: 'Email',
  })
  email?: string;

  @ApiProperty({
    example: 'firstName',
    description: 'First Name',
  })
  firstName?: string;

  @ApiProperty({
    example: 'lastName',
    description: 'Last Name',
  })
  lastName?: string;
}
