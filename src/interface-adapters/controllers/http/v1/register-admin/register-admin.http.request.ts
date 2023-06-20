import { ApiProperty } from '@nestjs/swagger';

export class V1RegisterAdminHttpRequest {
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
