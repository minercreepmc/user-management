import { ApiProperty } from '@nestjs/swagger';
import { RegisterAdminCommand } from '@use-cases/register-admin/dtos';

export class RegisterAdminHttpRequest implements RegisterAdminCommand {
  @ApiProperty({
    example: 'username',
  })
  username: string;

  @ApiProperty({
    example: 'email@example.com',
  })
  email: string;

  @ApiProperty({
    example: 'password',
  })
  password: string;

  @ApiProperty({
    example: 'firstName',
  })
  firstName?: string;

  @ApiProperty({
    example: 'lastName',
  })
  lastName?: string;
}
