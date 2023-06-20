import { ApiProperty } from '@nestjs/swagger';

export class V1RegisterMemberHttpRequest {
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
