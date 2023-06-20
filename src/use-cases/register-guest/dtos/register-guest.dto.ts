import { RequestDtoBase, ResponseDtoBase } from '@base/use-cases';

export class RegisterGuestRequestDto extends RequestDtoBase<RegisterGuestResponseDto> {
  constructor(dto: Omit<RegisterGuestRequestDto, 'returnType'>) {
    super();
  }
}

export class RegisterGuestResponseDto extends ResponseDtoBase {
  username: string;
  userId: string;
  constructor(dto: Omit<RegisterGuestResponseDto, 'message'>) {
    super('guest registered successfully.');
    this.userId = dto.userId;
    this.username = dto.username;
  }
}
