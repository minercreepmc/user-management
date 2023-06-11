import { ApiProperty } from '@nestjs/swagger';
import { SignInCommand } from '@use-cases/sign-in/dtos';

export class V1SignInHttpRequest implements SignInCommand {
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
