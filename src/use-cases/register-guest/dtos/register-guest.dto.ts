import { RequestDtoBase, ResponseDtoBase } from '@base/use-cases';

export class RegisterGuestRequestDto extends RequestDtoBase<RegisterGuestResponseDto> {
  constructor(dto: any) {
    super();
  }
}

export class RegisterGuestResponseDto extends ResponseDtoBase {
  username: string;
  userId: string;
  constructor(dto: RegisterGuestResponseDto) {
    super();
    this.userId = dto.userId;
    this.username = dto.username;
  }
}
