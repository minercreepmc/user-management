export class RegisterGuestResponseDto {
  username: string;
  userId: string;
  constructor(dto: RegisterGuestResponseDto) {
    this.userId = dto.userId;
    this.username = dto.username;
  }
}
