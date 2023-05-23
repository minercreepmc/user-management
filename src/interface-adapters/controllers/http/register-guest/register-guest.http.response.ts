import { RegisterGuestResponseDto } from '@use-cases/register-guest/dtos';

export class RegisterGuestHttpResponse implements RegisterGuestResponseDto {
  username: string;
  userId: string;
  constructor(dtos: RegisterGuestHttpResponse) {
    this.username = dtos.username;
    this.userId = dtos.userId;
  }
}
