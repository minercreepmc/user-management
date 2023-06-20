import { ApiProperty } from '@nestjs/swagger';

export class V1SignInHttpRequest {
  @ApiProperty({
    example: 'username',
    description: 'Username',
  })
  username: string;

  @ApiProperty({
    example: 'email@example.com',
    description: 'Email',
  })
  email: string;

  @ApiProperty({
    example: 'password',
    description: 'Password',
  })
  password: string;
}
